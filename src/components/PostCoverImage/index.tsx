import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>
  linkProps: React.ComponentProps<typeof Link>
}
export default function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link {...linkProps} className={clsx(
      'text-2xl',
      'font-bold',
      'text-blue-500',
      'w-full', 'h-full',
      'overflow-hidden',
      'transition',
      'rounded-xl',
      'hover:shadow-lg',
      linkProps.className
    )}>
      <Image
        {...imageProps}
        className={clsx('group-hover:scale-105',
          'w-full',
          'h-full',
          'transition',
          'object-cover',
          'object-center',
          imageProps.className,
        )} priority />
    </Link>
  )
}
