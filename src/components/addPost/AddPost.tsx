import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image'
import React from 'react'

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
        <form action="" className='flex gap-4'>
          <textarea
            className='flex-1 bg-slate-100 rounded-lg p-2'
            placeholder="what's on your mind?"
            name="description"
            id=""
          ></textarea>
          <div className='flex'>
            <Image
              src="/emoji.png"
              alt=''
              width={20}
              height={20}
              className='w-5 h-5 cursor-pointer self-end'
            />
          </div>
          <button>Send</button>
        </form>
        {/* post options */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 justify-end'>
           <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
           </div>
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
