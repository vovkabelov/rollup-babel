# rollup-plugin-simple-babel
Simple and awesome Babel plugin for rollup 

## Install via NPM 
    npm install rollup-plugin-simple-babel --save-dev
    
## Install via Yarn 
    yarn add rollup-plugin-simple-babel --dev
    
## Use
    import babel from 'rollup-plugin-simple-babel';
    
    module.exports = {
        ...
        plugins: [
            babel()
        ]
        ...
    }
    
## Options
This plugin supported all [Babel options](https://babeljs.io/docs/en/options)

Example: 

    import babel from 'rollup-plugin-simple-babel';
        
    module.exports = {
        ...
        plugins: [
            babel({
                presets: ['@babel/preset-react']
            })
        ]
        ...
    }

### Default options 
    import babel from 'rollup-plugin-simple-babel';
            
    module.exports = {
        ...
        plugins: [
            babel({
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-external-helpers']
            })
        ]
        ...
    }
