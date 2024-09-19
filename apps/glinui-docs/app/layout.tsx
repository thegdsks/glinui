import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import '@/styles/mdx.css';
import '@/styles/globals.css';

import type { Viewport } from 'next';
import { Metadata } from 'next';
import { TooltipProvider } from '@/components/ui/tooltip';
import { WebAnalytics } from '@/components/analytics';
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: 'GlinUI - Lightweight, Customizable UI Component Library | GLINCKER',
  description:
    'GlinUI is a modern, lightweight, and highly customizable UI component library designed for developers. Build fast, scalable web applications with ready-to-use components compatible with TailwindCSS, Bootstrap, and more.',
  applicationName: 'GLINUI',
  keywords:
    'UI component library, GLINCKER, GDS K S, GDSKS, GlinUI, customizable components, lightweight UI library, TailwindCSS components, Bootstrap integration, React components, GlinWeb, scalable web components, server-side rendering, open-source UI library, Glin UI docs',

  robots: 'all',
  appleWebApp: {
    title: 'GlinUI',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/favicon/favicon.ico',
      {
        url: '/favicon/favicon.ico',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  icons: {
    icon: [
      // Favicon
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/favicon.ico',
        rel: 'icon',
        href: '/favicon/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicond/favicon.ico',
        rel: 'icon',
        href: '/favicond/favicon.ico',
      },
      // Apple Favicon
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicond/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicond/apple-touch-icon.png',
      },
      // 32 Favicon
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      // 16 Favicon
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      // mask-icon
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/safari-pinned-tab.svg',
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/safari-pinned-tab.svg',
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: '/assets/Glinui.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://glinui.com',
    title: 'GlinUI - Lightweight, Customizable UI Component Library | GLINCKER',
    description:
      'GlinUI is a modern, lightweight, and highly customizable UI component library designed for developers. Build fast, scalable web applications with ready-to-use components compatible with TailwindCSS, Bootstrap, and more.',
    siteName: 'GlinUI',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
          <Analytics />
          <WebAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
