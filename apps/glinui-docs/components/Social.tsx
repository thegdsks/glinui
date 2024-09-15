import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from '@geist-ui/icons';

import React from 'react';

const Social = () => {
  return (
    <>
      <div className="flex mt-8 space-x-6 text-gray-600 dark:text-slate-400">
        <a
          className=" hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          href="https://www.facebook.com/gdsstudyworld/"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          className=" hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          href="https://www.instagram.com/motivators.imagination/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Instagram </span>
          <Instagram className="w-5 h-5" />
        </a>
        <a
          className=" hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          href="https://twitter.com/gds_k_s"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> Twitter </span>
          <Twitter className="w-5 h-5" />
        </a>
        <a
          className=" hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          href="https://github.com/GLINCKER"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> GitHub </span>
          <Github className="w-5 h-5" />
        </a>
        <a
          className=" hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/gdsks/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only"> LinkedIn </span>
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};

export default Social;
