# Crypto Currency Tracker

Front end for displaying crypto currency spot prices and the current holdings
of supplied persons amounts of each currency.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<img src="./docs/desktop.screenshot.png" width="1024px" />

### Setup

```
yarn install
yarn start
```
or
```
npm install
npm start
```

### Data

This \[will eventually\] call a back end service to supply it with data in the following formats. For now it just has
hard coded data.

```
export const spotPriceData = {
  BTC: {
    GBP: 11015.06,
    USD: 14715.00,
  },
  ETH: {
    GBP: 535.23,
    USD: 715.01,
  },
  LTC: {
    GBP: 209.88,
    USD: 280.84,
  },
  BCH: {
    GBP: 2135.98,
    USD: 2849.06,
  },
};

export const currentHoldingsData = [
  {
    who: 'Richy',
    stake: 300,
    overall: -21.73,
    btc: {
      holds: 0.00518308,
      val: 56.74,
    },
    eth: {
      holds: 0.0186399,
      val: 9.88,
    },
    ltc: {
      holds: 1.00208319,
      val: 211.41,
    },
  },
];
```

### Responsive

<img src="./docs/mobile.screenshot.png" />
