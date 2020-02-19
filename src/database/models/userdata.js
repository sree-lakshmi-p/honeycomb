const db = require("../connector");
const sequelize = require("sequelize");

const user= db.define(
    "userdata",
    {
        "username": {
            type: sequelize.STRING
        },

        "password": {
            type: sequelize.STRING
        }

    }
)

module.exports= user;