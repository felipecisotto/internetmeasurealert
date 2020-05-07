const util = require('util');
const exec = util.promisify(require('child_process').exec);
var MeasureDAO = require("../DAO/SpeedTestDataDAO")
let runTest = async function () {
    return new Promise(async function (resolve, reject) {
        try {
            const { stdout, stderr } = await exec('speedtest --json');

            if (stderr) {
                reject(stderr)
            }
            measure = JSON.parse(stdout)
            MeasureDAO.insertMeasure(measure)
            resolve(measure)
        } catch (error) {
            reject(error)
        }

    })
}
let runLiveTest = async function (app,req,resp) {

    var returnJson = await runTest(app);

    var message = 'Download: '+returnJson.download/1000 +'\n'+'Upload:'+returnJson.upload/1000 + '\n ping:'+returnJson.ping

    app.app.controller.TelegramController.sendMessage(message)

    resp.json(returnJson)

}
let getTodayResults = async function (app,req,resp){
    var measures = await MeasureDAO.getDayMeasures()


    resp.json(measures)
}
module.exports = { 
    runTest:runTest,
    runLiveTest:runLiveTest,
    getTodayResults:getTodayResults
}
