const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const KSEA_event = new Schema({
    title: String,
    shortDesc: String,
    desc: String,
    link: String,
    date: Date,
    location: String,
    label: String
});

// Model
const KSEA_EVENT_MODEL = mongoose.model('KSEA_EVENT_MODEL', KSEA_event);

module.exports = KSEA_EVENT_MODEL;