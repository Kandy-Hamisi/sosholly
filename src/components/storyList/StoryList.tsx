'use client'

type StoryWithUser = Story & {
    user: User
}

import { addStory } from '@/lib/actions'
import { useUser } from '@clerk/nextjs'
import { Story, User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'

const StoryList = ({ stories, userId }: { stories: StoryWithUser[], userId: string}) => {

    const [ storyList, setStorylist ] = useState(stories);
    const [ img, setImg ] = useState<any>();

    const { user, isLoaded } = useUser();

    // if (!user && !isLoaded) return "Loading..";
    // if (!user && isLoaded) return null;

    const add = async () => {
        if (!img?.secure_url) return;

        addOptimisticStory({
            id: Math.random(),
            img: img.secure_url,
            createdAt: new Date(Date.now()),
            expiresAt: new Date(Date.now() * 24 * 60 * 60 * 1000),
            userId: userId,
            user: {
                id: userId,
                username: "Sending...",
                avatar: user?.imageUrl || "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                website: "",
                city: "",
                school: "",
                work: "",
                createdAt: new Date(Date.now()),
            }
        })
        try {
            const createdStory = await addStory(img.secure_url)
            if (createdStory) {
                setStorylist((prev) => [...prev, createdStory])
                setImg(null)
            }
        } catch (error) {
            
        }

    }
    const [ optimisticStory, addOptimisticStory ] = useOptimistic(storyList,
        (state, value:StoryWithUser) => [value, ...state]
    );

 
  return (
    <>
        <CldUploadWidget
            uploadPreset="sosholly"
            onSuccess={(result, widget) => { setImg(result.info); widget.close}}
        >
            {({ open }) => {
                return (
                    <div className='flex flex-col items-center gap-2 cursor-pointer relative'>
                        <Image
                            src={img?.secure_url || user?.imageUrl ||  "/noAvatar.png"}
                            alt=''
                            width={80}
                            height={80}
                            className='w-20 h-20 rounded-full ring-2 object-cover'
                            onClick={() => open()}
                        />
                        {img ? (<form action={add}>
                            <button className='text-xs bg-blue-500 p-1 rounded-md text-white'>Send</button>
                        </form>) :<span className='font-medium'>Add Story</span>}
                        <div className='absolute text-6xl text-gray-200 top-1'>+</div>
                    </div>
                );
            }}
        </CldUploadWidget>
        {/* Stories */}
        {
            optimisticStory.map((story) => (
                <div key={story.id} className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image
                        src={story.user.avatar || "/noAvatar.png"}
                        alt=''
                        width={80}
                        height={80}
                        className='w-20 h-20 rounded-full ring-2'
                    />
                    <span className='font-medium'>{ story.user.name || story.user.username }</span>
                </div>
            ))
        }
    </>
  )
}

export default StoryList
