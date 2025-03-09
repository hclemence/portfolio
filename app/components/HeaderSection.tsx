import React from 'react'
import Image from 'next/image'

type Props = {}

const HeaderSection = (props: Props) => {
  return (
    <div className='relative flex flex-col justify-center'>
      {/* <div className='bg-custom-radial  w-[500px] h-[500px]  bottom-14 -right-16 absolute bg-cover'></div> */}
      <div className='flex items-center justify-center'>
        <h1 className='relative font-editorial_new text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-regular text-foreground'> Harry Clemence
        </h1>
        <Image src="/images/profile.jpeg" alt="Blenheim Palace with flowers in the foreground" width={200} height={200} className='rounded-full w-[260px] h-[260px] mb-20 ml-16'/>
        </div>
        <h2 className='relative font-inter text-foreground2 text-base sm:text-lg lg:text-xl mt-11'>Hi, I'm a <span className='text-foreground'>front-end developer</span> and <span className='text-foreground'>data scientist</span> based in <span className='text-foreground'>Birmingham, UK</span>. With five years of experience in <span className='text-foreground'>React</span> and strong <span className='text-foreground'>Python</span> skills, I love building creative solutions that make a difference. I'm currently looking for work where I can apply my skills to <span className='text-foreground'>meaningful</span> projects. <span className='text-foreground'>Feel free to contact me!</span></h2>
        
    </div>
  )
}

export default HeaderSection