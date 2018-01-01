const Sequelize = require('sequelize')
const db = require('../db')

const Destination = db.Define('destination', {
	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	startDate: {
		type: Sequelize.DATEONLY
		allowNull: false

	},
	endDate: {
		type: Sequelize.DATEONLY
		allowNull: false

	}, 
	airportCode: {
		type: Sequelize.STRING,
		allowNull: false

	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = Destination