const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.ENUM('male, female'),

  },
  email: {
    type: Sequelize.STRING,
  },

  instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});

module.exports = User;
