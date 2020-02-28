const cron = require("node-cron");
const { tweetIt } = require("./automate");

let cronJobBoss = cron.schedule("*/1 * * * *", () => {
  console.log("Running a task every 1 minute");
  tweetIt();
});

cronJobBoss.start();

// Collecting tweets using a search parameter
// const params = {
//   q: "bitcoin",
//   count: 2
// };

// T.get("search/tweets", params, gotData);

// function gotData(err, data, response) {
//   let tweets = data.statuses;
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }

//const params = {
//   name: "Mayne",
//   user_id: "2446024556",
//   count: 10
// };

// T.get("statuses/user_timeline", params, gotData);
