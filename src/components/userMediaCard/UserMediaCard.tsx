import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({ user }: { user: User }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* top */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Media</span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/* bottom */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27240568/pexels-photo-27240568/free-photo-of-a-man-riding-a-white-horse-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27412355/pexels-photo-27412355/free-photo-of-a-woman-sitting-on-a-couch-in-front-of-a-plant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
          <div className='relative w-1/5 h-24'>
            <Image
              src="https://images.pexels.com/photos/27425117/pexels-photo-27425117/free-photo-of-i-cant-see.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className='object-cover rounded-md'
            />
          </div>
        </div>
    </div>
  )
}

export default UserMediaCard
