const { Asset } = require('parcel-bundler');
var Liquid = require('liquidjs');
var engine = Liquid();

class LiquidAsset extends Asset {

    constructor(name, options) {
        super(name, options);
        this.type = 'html';
    }

    async parse(code) {
        const customConfig = await this.getConfig(['data-liquid.json']);
        this.result = await engine.parseAndRender(code, customConfig);
    }

    async generate() {
        return this.result
    }
}


module.exports = LiquidAsset;