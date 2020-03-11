var mongoose = require('mongoose');
var schema = mongoose.Schema(
    {
        Username:     {type: String},
        Password: { type: String },
        Email   : { type: String },
        FirstName :{type:String },
        LastName   : {type :String},
        Image   : {type :String}
    },
    {
        versionKey: false
    }
);

module.exports= mongoose.model('ppldata', schema);