import { Feed, LeftMenu, RightMenu } from '@/components'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type='profile'/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image
                src="https://images.pexels.com/photos/20584388/pexels-photo-20584388/free-photo-of-woman-in-white-dress-sitting-by-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                className='object-cover rounded-md'
              />
              <Image
                src="https://images.pexels.com/photos/27412355/pexels-photo-27412355/free-photo-of-a-woman-sitting-on-a-couch-in-front-of-a-plant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={128}
                height={128}
                className='w-32 h-32 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 ring-white'
              />
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Ella Fitzgera</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>123</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>1576</span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-medium'>1122</span>
                <span className='text-sm'>Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="3" />
      </div>
    </div>
  )
}

export default ProfilePage
