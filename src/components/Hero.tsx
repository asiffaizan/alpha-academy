import React from 'react';
import heroBG from '@/utils/hero-bg.png';
import boy from '@/utils/collage boy.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center p-10 pb-0 mb-0'
      style={{ backgroundImage: `url(${heroBG.src})` }}
    >
      <div className='flex items-center justify-center'>
        <div className='p-1' >
            <div className=' w-[60%] m-auto'>
                <h1 className='text-6xl font-bold'>Join Our <span className='text-[#FBA628]'>Offline</span> <br /> Academic Courses</h1>
                <p>Our courses are expertly designed to transform your skills in a next level.We are providing our every classes by a next level experienced tutors in your budged.</p>
            </div>            
        </div>
        <div className='p-2 w-[40%] m-auto'>
            <Image width={300} height={300} src={boy} alt='Student'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
