/**
 * @type {import('@types/lint-staged').Config}
 */
module.exports = {
  '*.{vue,js,ts,jsx,tsx,html}': ['eslint --quiet', 'prettier -c'],
  '*.{scss,less,css,sass}': ['prettier -c'],
};
