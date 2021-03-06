const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.TEXT
		},
		{}
	);
	User.associate = function(models) {
		// associations can be defined here
	};
	return User;
};
