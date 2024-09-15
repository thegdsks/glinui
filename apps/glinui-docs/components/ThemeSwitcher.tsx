'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { LaptopMinimal, MoonStar, Sun } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <fieldset className="inline-flex items-center border border-gray-500 rounded-full max-w-full sm:max-w-[75%] md:max-w-[50%] lg:max-w-[33%] xl:max-w-[25%]">
      <legend className="sr-only">Select a display theme:</legend>

      {/* System Theme Switch */}
      <label
        htmlFor="theme-switch-system"
        className={`flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-700 transition ${
          theme === 'system' ? 'ring-1 ring-gray-400 dark:ring-gray-500' : ''
        }`}
      >
        <input
          id="theme-switch-system"
          type="radio"
          name="theme"
          value="system"
          className="hidden peer"
          onChange={() => setTheme('system')}
        />
        <LaptopMinimal
          className={`w-4 h-4 ${theme === 'system' ? 'text-black dark:text-white' : 'text-gray-400'}`}
        />
        <span className="sr-only">System</span>
      </label>
      <label
        htmlFor="theme-switch-light"
        className={`flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-300 transition ${
          theme === 'light' ? 'ring-1 ring-gray-400 dark:ring-gray-500' : ''
        }`}
      >
        <input
          id="theme-switch-light"
          type="radio"
          name="theme"
          value="light"
          className="hidden peer"
          onChange={() => setTheme('light')}
        />
        <Sun
          className={`w-4 h-4 ${theme === 'light' ? 'text-black ' : 'text-gray-400'}`}
        />
        <span className="sr-only">Light</span>
      </label>

      {/* Dark Theme Switch */}
      <label
        htmlFor="theme-switch-dark"
        className={`flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-700 transition ${
          theme === 'dark' ? 'ring-1 ring-gray-400 dark:ring-gray-500' : ''
        }`}
      >
        <input
          id="theme-switch-dark"
          type="radio"
          name="theme"
          value="dark"
          className="hidden peer"
          onChange={() => setTheme('dark')}
        />
        <MoonStar
          className={`w-4 h-4 ${theme === 'dark' ? 'text-white' : 'text-gray-400'}`}
        />
        <span className="sr-only">Dark</span>
      </label>
    </fieldset>
  );
}
