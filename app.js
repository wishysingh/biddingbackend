var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

User = require('./models/user');
Item = require('./models/items');
Signin = require('./models/signin');

//connect to mongoose
mongoose.connect('mongodb://localhost/userdetails');
var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('please use /api/users');
});

app.get('/api/users',function(req,res){
    User.getUsers(function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

app.post('/api/users',function(req,res){
    console.log(req);
    var user = req.body;
    User.addUser(user,function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

app.post('/api/users/signin',function(req,res){
    console.log(req.body);
    var user = req.body;
    Signin.checkUser(user,function(err,user){
        if(err){
            throw err;
        }
        if(user.length==0)
        {
            res.send(401);
            return;
        }
        res.json(user);
    });
});

app.get('/api/items',function(req,res){
    Item.getItems(function(err,items){
        if(err){
            throw err;
        }
        res.json(items);
    });
});

app.post('/api/items',function(req,res){
    console.log(req);
    var item = req.body;
    Item.addItem(item,function(err,item){
        if(err){
            throw err;
        }
        res.json(item);
    });
});

app.put('/api/items/:_id',function(req,res){
    console.log(req);
    var id=req.params._id;
    var item = req.body;
    Item.updateItem(id,item,{},function(err,item){
        if(err){
            throw err;
        }
        res.json(item);
    });
});

app.delete('/api/items/:_id',function(req,res){
    var id=req.params._id;
    Item.delItem(id,function(err,item){
        if(err){
            throw err;
        }
        res.json(item);
    });
});

app.listen(3000);
console.log('ruunning on port 3000');