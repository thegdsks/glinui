'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Icon = () => {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const [effectiveTheme, setEffectiveTheme] = useState('light');

  // Ensure theme is resolved only once mounted
  useEffect(() => {
    setEffectiveTheme(resolvedTheme || theme || 'light');
  }, [theme, resolvedTheme]);

  return (
    <div
      className="logo flex cursor-pointer items-center pl-2"
      onClick={() => router.push('/')}
    >
      {/* Preloaded Dark Logo */}
      <Image
        src="/assets/images/logo/GLIN-D.svg"
        alt="Dark Logo"
        height={25}
        width={25}
        className={`dark-logo transition-opacity duration-300 ${
          effectiveTheme === 'dark' ? 'opacity-100' : 'opacity-100'
        }`}
        priority
      />
      {/* Preloaded Light Logo */}
      <Image
        src="/assets/images/logo/GLIN-L.svg"
        alt="Light Logo"
        height={25}
        width={25}
        className={`light-logo transition-opacity duration-300 ${
          effectiveTheme === 'light' ? 'opacity-100' : 'opacity-100'
        }`}
        priority
      />
    </div>
  );
};

export default Icon;
