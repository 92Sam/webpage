/** @type {import('next').NextConfig} */
const nextConfig = {
    // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    reactStrictMode: false, 
    webpack: function (config, options) {
        console.log(options.webpack.version); 
        // config.experiments = {};
        return config;
    },
}

module.exports = nextConfig
