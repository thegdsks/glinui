'use client';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { XIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaNpm } from 'react-icons/fa6';

const AlertStrip: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="text-white py-1 px-4 flex items-center justify-center relative"
      style={{
        background:
          'linear-gradient(109.6deg, rgba(103,30,117,1) 11.2%, rgba(252,76,2,1) 91.1%)',
        backgroundSize: '200%',
        backgroundPosition: 'center',
      }}
    >
      <p className="text-sm text-center">
        <strong>Glin-Profanity</strong> has just been released!{' '}
        <Link
          href="/tools/glin-profanity"
          className="underline hover:text-gray-300"
        >
          <b>Click here</b>
        </Link>{' '}
        to learn more.
      </p>
      <div className="flex items-center space-x-2 ml-4">
        <Link
          href="https://github.com/GLINCKER/glin-profanity"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-white hover:text-gray-300 group"
        >
          <GitHubLogoIcon className="h-4 w-4" />
          <ArrowRightIcon className="h-4 w-4 transform transition-transform group-hover:-rotate-45 group-hover:scale-125" />
        </Link>
        <Link
          href="https://www.npmjs.com/package/glin-profanity"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-white hover:text-gray-300 group"
        >
          <FaNpm className="h-5 w-5" />
          <ArrowRightIcon className="h-4 w-4 transform transition-transform group-hover:-rotate-45 group-hover:scale-125" />
        </Link>
      </div>
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-black-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={() => setIsOpen(false)}
      >
        <XIcon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};

export default AlertStrip;
