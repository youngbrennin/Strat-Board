module.exports = function(sequelize, DataTypes){
    const Cards = sequelize.define('Cards', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gameID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "deck"
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }
    );

    return Cards;
};