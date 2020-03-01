const fetch = require("node-fetch");
const config = require("./config");

fetchBtcPriceAud();

async function fetchBtcPriceAud() {
  // Await the result of Fetch and store this result in the variable called response :)
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/AUD.json"
  );
  const price = await response.json();
  const priceAud = await price.bpi.AUD.rate_float;
  return priceAud;
}

async function fetchEthPriceAud() {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&api_key=${config.crypto_compare_api_key}`
  );
  const price = await response.json();
  const priceAud = await (price.ETH.USD / 0.65);
  return priceAud;
}

fetchEthPriceAud();

module.exports = {
  fetchBtcPriceAud,
  fetchEthPriceAud
};
