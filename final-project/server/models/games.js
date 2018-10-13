module.exports = function(sequelize, DataTypes){
    const Game = sequelize.define('Game', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            primaryKey: true
        },
        player1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15
        },
        player2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        activePlayer: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Game;
}