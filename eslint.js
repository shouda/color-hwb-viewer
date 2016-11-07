module.exports = {
  extends: [
    'airbnb',
    // require.resolve('./other-rules.js'),
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
