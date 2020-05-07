module.exports = function (app) {
    
    app.post('/speedTest', function (req, resp) {
       app.app.controller.SpeedTestController.runLiveTest(app,req,resp);
    });
    app.get('/speedTest',function(req,resp){
        app.app.controller.SpeedTestController.getTodayResults(app,req,resp);
    })
}

