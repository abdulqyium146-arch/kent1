/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'kent-roof-inspections-build'
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
}

module.exports = nextConfig
