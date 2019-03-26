module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",  // 一个配置文件可以被基础配置中的已启用的规则继承
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,   // 指定年份
        "sourceType": "module",  // 代码为ECMAScript模块
        "requrie": false,
        "exports": false
    },
    "rules": {
        "eqeqeq": 1,
        "no-console": 0,
        "no-unused-vars": 0
        
    }
};