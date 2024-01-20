import withBundleAnalyzer from '@next/bundle-analyzer';
// eslint-disable-next-line import/order
import './app/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withAnalyzer(nextConfig);
