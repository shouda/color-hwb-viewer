module.exports = {
  extends: [
    'airbnb',
    // require.resolve('./other-rules.js'),
  ],
  rules: {
    'new-cap': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
