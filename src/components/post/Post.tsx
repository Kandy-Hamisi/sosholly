import Image from 'next/image'
import React, { Suspense } from 'react'
import Comments from '../comments/Comments'
import { Post as PostType, User } from '@prisma/client'
import PostInteraction from '../postInteraction/PostInteraction'

type FeedPostType = PostType & { user: User } & { likes: [ {userId: string }]} & { _count: { comments: number }}

const Post = ({ post }: { post: FeedPostType } ) => {
  return (
    <div className='flex flex-col gap-4'>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
            <Image src={post.user.avatar || '/noAvatar.png'} alt="" width={40} height={40} className='w-10 h-10 rounded-full' />
            <span className='font-medium'>
              {
                post.user.name && post.user.surname
                  ? post.user.name + " " + post.user.surname
                  : post.user.username
              }
            </span>
        </div>
        <Image
            src="/more.png"
            alt=''
            width={16}
            height={16}
        />
      </div>
      {/* Description */}
      <div className='flex flex-col gap-2'>
        { post.img && <div className='w-full min-h-96 relative'>
            <Image
                src={post.img}
                alt=''
                fill
                className='object-cover rounded-md'
            />
        </div>}
        <p>{post.desc}</p>
      </div>
      {/* Interaction */}
      <Suspense>
        <PostInteraction postId={post.id} likes={post.likes.map((like) => like.userId)} commentNumber={post._count.comments} />
      </Suspense>
      <Comments postId={post.id} />
    </div>
  )
}

export default Post
