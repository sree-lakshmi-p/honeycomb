const db = require("../connector");
const sequelize = require("sequelize");

const ProductProperties= db.define(
    "product_properties",
    {
        "color": {
            type: sequelize.STRING
        },
        "weight": {
            type: sequelize.DOUBLE
        },
        "height": {
            type: sequelize.DOUBLE
        }

    }
)

module.exports= ProductProperties;