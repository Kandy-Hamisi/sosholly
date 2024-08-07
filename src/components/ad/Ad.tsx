import Image from 'next/image'
import React from 'react'

const Ad = ({ size }: { size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* top */}
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt='' width={16} height={16} />
      </div>
      {/* bottom */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
            <Image src="https://images.pexels.com/photos/21622427/pexels-photo-21622427/free-photo-of-woman-in-hat-standing-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill />
        </div>
        <div className='flex items-center gap-4'>
            <Image
                src="https://images.pexels.com/photos/21622427/pexels-photo-21622427/free-photo-of-woman-in-hat-standing-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=''
                height={24}
                width={24}
                className='rounded-full h-6 w-6 object-cover'
            />
            <span className='text-blue-500 font-medium'>Okumi Kamasuki</span>
        </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
            {size === "sm"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : size === "md"
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
      </div>
    </div>
  )
}

export default Ad
