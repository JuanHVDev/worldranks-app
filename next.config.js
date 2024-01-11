/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com/*.svg",
            },
        ],
    },
};

module.exports = nextConfig;
