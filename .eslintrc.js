
module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "globals": {
    "document": true,
    "navigator": true,
    "window":true,
    "echarts": true,
    "node":true
  },
  // 使用第三方airbnb开发配置合集
  // "extends": "airbnb",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  // check if imports actually resolve
  "settings": {
    "react": {
      "createClass": "createReactClass", 
      "pragma": "React",  // Pragma to use, default to "React"
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] 
  },
  "parserOptions": {
    "ecmaVersion": 7, // ECMAScript版本，7为ES7
    "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
    "ecmaFeatures": { // 使用额外的语言特性
        "jsx": true // 启用JSX
    }
  },
  // add your custom rules here
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    "no-mixed-spaces-and-tabs": [2, false],
    "unicode-bom":0,
    "indent": [1, 4, { "SwitchCase": 1 }],
    "linebreak-style": [0, "windows"],
    "eol-last": ["error", "always"],
    "max-len": [1, 120],
    "semi": [2, "always"],
    "curly": [2, "all"],
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "no-loop-func": "error",
    "radix": "error",
    "quotes": [1, "single", "avoid-escape"],
    "no-multi-str": "error",
    "no-new-wrappers":2,
    "no-new-object": "error",
    "no-new-func": 1,
    "no-array-constructor":2,
    "guard-for-in": 1,
    "no-inner-declarations": [2, "functions"],
    "no-prototype-builtins":2,
    "no-extend-native": 2,
    "no-proto":2,
    "no-eval":2,
    "no-with":2,
    "no-delete-var": "error"
  }
}
