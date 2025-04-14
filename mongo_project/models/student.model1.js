// VALIDATING SCHEMA // CONSTRAINTS

const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true //these are constraints
    }, 
    age :{
        type: Number,
        min: 19,
        required: true 
    },
    email : {
        type : String,
        required : true,
        lowercase : true, // apne app sara lower case kar dega
        minLength : 15 // min lenght
    },
    subjects : {
        type : [String]
    },
    // createdAt : {
    //     type : Date,
    //     immutable : true, // cannot change
    //     default : () => { // default values
    //         return Date.now()
    //     }
    // } // added timestmaps : true, automatically add kar dega, 

},{versionKey : false, timestamps : true})
// __v ko remove kare dega version key 

module.exports = mongoose.model('Student', studentSchema) // Collection creation is happening