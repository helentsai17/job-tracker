const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanyScehma = new Schema({
    CompanyName : {type:String, required:true},
    JobTitle : {type:String, required:true},
    JobRequire : {type:String},
    CompanyDescribe : {type:String},
    JobStatus:{type:String},
    // possibility : {type:Boolean},
    date: {type:Date, required:true} 
   },{
        timestamps:true,
    });
    const Company = mongoose.model('Company',CompanyScehma);

    module.exports = Company; 