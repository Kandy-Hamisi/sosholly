import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* top */}
      <div className='flex justify-between items-center font-medium'>
        <span className='text-gray-500'>User Information</span>
        <Link href="/" className='text-blue-500 text-xs'>See all</Link>
      </div>
      {/* bototm */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className="flex items-center gap-2">
            <span className='text-xl text-black'>Kandy Hamisi</span>
            <span className='text-sm'>@ceritified</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit blanditiis distinctio tempora voluptates omnis.</p>
        <div className='flex items-center gap-2'>
            <Image
                src="/map.png"
                alt=''
                width={16}
                height={16}
            />
            <span>Living in <b>Melbourne</b></span>
        </div>
        <div className='flex items-center gap-2'>
            <Image
                src="/school.png"
                alt=''
                width={16}
                height={16}
            />
            <span>Went to <b>Sacred Heart High School</b></span>
        </div>
        <div className='flex items-center gap-2'>
            <Image
                src="/work.png"
                alt=''
                width={16}
                height={16}
            />
            <span>Works at <b>Kenya Maritime Authority</b></span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex gap-1 items-center'>
                <Image
                    src="/link.png"
                    alt=''
                    width={16}
                    height={16}
                />
                <Link href="https://kandy-dev.vercel.app" className='text-blue-500 font-medium'>kandy-dev.vercel.app</Link>
            </div>
            <div className='flex gap-1 items-center'>
                <Image
                    src="/date.png"
                    alt=''
                    width={16}
                    height={16}
                />
                <span>Joined November 2021</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard
