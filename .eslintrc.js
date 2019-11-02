module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-unused-vars": "warn",
        "indent": "warn",
        "semi": ["warn","never"],
        "semi-spacing": "warn",
        "quotes": "warn",
        "no-var": "warn",
        "comma-spacing": "warn",
        "no-trailing-spaces": "warn",
        "brace-style": ["warn", "1tbs", {"allowSingleLine": false}],
        "max-len":["warn", {"code":120, "comments":120, "tabWidth": 4}],
        "curly": ["warn", "multi-line", "consistent"],
        "no-else-return": "warn",
        "func-call-spacing": ["error", "never"],
        "keyword-spacing": ["warn"],
        "block-spacing": ["warn", "always"],
        "key-spacing": ["warn"],
        "object-curly-spacing": ["warn", "never"],
        "space-before-blocks": ["warn", "always"],
        "space-in-parens": ["warn", "never"]
    }
};