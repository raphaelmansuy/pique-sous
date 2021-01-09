import axios from "axios"

export const getSingleStockInfo = (stock: string) =>
  new Promise((resolve, reject) => {
    if (!stock) {
      return reject(Error("Stock symbol required"))
    }
    if (typeof stock !== "string") {
      return reject(
        Error(`Invalid argument type. Required: string. Found: ${typeof stock}`)
      )
    }

    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`

    return axios
      .get(url)
      .then((res) => {
        const { data } = res
        if (
          !data ||
          !data.quoteResponse ||
          !data.quoteResponse.result ||
          data.quoteResponse.result.length === 0
        ) {
          return reject(new Error(`Error retrieving info for symbol ${stock}`))
        }
        return resolve(data.quoteResponse.result[0])
      })
      .catch((err) => reject(err))
  })

module.exports = {
  getSingleStockInfo
}