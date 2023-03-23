module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --check ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `yarn prettier --check ${filenames.join(' ')}`,
};
