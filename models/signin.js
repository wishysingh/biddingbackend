var mongoose = require('mongoose');
User = require('./user');

//user schema
var signinSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

var Signin = module.exports = mongoose.model('Signin',signinSchema);

//get user
module.exports.checkUser = function(user,callback){
    var userdetail={
        name:user.name,
        password:user.password
    }
    User.find(userdetail,callback);
}