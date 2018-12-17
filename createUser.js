var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/agendanode";

//Crea la base de datos si no existe.
MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

//Crea collection
MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("agendanode");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//insert usuario
MongoClient.connect(url, {useNewUrlParser: true }, function(error, db){
    if (error) throw error;
     var dbo = db.db("agendanode");
     var myobj = { user: "admin@gmail.com", pass: "admin" };
     dbo.collection("users").insertOne(myobj, function(err, res) {
       if (err) throw err;
       console.log("1 document inserted");
       db.close();
     });
	})
