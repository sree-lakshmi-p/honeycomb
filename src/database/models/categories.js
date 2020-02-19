const db = require("../connector");
const sequelize = require("sequelize");

const categories= db.define(
    "product_category",
    {
        "name": {
            type: sequelize.STRING
        }

    }
)

module.exports= categories;