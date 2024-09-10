import React from 'react'
import Post from '../post/Post'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/client';
import { Post as PostType, User } from '@prisma/client'

type FeedPostType = PostType & { user: User } & { likes: [ {userId: string }]} & { _count: { comments: number }}


const Feed = async ({ username}: { username?:string }) => {

  const { userId } = auth();

  let posts:any = [];

  /* This block of code is querying the database using Prisma to fetch posts based on a specific
  username. It is looking for posts where the user's username matches the provided `username`. The
  query includes additional information such as the user details, likes with the user ID, and the
  count of comments for each post. The posts are then ordered by their creation date in descending
  order (newest first). */
  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          }
        },
        _count: {
          select: {
            comments: true,
          }
        }

      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  /* This block of code is checking if the `username` is not provided and there is a valid `userId`
  available. If these conditions are met, it means that the user is authenticated and logged in. */
  if (!username && userId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      }
    });

    const followingIds = following.map(f => f.followingId);

    const ids = [ userId, ...followingIds ];

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
          user: true,
          likes: {
            select: {
              userId: true,
            }
          },
          _count: {
            select: {
              comments: true,
            }
          }
  
        },
        orderBy: {
          createdAt: "desc"
        }
    })
  }

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex flex-col gap-12'>
      {
        posts?.length ? (posts.map((post:FeedPostType) => (
          <Post key={post.id} post={post} />
        ))) : "No posts found"
      }
    </div>
  )
}

export default Feed
