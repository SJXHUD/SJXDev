const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.ico$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/images',
            outputPath: 'static/images',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
