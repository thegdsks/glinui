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
  title: 'Glin UI',
  description:
    'Beautiful UI components and templates to make your landing page look stunning.',
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
