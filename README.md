# A simple command to retrieve stock information

## Usage


```bash

$ pique-sous MSFT SFIX GOOG

```

Or 

```bash

$ npx pique-sous MSFT

```

### Result

```bash

$ pique-sous MSFT

Retrieving stock information for MSFT at date 2021-01-09T12:59:35.889Z
{
  language: 'en-US',
  region: 'US',
  quoteType: 'EQUITY',
  quoteSourceName: 'Delayed Quote',
  triggerable: true,
  currency: 'USD',
  exchange: 'NMS',
  shortName: 'Microsoft Corporation',
  longName: 'Microsoft Corporation',
  messageBoardId: 'finmb_21835',
  exchangeTimezoneName: 'America/New_York',
  exchangeTimezoneShortName: 'EST',
  gmtOffSetMilliseconds: -18000000,
  market: 'us_market',
  esgPopulated: false,
  tradeable: false,
  marketState: 'CLOSED',
  averageDailyVolume10Day: 26960985,
  fiftyTwoWeekLowChange: 87.09999,
  fiftyTwoWeekLowChangePercent: 0.65725917,
  fiftyTwoWeekRange: '132.52 - 232.86',
  fiftyTwoWeekHighChange: -13.2400055,
  fiftyTwoWeekHighChangePercent: -0.056858223,
  fiftyTwoWeekLow: 132.52,
  fiftyTwoWeekHigh: 232.86,
  dividendDate: 1615420800,
  earningsTimestamp: 1603815445,
  earningsTimestampStart: 1611781200,
  earningsTimestampEnd: 1612213200,
  trailingAnnualDividendRate: 2.09,
  trailingPE: 35.428295,
  trailingAnnualDividendYield: 0.009574419,
  epsTrailingTwelveMonths: 6.199,
  epsForward: 7.47,
  epsCurrentYear: 6.76,
  priceEpsCurrentYear: 32.488163,
  sharesOutstanding: 7560500224,
  bookValue: 16.313,
  fiftyDayAverage: 216.92334,
  fiftyDayAverageChange: 2.6966553,
  fiftyDayAverageChangePercent: 0.012431375,
  twoHundredDayAverage: 212.1426,
  twoHundredDayAverageChange: 7.4774017,
  twoHundredDayAverageChangePercent: 0.035247054,
  marketCap: 1660437004288,
  forwardPE: 29.400269,
  priceToBook: 13.462882,
  sourceInterval: 15,
  exchangeDataDelayedBy: 0,
  firstTradeDateMilliseconds: 511108200000,
  priceHint: 2,
  postMarketChangePercent: 0.004557766,
  postMarketTime: 1610153926,
  postMarketPrice: 219.63,
  postMarketChange: 0.010009766,
  regularMarketChange: 1.3300018,
  regularMarketChangePercent: 0.6092821,
  regularMarketTime: 1610139602,
  regularMarketPrice: 219.62,
  regularMarketDayHigh: 220.58,
  regularMarketDayRange: '217.03 - 220.58',
  regularMarketDayLow: 217.03,
  regularMarketVolume: 22956206,
  regularMarketPreviousClose: 218.29,
  bid: 219.62,
  ask: 219.9,
  bidSize: 11,
  askSize: 9,
  fullExchangeName: 'NasdaqGS',
  financialCurrency: 'USD',
  regularMarketOpen: 218.68,
  averageDailyVolume3Month: 28437928,
  displayName: 'Microsoft',
  symbol: 'MSFT'
}
Done in 1.31s.

```


