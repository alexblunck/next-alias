# Next.js + Webpack Aliases

Use [Webpack Aliases](https://webpack.js.org/configuration/resolve/#resolve-alias) in your Next.js project

## Installation

```
npm install --save @blunck/next-alias
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withAlias = require('@blunck/next-alias')({
    '@components': __dirname + '/components'
})
module.exports = withAlias()
```

You can now use aliases in your imports

```js
import foo from '@components/Blog'

export default () => <Blog />
```

### Configuring Next.js

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withAlias = require('@blunck/next-alias')()
module.exports = withAlias({
    webpack(config, options) {
        return config
    }
})
```
