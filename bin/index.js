#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStock_1 = require("./getStock");
const getVersion_1 = require("./getVersion");
/**
 *  return the arguments of the command except node and index.ts
 */
const getArgs = () => {
    // We retrieve all the command argumnts except the first 2
    const args = process.argv.slice(2);
    return args;
};
/**
 * Command Help
 */
const printCommandHelp = () => {
    const version = getVersion_1.getVersion();
    const help = `
pique-sous (version: ${version})

A simple command to retrieve stock information.

Example:

$ pique-sous MSFT SFIX GOOG

`;
    console.log(help);
};
const symbols = getArgs();
// Print help if no arguments
if (symbols.length === 0) {
    printCommandHelp();
    getVersion_1.getVersion();
    process.exit(0);
}
const now = new Date().toISOString();
// Call the yahoo API for each symbol and display the result on the console
symbols.forEach((symbol) => {
    console.log(`Retrieving stock information for ${symbol} at date ${now}`);
    getStock_1.getSingleStockInfo(symbol).then(console.log);
});
//# sourceMappingURL=index.js.map