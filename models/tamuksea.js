const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const KSEA_schema = new Schema({
    lastname: String,  
    firstname: String,   
    email: String,
    password: String,
    major: String
});

// Model
const KSEA_MODEL = mongoose.model('KSEA_MODEL', KSEA_schema);

module.exports = KSEA_MODEL;