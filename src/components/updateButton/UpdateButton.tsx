'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

const UpdateButton = () => {
    const {pending} = useFormStatus()
  return (
    <button disabled={pending} className='bg-blue-500 p-2 rounded-md text-white'>
        {
            pending? "Updating..." : "Update"
        }
    </button>
  )
}

export default UpdateButton
