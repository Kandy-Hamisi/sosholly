import Image from 'next/image'
import React from 'react'
import Comments from '../comments/Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
            <Image src="https://images.pexels.com/photos/18546476/pexels-photo-18546476/free-photo-of-smiling-young-woman-putting-on-a-helmet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className='w-10 h-10 rounded-full' />
            <span className='font-medium'>Jack McBuliean</span>
        </div>
        <Image
            src="/more.png"
            alt=''
            width={16}
            height={16}
        />
      </div>
      {/* Description */}
      <div className='flex flex-col gap-2'>
        <div className='w-full min-h-96 relative'>
            <Image
                src="https://images.pexels.com/photos/18546476/pexels-photo-18546476/free-photo-of-smiling-young-woman-putting-on-a-helmet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=''
                fill
                className='object-cover rounded-md'
            />
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aspernatur voluptas alias cumque distinctio autem et, ipsa ipsum, dolor, necessitatibus aut vitae facilis. Veritatis quaerat et, ipsum laudantium nulla porro obcaecati voluptatibus voluptate perferendis minus deserunt! Eligendi nisi minima numquam, harum unde ab adipisci dolores illum nulla, beatae, saepe explicabo!</p>
      </div>
      {/* Interaction */}
      <div className='flex items-center justify-between text-sm'>
        <div className='flex gap-8'>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image
                    src="/like.png"
                    alt=''
                    width={16}
                    height={16}
                    className='cursor-pointer'
                />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
            </div>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image
                    src="/comment.png"
                    alt=''
                    width={16}
                    height={16}
                    className='cursor-pointer'
                />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
            </div>
        </div>
        <div className=''>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image
                    src="/share.png"
                    alt=''
                    width={16}
                    height={16}
                    className='cursor-pointer'
                />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>Share</span>
            </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post
