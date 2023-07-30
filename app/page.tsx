import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex'>
      <section className='w-[45%] bg-gray-950 h-[100vh]'></section>
      <section className='w-[55%] bg-slate-800'>
        <nav className='flex justify-end items-center pt-5 last:pr-5'>
          <ul className='flex gap-16'>
            <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[100%] after:bg-slate-300 after:block cursor-pointer">
              Home
            </li>
            <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
              Team
            </li>
            <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
              Order
            </li>
            <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
              About
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
