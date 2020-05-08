const cron = require("node-cron");
const speedTestController = require("./SpeedTestController");
var MeasureDAO = require("../DAO/SpeedTestDataDAO")
var telegramController = require("../controller/TelegramController")
const runMeasure = "0 0 */1 * * *";
const sendResults = "0 30 23 */1 * *";
cron.schedule(runMeasure, function() {
    speedTestController.runTest()
});

cron.schedule(sendResults, async function() {
    
    var measures = await MeasureDAO.getDayMeasures();
    var message = new String();
    var totalDownload = 0; 
    var totalUpload = 0; 
    var totalPing = 0 ;
    var count = 0;

    measures.array.forEach(element => {
      
      var download = Number(element.download/1000).toFixed(0)
      var upload = Number(element.upload/1000).toFixed(0)
      var ping = Number(element.ping).toFixed(0)
      
      totalDownload += download;
      totalUpload += upload; 
      totalPing += ping;
      count++;

      message += 'Hora: '+element.timestamp.getHours() +' -  Download: '+download +' Upload: '+upload + ' ping: '+ping+"\n"
      
    });

    message = 'Média - Download: '+ totalDownload/count + ' Upload: '+totalUpload/count+' Ping: '+totalPing/count + "\n" +message

    telegramController.sendMessage(message);

});
