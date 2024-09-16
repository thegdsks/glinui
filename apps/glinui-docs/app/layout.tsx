import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { PHProvider } from '@/components/posthog-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

import '@/styles/globals.css';
import '@/styles/mdx.css';

import type { Viewport } from 'next';
import { Metadata } from 'next';

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
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
