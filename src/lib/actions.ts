// everything in here is going to run on ther server

'use server'

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";


export const switchFollow = async (userId: string) => {
    const { userId: currentUserId } = auth();

    if (!currentUserId) {
        throw new Error("User is not Authenticated");
    }

    try {
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: userId
            }
        });

        if (existingFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingFollow.id,
                }
            });
            return "Unfollowed";
        } else {
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUserId,
                    receiverId: userId
                }
            })

            if (existingFollowRequest) {
                await prisma.followRequest.delete({
                    where: {
                        id: existingFollowRequest.id,
                    }
                })
            } else {
                await prisma.followRequest.create({
                    data: {
                        senderId: currentUserId,
                        receiverId: userId
                    }
                })
            }
        }
    } catch (err) {
        console.error("Error fetching follower:", err);
        throw new Error("Failed to switch follow");
    }
}

export const acceptFollowRequest = async (userId:string) => {
    const { userId: currentUserId } = auth();

    if (!currentUserId) {
        throw new Error("User is not Authenticated");
    }

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
            senderId: userId,
            receiverId: currentUserId
        }
    });

    if (existingFollowRequest) {
        await prisma.followRequest.delete({
            where: {
                id: existingFollowRequest.id,
            }
        });
        await prisma.follower.create({
            data: {
                followerId: currentUserId,
                followingId: userId
            }
        });
        return "Followed"; 
    }
}

export const declineFollowRequest = async (userId:string) => {
    const { userId: currentUserId } = auth();

    if (!currentUserId) {
        throw new Error("User is not Authenticated");
    }

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
            senderId: userId,
            receiverId: currentUserId
        }
    });

    if (existingFollowRequest) {
        await prisma.followRequest.delete({
            where: {
                id: existingFollowRequest.id,
            }
        });
    }
}

export const updateProfile = async (prevState:{success:boolean, error:boolean}, payload:{formData: FormData, cover: string}) => {

    const { formData, cover} = payload;

    const fields = Object.fromEntries(formData);

    /* This code snippet is filtering out any key-value pairs in the `fields` object where the value is
    an empty string. */
    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([_, value]) => value !== "")
    );

    // console.log(fields);

    const Profile = z.object({
        cover:z.string().optional(),
        name:z.string().max(60).optional(),
        surname:z.string().max(60).optional(),
        description:z.string().max(255).optional(),
        city:z.string().max(60).optional(),
        school:z.string().max(60).optional(),
        work:z.string().max(60).optional(),
        website:z.string().max(60).optional(),
    })

    const validatedFields = Profile.safeParse({...filteredFields, cover});

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return { success: false, error: true }
    }

    const { userId } = auth();

    if (!userId) {
        return { success: false, error: true }
    }

    try {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: validatedFields.data,
        });
        return { success: true, error: false }
    } catch (err) {
        console.error("Error updating profile:", err);
        return { success: false, error: true }
    }
}

export const switchLike = async (postId: number) => {

    const { userId } = auth();

    if (!userId) {
        throw new Error("User is not Authenticated");
    }

    /* This block of code is a function called `switchLike` that handles toggling a like on a post.
    Here's a breakdown of what it does: */
    try {
        const existingLike = await prisma.like.findFirst({
            where: {
                postId,
                userId
            }
        });

        if (existingLike) {
            await prisma.like.delete({
                where: {
                    id: existingLike.id
                }
            })
        } else {
            await prisma.like.create({
                data: {
                    postId,
                    userId
                }
            })
        }

    } catch (err) {

    }
};

export const addComment = async(postId:number, desc:string) => {
    const { userId } = auth();

    if (!userId) {
        throw new Error("User is not Authenticated");
    }

    try {
        const createComment = await prisma.comment.create({
            data: {
                postId,
                userId,
                desc
            },
            include: {
                user: true
            }
        });

        return createComment;
    } catch (error) {
        console.log(error);
    }
}

export const addPost = async (formData: FormData, img: string) => {

    const desc = formData.get("desc") as string;
    
    const Desc = z.string().min(1).max(255);

    const validatedDesc = Desc.safeParse(desc);

    if (!validatedDesc.success) {
        //TODO:
        return
    }

    const { userId } = auth();

    if (!userId) {
        throw new Error("User is not Authenticated");
    }

    try {
        await prisma.post.create({
            data: {
                userId,
                desc: validatedDesc.data,
                img
            }
        });
        revalidatePath("/")
    } catch (error) {
        console.log(error);
    }
}


export const addStory = async ( img: string) => {
    const { userId } = auth();

    if (!userId) {
        throw new Error("User is not Authenticated");
    }

    try {

        const existingStory = await prisma.story.findFirst({
            where: {
                userId
            }
        });

        if (existingStory) {
            // await prisma.story.update({
            //     where: {
            //         id: existingStory.id
            //     },
            //     data: {
            //         img
            //     }
            // });
            // return "Story updated"

            await prisma.story.delete({
                where: {
                    id: existingStory.id
                }
            })
        }
        
        const createdStory = await prisma.story.create({
            data: {
                userId,
                img,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            },
            include: {
                user: true
            }
        });
        
        return createdStory;
    } catch (error) {
        console.log(error);
    }
}


const deleteStory = async (postId: number) => {
    const { userId } = auth();

    if (!userId) {
        throw new Error("User is not Authenticated");
    }

    try {
        await prisma.post.delete({
            where: {
                id: postId,
                userId,
            }
        });

        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }
}