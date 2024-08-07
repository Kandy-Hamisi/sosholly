import React from 'react'
import FriendRequest from '../friendRequests/FriendRequest'
import BirthDays from '../birthdays/BirthDays'
import Ad from '../ad/Ad'
import UserInfoCard from '../userInfoCard/UserInfoCard'
import UserMediaCard from '../userMediaCard/UserMediaCard'

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className='flex flex-col gap-6'>
      {
        userId ? (
          <>
            <UserInfoCard userId={userId} />
            <UserMediaCard userId={userId} />
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
