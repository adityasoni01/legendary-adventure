'use client';
import AsideDash from '@/components/asideDash';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../footer';

export default function TestIt() {
  const [name, setName] = useState('John Doe');
  const [edit, setEdit] = useState(false);
  return (
    <form className='w-full max-w-sm m-28'>
      <div className='flex items-center border-b border-blue-500 py-2'>
        <input
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!edit}
        />
        {edit ? (
          <>
            <button
              className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
              type='button'
            >
              Sign Up
            </button>
            <button
              className='flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded'
              type='button'
            >
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setEdit(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='21'
              height='21'
              viewBox='0 0 26 26'
            >
              <path d='M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z'></path>
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
