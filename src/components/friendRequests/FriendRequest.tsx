import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* top */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>Friend Requests</span>
        <Link href="/" className='text-blue-500 text-xs'>See all</Link>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 '>
            <Image
                src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className='w-10 h-10 rounded-full object-cover'
                alt=''
                width={40}
                height={40}
            />
            <span className='font-semibold'>Wayne Burne</span>
        </div>
        <div className='flex gap-3 justify-end'>
            <Image
                src="/accept.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
            <Image
                src="/reject.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
        </div>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 '>
            <Image
                src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className='w-10 h-10 rounded-full object-cover'
                alt=''
                width={40}
                height={40}
            />
            <span className='font-semibold'>Wayne Burne</span>
        </div>
        <div className='flex gap-3 justify-end'>
            <Image
                src="/accept.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
            <Image
                src="/reject.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
        </div>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 '>
            <Image
                src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className='w-10 h-10 rounded-full object-cover'
                alt=''
                width={40}
                height={40}
            />
            <span className='font-semibold'>Wayne Burne</span>
        </div>
        <div className='flex gap-3 justify-end'>
            <Image
                src="/accept.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
            <Image
                src="/reject.png"
                className='cursor-pointer'
                alt=''
                width={20}
                height={20}
            />
        </div>
      </div>
    </div>
  )
}

export default FriendRequest
