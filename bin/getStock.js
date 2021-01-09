"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleStockInfo = void 0;
const axios_1 = require("axios");
const getSingleStockInfo = (stock) => new Promise((resolve, reject) => {
    if (!stock) {
        return reject(Error("Stock symbol required"));
    }
    if (typeof stock !== "string") {
        return reject(Error(`Invalid argument type. Required: string. Found: ${typeof stock}`));
    }
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`;
    return axios_1.default
        .get(url)
        .then((res) => {
        const { data } = res;
        if (!data ||
            !data.quoteResponse ||
            !data.quoteResponse.result ||
            data.quoteResponse.result.length === 0) {
            return reject(new Error(`Error retrieving info for symbol ${stock}`));
        }
        return resolve(data.quoteResponse.result[0]);
    })
        .catch((err) => reject(err));
});
exports.getSingleStockInfo = getSingleStockInfo;
module.exports = {
    getSingleStockInfo: exports.getSingleStockInfo
};
//# sourceMappingURL=getStock.js.map