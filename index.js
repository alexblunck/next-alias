module.exports = (aliases = {}) => (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            Object.assign(config.resolve.alias, aliases)

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}
