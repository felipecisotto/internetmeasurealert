module.exports = function (app) {
    
    app.get('/',function(req,resp){
        app.app.controller.IndexController.index(app,req,resp);
    })
}

