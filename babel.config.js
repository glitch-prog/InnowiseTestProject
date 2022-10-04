module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            navigation: './src/navigation',
            pages: './src/pages',
            controls: './src/controls',
            constants: './src/constants',
            services: './src/services',
            assets: './src/assets',
          },
        },
      ],
    ],
  };
};
