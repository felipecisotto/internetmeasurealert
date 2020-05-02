const util = require('util');
const exec = util.promisify(require('child_process').exec);
var measures = require("../DAO/SpeedTestDataDAO")
let runTest = async function (app) {
    return new Promise(async function (resolve, reject) {
        try {
            const { stdout, stderr } = await exec('speedtest --json');

            if (stderr) {
                reject(stderr)
            }
            measure = JSON.parse(stdout)
            var measureInser = new measures(measure)
            measureInser.save()
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

module.exports = { 
    runTest:runTest,
    runLiveTest:runLiveTest
}
