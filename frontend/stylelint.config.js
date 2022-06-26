module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'color-function-notation': 'legacy',
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'string-quotes': null,
  },
}
