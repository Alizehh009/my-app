// next.config.js
module.exports = {
  images: {
    domains: ['yourdomain.com', 'images.unsplash.com'],
  },
}

const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};

