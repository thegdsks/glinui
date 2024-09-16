import { createContentlayerPlugin } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
  images: {
    domains: ['localhost', 'cdn.glincker.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/X4BBMBjHNf',
        permanent: true,
      },
      {
        source: '/components',
        destination: '/docs/components/marquee',
        permanent: true,
      },
      {
        source: '/components/:path*',
        destination: '/docs/components/:path*',
        permanent: true,
      },
      {
        source: '/docs/components',
        destination: '/docs/components/marquee',
        permanent: true,
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
