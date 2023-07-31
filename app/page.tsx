import React from 'react';
import Image from 'next/image';
import { Navbar, Hero } from '@/components';

export default function Home() {
  return (
    <main className='flex'>
      <section className='w-[45%] bg-gray-950 h-[100vh]'>
        <Hero />
      </section>
      <section className='w-[55%] bg-slate-800'>
        <Navbar />
      </section>
    </main>
  );
}
