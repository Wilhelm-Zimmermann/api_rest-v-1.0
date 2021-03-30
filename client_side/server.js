const bodyParser = require('body-parser');
const express = require('express'),
    consign = require('consign')
    app = express()

app.set('view engine','ejs')
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.set('views','./app/views')
app.use(express.static('./app/public'))

consign()
    .include('app/controllers')
    .include('app/routes')
    .into(app)

module.exports = app