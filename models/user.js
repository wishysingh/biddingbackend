var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var User = module.exports = mongoose.model('User',userSchema);

//get user
module.exports.getUsers = function(callback,limit){
    User.find(callback).limit(limit);
}
//add user
module.exports.addUser = function(user, callback){
    console.log(user);
    User.create(user,callback);
}