'use client'

import prisma from '@/lib/client';
import { useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image'
import React, { useState } from 'react'
import AddPostButton from '../addPostButton/AddPostButton';
import { addPost } from '@/lib/actions';

const AddPost = () => {

  // const { userId } = auth();
  // console.log(userId);

  // const testAction = async (formData: FormData) => {
  //   "use server"

  //   if (!userId) return;

  //   const desc = formData.get("description") as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc
  //       }
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.error('Error adding post:', err)
  //   }
  // }

  const { user, isLoaded } = useUser();
  const [ desc, setDesc ] = useState("");
  const [ img, setImg ] = useState<any>();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className='w-12 h-12 object-cover rounded-full'
        width={48}
        height={48}
      />
      {/* Post */}
      <div className='flex-1'>
        {/* Text Input */}
        <form action={(formData) => addPost(formData, img?.secure_url || "")} className='flex gap-4'>
          <textarea
            className='flex-1 bg-slate-100 rounded-lg p-2'
            placeholder="what's on your mind?"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
            id=""
          ></textarea>
          <div className=''>
            <Image
              src="/emoji.png"
              alt=''
              width={20}
              height={20}
              className='w-5 h-5 cursor-pointer self-end mb-2'
            />
            <AddPostButton />
          </div>
        </form>
        {/* post options */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 justify-end'>
          <CldUploadWidget
                uploadPreset="sosholly"
                onSuccess={(result, widget) => { setImg(result.info); widget.close}}
            >
                {({ open }) => {
                    return (
                      <div className='flex items-center gap-2 cursor-pointer' onClick={() => open()}>
                        <Image src="/addimage.png" alt="" width={20} height={20} />
                        Photo
                      </div>
                    );
                }}
            </CldUploadWidget>
           
           <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
           </div>
           <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
           </div>
           <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
           </div>
        </div>
      </div>
       
    </div>
  )
}

export default AddPost
