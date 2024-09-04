"use client"

import { switchFollow } from '@/lib/actions';
import React, { useOptimistic, useState } from 'react'


const UserInfoCardInteraction = ({
    userId,
    currentUserId,
    isUserBlocked,
    isFollowing,
    isFollowingSent
}: {
    userId: string,
    currentUserId: string | null,
    isUserBlocked: boolean,
    isFollowing: boolean,
    isFollowingSent: boolean
  }) => {

    const [ userState, setUserState ] = useState({
      following: isFollowing,
      blocked: isUserBlocked,
      followingRequestSent: isFollowingSent
    });

    const follow = async () => {
      switchOptimisticFollow("");
      try  {
        await switchFollow(userId);
        setUserState((prev) => ({
          ...prev,
          following: prev.following && false,
          followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
        }))
      } catch (err) {

      }
    }

    const [ optimisticFollow, switchOptimisticFollow ] = useOptimistic(
      userState,
      (state) => ({
        ...state,
        following: state.following && false,
        followingRequestSent:!state.following &&!state.followingRequestSent? true : false
      })
    )

  return (
    <>
      <form action={follow}>
          <button className='w-full bg-blue-500 text-white text-sm rounded-md p-2'>
            {
                optimisticFollow.following ? "Following"
                : optimisticFollow.followingRequestSent? "Following Request Sent"
                : "Follow"
            }
          </button>
      </form>
      <form action="" className='self-end'>
          <span className='text-red-400 text-xs cursor-pointer'>
            { optimisticFollow.blocked ? "Unblock User" : "Block User" }
          </span>
      </form>
    </>
  )
}

export default UserInfoCardInteraction
