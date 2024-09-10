'use client'


import React from 'react'
import { useFormStatus } from 'react-dom'

const AddPostButton = () => {

    const { pending } = useFormStatus();

  return (
    <button disabled={pending} className='bg-blue-500 p-2 rounded-md text-white disabled:bg-blue-200 disabled:cursor-not-allowed'>
      {
        pending? (
            <div className='flex items-center'>
                <div className='inline-block h-[10px] w-[10px] animate-spin rounded-full border-2 border-white'>
                    Sending
                </div>
            </div>
        ) : 'Add Post'
      }
    </button>
  )
}

export default AddPostButton
