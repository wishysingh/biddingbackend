var mongoose = require('mongoose');

//item schema
var itemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    biddinglist:[{
        id:{ 
            type: String
        }, 
        price:{ 
            type: Number
        }
    }],
    highestbidding:{
        type: Number,
        default:10
    }
});

var Item = module.exports = mongoose.model('Item',itemSchema);

//get item
module.exports.getItems = function(callback,limit){
    Item.find(callback).limit(limit);
}
//add item
module.exports.addItem = function(item, callback){
    console.log(item);
    Item.create(item,callback);
}
//update item
module.exports.updateItem = function(id, item, options, callback){
    console.log(item,"aaaaaaaaa",id);
    var query= {_id:id};
    var update={
        name:item.name,
        description:item.description
    }
    Item.findOneAndUpdate(query,update,options,callback);
}

module.exports.delItem = function(id, callback){
    var query= {_id:id};
    Item.remove(query,callback);
}