'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const effectiveTheme = resolvedTheme || theme || 'light';

  if (!mounted) return null;

  return (
    <div className={`logo ${effectiveTheme}`} onClick={() => router.push('/')}>
      <Image
        src="/assets/images/logo/GLINCKER_DARK.svg"
        alt="Dark Logo"
        height={20}
        width={175}
        className="dark-logo"
      />
      <Image
        src="/assets/images/logo/GLINCKER_LIGHT.svg"
        alt="Light Logo"
        height={40}
        width={165}
        className="light-logo"
      />
    </div>
  );
};

export default Logo;
