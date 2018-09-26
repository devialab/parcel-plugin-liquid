module.exports = function (bundler) {
    bundler.addAssetType('liquid', require.resolve('./LiquidAsset'))
};