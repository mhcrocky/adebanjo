const express = require('express');

const Map = require('../models/map.js');
const config = require('../config');
const router = express.Router();


router.get('/', async (req, res) => {
    Map.find().select('type properties geometry -_id').exec()
        .then(maps =>{
            res.json(maps)
        })
});
router.post('/',async(req,res) => {
    console.log(req.body.properties.NeighName)
    const map = new Map({
        NeighID: req.body.properties.NeighID,
        type: req.body.type,
        properties: req.body.properties,
        geometry:req.body.geometry
    })

    Map.find({NeighID: req.body.properties.NeighID}).exec()
    .then(rs=>{
        if(rs.length){
            res.json({status:'found data'});
        }else{
            map.save(function(err){
                if(err) return err
                res.json({ status: 'success' });
            });
        }
    })
    .catch(err=>{
        res.json(err)
    })
    
})

module.exports = router;