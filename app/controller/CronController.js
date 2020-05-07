const cron = require("node-cron");
const speedTestController = require("./SpeedTestController");
const runSchedule = "0 0 */1 * * *";
// const runSchedule = "0 */1 * * * *";

cron.schedule(runSchedule, function() {
    speedTestController.runTest()
  });
  