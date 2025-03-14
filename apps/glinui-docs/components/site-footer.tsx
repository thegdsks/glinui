import Image from 'next/image';
import Link from 'next/link';
import Social from './Social';
import FooterLinks from './FooterLinks';
import Logo from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

export function SiteFooter() {
  return (
    <div
      className="mt-8 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 dark:from-gray-950 dark:via-[#0a0a0a] dark:to-gray-950"
      style={{
        background:
          'radial-gradiFent(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)',
      }}
    >
      <footer className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a
              href="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-600 dark:text-slate-400">
              One Stop to provide all solutions for your online presence. Global
              Linkers Network
            </p>
            <Social />
          </div>

          <FooterLinks />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-gray-80 block text-xs dark:text-gray-400">
            © 2024 GLINCKER LLC. All Rights Reserved.
          </span>
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <ul className="mt-3 flex text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">
                  About
                </a>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="me-4 flex items-center space-x-1 hover:underline md:me-6"
                >
                  Privacy Policy
                  <Image
                    src="/assets/images/privacy/privacyoptions.svg"
                    alt="External Link"
                    width={26}
                    height={16}
                    className="ml-1"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="me-4 hover:underline md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  );
}
