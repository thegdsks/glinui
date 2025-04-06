import { createContentlayerPlugin } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/blocks/*": ["./registry/**/*"],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/docs",
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/components/:path*",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/components/form",
        permanent: false,
      },
      {
        source: "/sidebar",
        destination: "/components/sidebar",
        permanent: true,
      },
      {
        source: "/",
        destination: "/docs/introduction",
        basePath: false,
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin()

export default withContentlayer(nextConfig)
