module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        name: {
            type: DataTypes.STRING
            // allowNull: false,
            // validate: {
            //     len: [1]
            // }
        },
        Devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        
    });
    return burger;
};