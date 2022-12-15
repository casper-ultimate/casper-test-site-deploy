/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cus-caspercdn-cqbbeaahh6etgnf3.z01.azurefd.net',
        pathname: '/test/**',
      },
    ],
  },
}

module.exports = nextConfig
