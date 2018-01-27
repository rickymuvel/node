
let con = require('./connect_mongo');

let user_json = {
  nombre:{type: String, required: true, maxlength:[30, "El nombre no debe ser muy grande"]},
  email:{type: String, match: [/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, "El email no es válido"]},
  username: String,
  password:{
  	type: String,
  	minLength: [5, "El password debe contener 5 caracteres o más"],
  	validate: {
  		validator(pass){
  			return this.password_confim === pass;
  		},
  		message: "Las contraseñas no coinciden"
  	}
  }
};

let user_schema = new con.Schema(user_json);

user_schema.virtual('password_confim').get(function(){
	return this._password_conf;
}).set(function(pass){
	this._password_conf = pass;
});

let User = con.mongoose.model('User', user_schema);

module.exports.User = User;