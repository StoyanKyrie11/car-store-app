/** @type {import('next').NextConfig} */
const nextConfig = {
    /* CDN to stock images API website */
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
