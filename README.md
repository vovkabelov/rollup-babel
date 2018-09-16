# rollup-plugin-simple-babel
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