const db = require("../connector");
const sequelize = require("sequelize");

const ProductDetails= db.define(
    "Product_details",
    {
        "product_name": {
            type: sequelize.STRING
        },
        "cost": {
            type: sequelize.DOUBLE
        }

    }
)

module.exports= ProductDetails;