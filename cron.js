const cron = require("node-cron");
const { tweetIt } = require("./automate");

let cronJobBoss = cron.schedule("*/30 * * * *", () => {
  console.log("Running a task every 1 minute");
  tweetIt();
});

module.exports = {
  cronJobBoss
};
