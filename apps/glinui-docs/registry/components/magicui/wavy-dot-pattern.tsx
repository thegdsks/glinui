import { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface WavyDotPatternProps {
  className?: string;
  gridWidth?: number;
  gridHeight?: number;
  dotWidth?: number;
  dotHeight?: number;
}

export const WavyDotPattern = ({
  className,
  gridWidth = 30, // default to 30 if not provided
  gridHeight = 30, // default to 30 if not provided
  dotWidth = 8, // default to 8px if not provided
  dotHeight = 8, // default to 8px if not provided
}: WavyDotPatternProps) => {
  const [dotClickDisabled, setDotClickDisabled] = useState<boolean>(false);

  const handleDotClick = (
    e: MouseEvent<HTMLButtonElement>,
    width: number,
    height: number
  ) => {
    setDotClickDisabled(true);

    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: 'easeOutSine', duration: 250 },
        { value: 0.35, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [width, height],
        from: Number(e.currentTarget.dataset.index), // Ensure correct type conversion
      }),
    });

    setTimeout(() => setDotClickDisabled(false), 2000);
  };

  const DOT_WIDTH_CLASS = `w-[${dotWidth}px]`;
  const DOT_HEIGHT_CLASS = `h-[${dotHeight}px]`;

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <button
          className="rounded-[8px] p-[0.8rem]"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleDotClick(e, gridWidth, gridHeight)
          }
          data-index={index}
          key={`${i}-${j}`}
          disabled={dotClickDisabled}
        >
          <div
            className={cn(
              'dot-point',
              'rounded-xl bg-gradient-to-r from-[#d9cab3] to-black opacity-35 hover:from-black hover:to-black hover:opacity-100',
              DOT_WIDTH_CLASS,
              DOT_HEIGHT_CLASS
            )}
            data-index={index}
          />
        </button>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
      className={cn('max-w-3/4 absolute z-0 grid', className)}
    >
      {dots}
    </div>
  );
};

export default WavyDotPattern;
