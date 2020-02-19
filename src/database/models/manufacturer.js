const db = require("../connector");
const sequelize = require("sequelize");

const manufacturer= db.define(
    "manufacturer",
    {
        "name": {
            type: sequelize.STRING
        },
        "location": {
            type: sequelize.STRING
        }
    }
)

module.exports= manufacturer;