'use client';

import { useTheme } from 'next-themes';

export const IconsLogo = ({ className, ...props }: { className: string }) => {
  const { theme, resolvedTheme } = useTheme();

  // Determine the effective theme, with a fallback to 'light'
  const effectiveTheme = resolvedTheme || theme || 'light';

  // Set the logo source based on the current theme
  const logoSrc =
    effectiveTheme === 'dark'
      ? '/assets/images/logo/glinweb_light.svg'
      : '/assets/images/logo/glinweb_dark.svg';

  return <img src={logoSrc} alt="GLINCKER" className={className} {...props} />;
};
