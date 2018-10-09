module.exports = function(sequelize, DataTypes){
    const Player = sequelize.define('Player', {
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15
        },
        actionPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        Deck: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Hand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Player;
}