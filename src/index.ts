#!/usr/bin/env node

import { getSingleStockInfo } from "./getStock"
import { getVersion } from "./getVersion"

/**
 *  return the arguments of the command except node and index.ts
 */
const getArgs = () => {
  // We retrieve all the command argumnts except the first 2
  const args = process.argv.slice(2)
  return args
}

/**
 * Command Help
 */
const printCommandHelp = () => {
  const version = getVersion()
  const help = `
pique-sous (version: ${version})

A simple command to retrieve stock information.

Example:

$ pique-sous MSFT SFIX GOOG

`
  console.log(help)
}

const symbols = getArgs()

// Print help if no arguments
if (symbols.length === 0) {
  printCommandHelp()
  getVersion()
  process.exit(0)
}

const now = new Date().toISOString()

// Call the yahoo API for each symbol and display the result on the console
symbols.forEach((symbol) => {
  console.log(`Retrieving stock information for ${symbol} at date ${now}`)
  getSingleStockInfo(symbol).then(console.log)
})
