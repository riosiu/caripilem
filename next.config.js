/** @type {import('next').NextConfig} */

module.exports = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    images: {
      images: [process.env.NEXT_PUBLIC_APP_IMAGESRC],
    },
  };

  return nextConfig;
};
