'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const TopNavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // This function will be called on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      // If scrolling down, hide navbar; if up, show navbar
      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Add scroll listener
    window.addEventListener('scroll', controlNavbar);
    // Clean up listener on unmount
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`
        sticky top-0 z-50
        transition-transform duration-300 ease-in-out
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b
        border-gray-200 backdrop-blur dark:border-gray-700
      `}
    >
      <div className="max-w-screen-4xl mx-auto flex items-center justify-between px-4 py-2 text-sm">
        {/* Left side: Icon + vertical bar + GLINR */}
        <div className="flex items-center space-x-2">
          <Icon />
          {/* Vertical bar */}
          <div className="h-4 border-l border-gray-300 dark:border-gray-600" />
          <Link
            href="https://glinr.com"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            <span className="font-extrabold tracking-wide text-gray-900 dark:text-gray-100">
              GLINR
            </span>
          </Link>
        </div>

        {/* Right side: Additional links */}
        <div className="flex items-center space-x-6">
          <Link
            href="https://webandesigns.com"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            WEBANDESIGNS
          </Link>
          <Link
            href="https://thegdsks.com"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            THE GDSKS
          </Link>
          <Link
            href="https://typeweaver.com"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            TYPEWEAVER
          </Link>
          <Link
            href="https://glinui.com"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            GLINUI
          </Link>
          <Link
            href="https://www.glinweb.com/"
            target="_blank"
            className="text-gray-600 hover:underline dark:text-gray-300"
          >
            GLINWEB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
