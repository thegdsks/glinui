const cssnanoConfig = {
  preset: [
    'default',
    {
      discardComments: { removeAll: true },
    },
  ],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? { cssnano: cssnanoConfig }
      : {}),
  },
};
