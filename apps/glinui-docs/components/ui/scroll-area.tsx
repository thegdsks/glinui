'use client';

import * as React from 'react';
import {
  Root as ScrollAreaRoot,
  Viewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaRoot>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <Viewport className="size-full rounded-[inherit]">{children}</Viewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = ScrollAreaRoot.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-px',
      orientation === 'horizontal' &&
        'h-2.5 border-t border-t-transparent p-px',
      className
    )}
    {...props}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
