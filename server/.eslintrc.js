module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
      }, 
        "globals": {
            "require": false,
            "process": false
        },  
    "rules": {
        "no-console": 0, 
        "indent": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": 0,
    }
};