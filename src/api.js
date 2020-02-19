const express = require("express");
const product = require("./database/models/product_details");
const manufacturer = require("./database/models/manufacturer")

const router = express.Router();

router.get('/', (req,res) => {
    product.findAll({
        include : [{model: manufacturer}]
    }).then(res1 => {
        res.json(res1);
    });
}) ;



router.post("/", (req,res) => {
    if(req.body !== null) {
    console.log(req.body);
    let newProduct = {
        product_name: req.body.product_name,
        cost: req.body.cost
    };
    let newManu = req.body.manufacturer;
    product.create(newProduct).then( pdt => {
        manufacturer.findOne({where : {id: newManu}}).then(resManu =>{
            pdt.setmanufacturers(resManu);
            console.log("SAVED");
        });
    });

    }
    res.json({status:"executed"});
}) ;

router.post("/manufacturer", (req,res) => {
    if(req.body !== null) {
    console.log(req.body);
    let newManufacturer = {
        name: req.body.name,
        location: req.body.location
    };
    manufacturer.create(newManufacturer, manfc =>{
        console.log("SAVED");
    });

    }
    res.json({status:"executed"});
}) ;



module.exports = router;