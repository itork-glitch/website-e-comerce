import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-end items-center pt-5 last:pr-12'>
      <ul className='flex gap-16'>
        <Link href={'/'}>
          <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[100%] after:bg-slate-300 after:block cursor-pointer">
            Home
          </li>
        </Link>
        <Link href={'/team'}>
          <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
            Team
          </li>
        </Link>
        <Link href={'/shop'}>
          <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
            Order
          </li>
        </Link>
        <Link href={'/about'}>
          <li className="content-[''] after:mt-1 after:rounded-sm after:h-[5px] after:w-[0%] after:bg-slate-300 after:block hover:after:w-[100%] after:transition-all after:duration-500 after:m-auto cursor-pointer">
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
