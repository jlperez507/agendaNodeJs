//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/agendanode";
const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      methodOverride = require("method-override");
      mongoose = require('mongoose');

const PORT = 3000
const app = express()

const Server = http.createServer(app)


mongoose.connect('mongodb://localhost/agendanode',  { useNewUrlParser: true })

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(methodOverride());
app.use('/', Routing);


Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT);
});
