const Twit = require("twit");
const config = require("./config");
const btcPriceAggr = require("./btcPriceAggr");

// Create a new Twit Object
var T = new Twit(config);

async function tweetIt() {
  let r = await btcPriceAggr.fetchBtcPriceAud();

  let tweet = {
    status: `The current Bitcoin price in AUD is $${r}`
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("OOF, Something went wrong!");
      console.log(err);
    } else {
      console.log("New number tweeted!");
    }
  }
}

module.exports = {
  tweetIt
};
