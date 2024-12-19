import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js config options here
};

export default nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})(nextConfig);
