import Link from 'next/link';
import React from 'react';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:col-span-2">
      <div>
        <p className="font-medium">Company</p>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 dark:text-slate-400">
          <a className="hover:opacity-75" href="#">
            About
          </a>
          <a className="hover:opacity-75" href="#">
            Meet the Team
          </a>
          <a className="hover:opacity-75" href="#">
            History
          </a>
          <a className="hover:opacity-75" href="#">
            Careers
          </a>
        </nav>
      </div>
      <div>
        <p className="font-medium">Domains</p>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 dark:text-slate-400">
          <a
            className="hover:opacity-75"
            href="https://webandesigns.com/"
            target="_blank"
          >
            WEBANDESIGNS
          </a>
          <a
            className="hover:opacity-75"
            href="https://reviewmee.com/"
            target="_blank"
          >
            REVIEWMEE
          </a>
          <a
            className="hover:opacity-75"
            href="https://www.gdstudyworld.com/"
            target="_blank"
          >
            GDSTUDYWORLD
          </a>
          <a
            className="hover:opacity-75"
            href="https://www.glinweb.com/"
            target="_blank"
          >
            GLINWEB
          </a>
          <a
            className="hover:opacity-75"
            href="https://thegdsks.com/"
            target="_blank"
          >
            THEGDSKS
          </a>
        </nav>
      </div>
      <div>
        <p className="font-medium">Products</p>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 dark:text-slate-400">
          <a className="hover:opacity-75" href="/tools/glin-profanity">
            Glin Profanity
          </a>
          <a className="hover:opacity-75" href="/tools/url-shortener">
            URL Shortener
          </a>
          <a className="hover:opacity-75" href="/tools/qrcode">
            QR Code Generator
          </a>
        </nav>
      </div>
      <div>
        <p className="font-medium">Legal</p>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 dark:text-slate-400">
          <Link href="/legal/privacy" className="hover:opacity-75">
            Privacy Policy
          </Link>
          <Link className="hover:opacity-75" href="/legal/terms">
            Terms &amp; Conditions
          </Link>
          <a className="hover:opacity-75" href="#">
            Returns Policy
          </a>
          <a className="hover:opacity-75" href="#">
            Accessibility
          </a>
        </nav>
      </div>
    </div>
  );
};

export default FooterLinks;
