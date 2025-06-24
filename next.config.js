// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com', 'images.unsplash.com'],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.cache = false;
    return config;
  },

  
  
  // ✅ move the matcher into the main export if you're trying to configure middleware
  // This should be defined in middleware.js/ts instead, not here
};
