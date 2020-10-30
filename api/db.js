const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "postgres://postgres@localhost:3000/movie_app",
    {logging:false}
);

module.exports = sequelize;