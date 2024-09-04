import React, { Suspense } from 'react'
import FriendRequest from '../friendRequests/FriendRequest'
import BirthDays from '../birthdays/BirthDays'
import Ad from '../ad/Ad'
import UserInfoCard from '../userInfoCard/UserInfoCard'
import UserMediaCard from '../userMediaCard/UserMediaCard'
import { User } from '@prisma/client'

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className='flex flex-col gap-6'>
      {
        user ? (
          <>
            <Suspense fallback="loading...">
              <UserInfoCard user={user} />
            </Suspense>
            <Suspense fallback="loading">
              <UserMediaCard user={user} />
            </Suspense>
          </>
        ) : null
      }
      <FriendRequest />
      <BirthDays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu
