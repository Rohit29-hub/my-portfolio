/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn3d.iconscout.com',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
          {
            protocol: 'https',
            hostname: 'liet.in',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],
      },
};

export default nextConfig;
