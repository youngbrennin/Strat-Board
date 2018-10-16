module.exports = function(sequelize, DataTypes){
    const Games = sequelize.define('Games', {
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        player1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        player1Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        player2Name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        activePlayer: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
    return Games;
}