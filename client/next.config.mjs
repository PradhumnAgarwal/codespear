import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import withTM from 'next-transpile-modules';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = join(__dirname, 'src');
    return config;
  },
};

export default withTM([])(nextConfig);