import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const Hero = () =>
{
  return (
    <header className='h-72 w-full'>
      <Image src={'/hero-image-wr.jpg'} priority alt='hero' width={1280} height={100} className='absolute w-full' />

      <div className='flex justify-center items-center h-full'>
        <Link href='/'>
          <Image src={'/Logo.svg'} width={200} height={0} alt='logo svg' className='relative xl:left-0 xl:-top-6 lg:w-60 lg:-top-6 lg:left-10 w-40 left-6 -top-16 sm:-top-20 md:-top-16 md:left-8 md:w-40 transition-all' />
        </Link>
      </div>
    </header>
  )
}
