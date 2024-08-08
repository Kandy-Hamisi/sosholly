import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className='relative h-20'>
            <Image
                src="https://images.pexels.com/photos/26841570/pexels-photo-26841570/free-photo-of-buho-flammeus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                className='rounded-md object-cover'
            />
            <Image
                src="https://images.pexels.com/photos/25637493/pexels-photo-25637493/free-photo-of-abstract-bars-in-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={48}
                height={48}
                className='rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover'
            />
        </div>
        <div className=' h-20 flex flex-col items-center gap-2'>
            <span className='font-medium'>Kandy Hamisi Said</span>
            <div className='flex items-center gap-4'>
                <div className='flex'>
                    <Image
                        src="https://images.pexels.com/photos/25637493/pexels-photo-25637493/free-photo-of-abstract-bars-in-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={12}
                        height={12}
                        className='rounded-full w-3 h-3'
                    />
                    <Image
                        src="https://images.pexels.com/photos/25637493/pexels-photo-25637493/free-photo-of-abstract-bars-in-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={12}
                        height={12}
                        className='rounded-full w-3 h-3'
                    />
                    <Image
                        src="https://images.pexels.com/photos/25637493/pexels-photo-25637493/free-photo-of-abstract-bars-in-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={12}
                        height={12}
                        className='rounded-full w-3 h-3'
                    />
                </div>
                <span className='text-xs text-gray-500'>500 followers</span>
            </div>
            <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
        </div>
    </div>
  )
}

export default ProfileCard
