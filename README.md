# rollup-plugin-simple-babel
[![Build Status](https://travis-ci.org/vovkabelov/rollup-plugin-simple-babel.svg?branch=master)](https://travis-ci.org/vovkabelov/rollup-plugin-simple-babel) 
[![Maintainability](https://api.codeclimate.com/v1/badges/1c828184b28b4534e052/maintainability)](https://codeclimate.com/github/vovkabelov/rollup-plugin-simple-babel/maintainability) 
[![Coverage Status](https://coveralls.io/repos/github/vovkabelov/rollup-plugin-simple-babel/badge.svg?branch=master)](https://coveralls.io/github/vovkabelov/rollup-plugin-simple-babel?branch=master) 
[![npm version](https://badge.fury.io/js/rollup-plugin-simple-babel.svg)](https://badge.fury.io/js/rollup-plugin-simple-babel)  
Simple and awesome Babel plugin for rollup 

## Quick start
**1.** Install plugin package via npm `npm install rollup-plugin-simple-babel` or via yarn `yarn add rollup-plugin-simple-babel`  
**2.** Add plugin call into Rollup config file 
```javascript
// rollup.config.js
import babel from 'rollup-plugin-simple-babel';
    
module.exports = {
    ...,
    plugins: [
        babel()
    ],
    ...
}
```

## Options
This plugin supported all [Babel options](https://babeljs.io/docs/en/options)

Example: 
```javascript
import babel from 'rollup-plugin-simple-babel';
       
module.exports = {
    ...,
    plugins: [
        babel({
            presets: ['@babel/preset-react']
        })
    ],
    ...
}
```

By default Babel calls without options 

## Copyright and license
Code and documentation copyright 2018 Vladimir Belov. Code released under the [MIT license](https://github.com/vovkabelov/rollup-plugin-simple-babel/blob/master/LICENSE).