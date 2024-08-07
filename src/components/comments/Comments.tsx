import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div className=''>
      {/* write */}
      <div className="flex gap-4 items-center">
          <div className='flex items-center gap-4'>
            <Image
                src="https://images.pexels.com/photos/26919542/pexels-photo-26919542/free-photo-of-douceur-de-la-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=''
                width={32}
                height={32}
                className='w-8 h-8 rounded-full'
            />
          </div>
          <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
            <input type="text" placeholder='write a comment...' name="" id="" />
            <Image src="/emoji.png" alt='' width={32} height={32} className='cursor-pointer' />
          </div>
      </div>
      {/* Comments */}
      <div className=''>
        {/* comment */}
        <div className='flex gap-4 justify-between mt-6'>
            {/* avatar */}
            <Image
                src="https://images.pexels.com/photos/26919542/pexels-photo-26919542/free-photo-of-douceur-de-la-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=''
                width={40}
                height={40}
                className='w-8 h-8 rounded-full'
            />
            {/* Desc */}
            <div className='flex flex-col gap-2'>
                <span className='font-medium'>Bernice Spenser</span>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, obcaecati. Illo totam temporibus vitae veniam, ullam nostrum voluptatum odio aut odit excepturi. Aperiam, quo. Ab placeat quisquam minus fugiat illum in quae! Asperiores fuga inventore vitae repudiandae excepturi. Dicta, esse.
                </p>
                <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                    <div className='flex items-center gap-4'>
                        <Image src="/like.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>8</span>
                    </div>
                    <div className=''>Reply</div>
                </div>
            </div>
            {/* icon */}
            <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4' />
        </div>
      </div>
    </div>
  )
}

export default Comments
