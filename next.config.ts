import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['play.google.com', 'toolbox.marketingtools.apple.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
