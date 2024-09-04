// everything in here is going to run on ther server

'use server'

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";


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