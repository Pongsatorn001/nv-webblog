let express = require('express') 
let bodyParser = require('body-parser') 
 
const app = express() 
 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))

//การทำให้ App.js เรียก routes.js มาใช้งาน
require('./routes')(app)

app.get('/status', function (req, res ){
    res.send('Hello nodejs server') 
}) 
 
app.get('/hello/:person', function (req,res) {   
    console.log('hello - ' + req.params.person)   
    res.send('sey hello with ' + req.params.person) 
}) 
 
app.post('/hello', function (req, res) {   
    res.send('OK  you post - ' + req.body.name) 
}) 
 
let port = 8081 
 
app.listen(port, function () {   
    console.log('server running on ' + port) 
})