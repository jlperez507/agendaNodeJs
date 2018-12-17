const Router = require('express').Router();
const Users = require('./modelos/model.js');
const Eventos = require('./modelos/eventos.js');

let userLogeado = '';
//VAlida si el usuario existe.
Router.post('/login', function(req, res) {
    let user = req.body.user
    let pass = req.body.pass

    Users.find({user: user, pass: pass}).countDocuments().exec(function(err, doc){
          if (err) throw err;
          if (doc > 0 ) {
            userLogeado = user;
            res.send('Validado');
          }else {
            res.send('No Validado');
          }
          console.log(doc);
      });
})

//Obtiene todos los eventos.
Router.get('/events/all', function(req, res) {
    let user = userLogeado;
    Eventos.find({user: user}).exec(function(err, doc){
          if (err) throw res.json(err);
          res.json(doc);
          console.log(doc);
      });

})

//Obtiene todos los eventos.
Router.post('/events/new', function(req, res) {
    let ObjectID = require('mongodb').ObjectID;
    let user = userLogeado;
    let title = req.body.title;
    let start = req.body.start;
    let end = req.body.end;
    let registro;
    if (end == ''){
      registro = new Eventos ({'id' : new ObjectID(), 'title' : title, 'start' : start, 'allday' : true, 'user' : user});
    }else {
        registro = new Eventos ({'id' : new ObjectID(), 'title' : title, 'start' : start, 'end' : end, 'allday' : false, 'user' : user});
    }
    registro.save(function(err){
          if (err) {
            res.send(err);
          }else {
                res.send('Documento insertado');
          }
      });

})

//Elimina un evento.
Router.post('/events/delete', function(req, res) {
    let id = req.body.id
    let user = userLogeado;
    console.log(id);
    Eventos.deleteOne({user: user, id : id}).exec(function(err){
          if (err) throw res.sen(err);
          res.send("El evento ha sido eliminado.");
      });

})


module.exports = Router
