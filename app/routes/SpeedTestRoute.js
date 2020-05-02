module.exports = function (app) {
    
    app.get('/speedTest', function (req, resp) {
       app.app.controller.SpeedTestController.runLiveTest(app,req,resp);
    });
}

