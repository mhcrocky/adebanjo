const { json } = require('express');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const MapSchema = mongoose.Schema({
    NeighID:{
        type:String,
        required:true
    },
    type: {
        type: String,
        required: true
    },
    properties: {
        type: Object,
        required: true
    },
    geometry: {
        type: Object,
        required: true
    }
});
const Map = mongoose.model('Map', MapSchema);

module.exports = Map;
