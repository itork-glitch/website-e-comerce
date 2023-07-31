import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='h-[100vh]'>
      <div className='h-[85%] flex flex-col justify-center items-start'>
        <span className='text-slate-400 text-center w-full pb-4'>
          Order and buy perfect website
        </span>
        <h1 className='font-bold text-7xl text-center w-full text-shadow-hero'>
          Innovative <br /> Websites
        </h1>
        <span className='pt-8 text-center w-[50%] mx-[25%] text-md leading-[2.5] text-slate-300 italic'>
          Do you need a modern website with the latest features, services, and
          optimizations implemented by
          <a
            href='https://vercel.com/'
            target='_blank'
            className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-600 to-teal-500 font-extrabold text-lg transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100 not-italic pl-0.5'
          >
            &nbsp;Vercel&nbsp; <br />
          </a>
          technology?
        </span>
        <button>Learn More</button>
      </div>
      <div className='h-[15%] bg-teal-950'></div>
    </div>
  );
};

export default Hero;
