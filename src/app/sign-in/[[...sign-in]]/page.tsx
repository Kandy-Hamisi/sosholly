import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignIinPage = () => {
  return (
    <div className='h-[calc(100vh-96px)] flex items-center justify-center'>
      <SignIn />
    </div>
  )
}

export default SignIinPage
