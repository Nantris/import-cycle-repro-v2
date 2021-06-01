module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  ignorePatterns: [
    '**/*.prod.*',
    '**/*.build.*',
    '**/*.bundle.*',
    '**/*.browserified.*',
    '**/*.unused.*',
    '**/build/**/*',
    '**/dist/**/*',
    '**/node_modules/**/*',
    '**/test/**/*',
    '**/tests/**/*',
    '**/__tests__/**/*',
    '**/example/**/*.*',
    '**/examples/**/*.*',
    '**/vendor/**/*.*',
    '**/playbook/**/*.*',
    '**/gulpfile.js',
  ],
  extends: [],
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'import/no-cycle': ['error', 
     { maxDepth: 5 }  //  Toggle between 1 and 5. 5 produces more errors when it should produce fewer
    ],
  },
  plugins: [
    'import',
  ],
  settings: {
    'import/cache': { lifetime: 10 },
    'import/resolver': {
      'babel-module': {},
    },
  },
};
