# rollup-babel
Simple and awesome Babel plugin for rollup 

## Install via NPM 
    npm install rollup-babel --save-dev
    
## Install via Yarn 
    yarn add rollup-babel --dev
    
## Use
    import babel from 'rollup-babel';
    
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

    import babel from 'rollup-babel';
        
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
    import babel from 'rollup-babel';
            
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
