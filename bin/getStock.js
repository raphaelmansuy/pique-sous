"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleStockInfo = void 0;
const axios_1 = require("axios");
const getSingleStockInfo = async (stock) => {
    if (!stock) {
        throw new Error("Stock symbol argument required");
    }
    if (typeof stock !== "string") {
        throw new Error(`Invalid argument type for stock argument. Required: string. Found: ${typeof stock}`);
    }
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`;
    const res = await axios_1.default.get(url);
    const { data } = res;
    if (!data ||
        !data.quoteResponse ||
        !data.quoteResponse.result ||
        data.quoteResponse.result.length === 0) {
        throw new Error(`Error retrieving info for symbol ${stock}`);
    }
    const quoteResponse = data.quoteResponse.result[0];
    return quoteResponse;
};
exports.getSingleStockInfo = getSingleStockInfo;
//# sourceMappingURL=getStock.js.map