let User = require('../modelos/User').User;

module.exports = {
  Registrar(req, res, next){
    let user = new User({
      nombre: req.body.nombre,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      password_confirm: req.body.password_confirm
    });
    user.save().then(()=>{
      res.json({mensaje: "Hemos guardado al usuario"});
    },(err)=>{
      console.log( String(err) );
      res.json({mensaje: "No pudimos guardar el usuario"})
    });

  },
  Login(req, res, next){
    // Logear
    User.findOne({username: req.body.username, password: req.body.password},"nombre username", function(err, doc){
      if(err) res.status( err.status || 500 ).json({mensaje: "Tuvimos un error inesperado"});
      if(doc.length==0){ // Si no hay documentos
        res.status(404);
        res.json({mensaje: "No encontramos coincidencias"});
      }
      else{
        res.status(200);
        res.json(doc);
      }
    })
  },
  VerificarUsername(req, res, next){

  }
};