module.exports = function(sequelize, DataTypes){
    const Users = sequelize.define('Users', {
        googleID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        winCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        loseCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        activeGame: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    return Users;
}