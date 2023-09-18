module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            jsx: true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'prettier/prettier': [
            'error',
            {},
            { usePrettierrc: true, endOfLine: 'auto' }
         ],
        'no-console': ['error', { allow: ['warn', 'error']}],
        '@typescript-eslint/no-explicit-any': ['error'],
        'array-callback-return': ['error'],
    }
}
