const fetch = require("node-fetch");

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

module.exports = {
  fetchBtcPriceAud
};
