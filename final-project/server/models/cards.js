module.exports = function(sequelize, DataTypes){
    const Cards = sequelize.define('Cards', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            primaryKey: true
        }
        },
        {
            classMethods: {
                associate: function(models){
                }
            }
    });
    return Cards;
}