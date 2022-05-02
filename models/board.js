module.exports = (sequelize, DataTypes) => {
    var board = sequelize.define('board', {
        title: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'board'
    });

    return board;
};