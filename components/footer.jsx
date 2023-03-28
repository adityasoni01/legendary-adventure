import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-200 text-center lg:text-left mt-10 fixed min-w-full bottom-0'>
      <div className='text-gray-700 text-center p-4'>
        © 2023 Copyright:{' '}
        <Link className='text-gray-800' href='/'>
          Gju Upholders
        </Link>
      </div>
    </footer>
  );
}
