/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    unoptimized: true
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
