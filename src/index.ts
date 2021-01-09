#!/usr/bin/env npx ts-node

import { getSingleStockInfo } from "stock-info"
import * as fs from "fs"
import * as Path from "path"
import { version } from "typescript"

/**
 *  return the arguments of the command except ts-node and index.ts
 */
const getArgs = () => {
  const args = process.argv.slice(2)
  return args
}

const getVersion = () => {
  const packageJSONPath = Path.resolve(__dirname, "../package.json")
  const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" })
  const config = JSON.parse(content)
  return config.version
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