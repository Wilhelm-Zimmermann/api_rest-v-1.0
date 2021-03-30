module.exports = app => {
    app.get('/',(req,res) => {
        app.app.controllers.controller_home.renderHome(app,req,res)
    })
}