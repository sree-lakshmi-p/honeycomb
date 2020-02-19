const express = require("express");
const product = require("./database/models/product_details");
const manufacturer = require("./database/models/manufacturer");
const category = require("./database/models/categories");
const properties = require("./database/models/product_properties");


const router = express.Router();

router.get('/', (req,res) => {
    product.findAll({
        include : [{model: manufacturer}]
    }).then(res1 => {
        res.json(res1);
    });
}) ;


// API to create new product
router.post("/product", (req,res) => {
    if(req.body !== null) {
    console.log(req.body);
    let newProduct = {
        product_name: req.body.product_name,
        cost: req.body.cost
    };
    let newManu = req.body.manufacturer;
    let newCat = req.body.category;
    let newProp = req.body.properties;
    product.create(newProduct).then( 
        pdt => {
            //link manufacturer object to newly created product using product id
            manufacturer.findOne({where : {id: newManu}}).then(resManu =>{
                pdt.setmanufacturers(resManu)
                console.log("SAVED");
                });
            //link category object to newly created product using product id
            category.findOne({where : {id: newCat}}).then(resCat => {
                pdt.setcategorys(resCat).
                console.log("SAVED");
                });
            //link property object to newly created product using product id
            properties.findOne({where : {id: newProp}}).then(resProp => {
                pdt.setpropertiess(resProp).
                console.log("SAVED");
                });
         } 
    
    );

    }
    res.json({status:"executed"});
}) ;

//API to create new manufacturer
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

//API to create new category
router.post("/category", (req,res) => {
    if(req.body !== null) {
    console.log(req.body);
    let newCategory = {
        name: req.body.name
    };
    category.create(newCategory, catg =>{
        console.log("SAVED");
    });

    }
    res.json({status:"executed"});
}) ;

//API to create new properties list
router.post("/properties", (req,res) => {
    if(req.body !== null) {
    console.log(req.body);
    let newProp = {
        color: req.body.color,
        weight: req.body.weight,
        height: req.body.height
    };
    properties.create(newProp, prop =>{
        console.log("SAVED");
    });

    }
    res.json({status:"executed"});
}) ;

//API for adding items to cart
router.put("/cart",(req,res) => {
    if(req.body !== null) {
        console.log(req.body);
        let newItem = {
            username: req.body.username,
            
        }
    }
}
);

module.exports = router;