'use client'

import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useActionState, useState } from 'react'
import UpdateButton from '../updateButton/UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {

    const [ open, setOPen ] = useState(false);
    const [ cover, setCover ] = useState<any>();

    const [ state,  formAction ] = useActionState(updateProfile, {
        success: false,
        error: false
    })
    
    const router = useRouter();

    const handleClose = () => {
        setOPen(false);
        // can also revalidate the path in the server action
        state.success && router.refresh();
    }

  return (
    <div>
        <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setOPen(true)}>Update</span>
        {open && <div className='absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50'>
            <form action={(formData) => formAction({formData, cover: cover?.secure_url || ""} )} className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative'>
                <h1>Update Profile</h1>
                <div className='mt-4 text-xs text-gray-500'>
                    Use the navbar profile to change the avatar or username
                </div>
                
                <CldUploadWidget
                    uploadPreset="sosholly"
                    onSuccess={(result) => setCover(result.info)}
                >
                    {({ open }) => {
                        return (
                            <div className='flex flex-col gap-4 my-4' onClick={() => open()}>
                                <label htmlFor="">Cover Picture</label>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <Image className='w-12 h-8 rounded-md object-cover shadow-lg' src={user.cover || '/noCover.png'} width={48} height={32} alt="" />
                                    <span className='text-xs underline text-gray-600'>Change</span>
                                </div>
                            </div>
                        );
                    }}
                </CldUploadWidget>
                <div className='flex flex-wrap justify-between gap-2 xl:gap-4 mb-4'>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>First Name</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.name || 'John Doe'} name="name" id="" />
                    </div>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>Surname</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.surname || 'Lienack'} name="surname" id="" />
                    </div>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>Description</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.description || 'Description'} name="description" id="" />
                    </div>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>City</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.city || 'Mombasa'} name="city" id="" />
                    </div>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>Work</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.work || 'KMA'} name="work" id="" />
                    </div>
                    {/* Input */}
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-xs text-gray-500'>Website</label>
                        <input className='ring-1 ring-gray-300 p-[13px] rounded-md outline-none text-xs' type="text" placeholder={user.website || 'https://example.com'} name="website" id="" />
                    </div>
                </div>
                <UpdateButton />
                { state.success && <span className='text-green-500'>Profile has been updated!</span>}
                { state.error && <span className='text-red-500'>Something Went Wrong!</span>}
                <div className='absolute text-lg font-bold right-2 top-3 cursor-pointer' onClick={() => handleClose()}>X</div>
            </form>
        </div>}
    </div>
  )
}

export default UpdateUser
