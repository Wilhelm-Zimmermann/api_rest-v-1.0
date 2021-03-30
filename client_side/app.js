const app = require('./server')
const http = require('http')
const port = process.env.PORT || 80
const server = http.createServer(app)

server.listen(port,() => {
    console.log(`Client is running on port ${port}`)
})