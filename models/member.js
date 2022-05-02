module.exports = (sequelize, DataTypes) => {
    var member = sequelize.define('member', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        //옵션 설정
        timestamps: true,
        underscored: true,
        tableName: 'memeber'
    });

    //foreign key 
    member.associate = async (models) => {
        await member.hasMany(models.board, { foreignKey: { name: 'member_id', allowNull: false }, sourceKey: 'id', onDelete: 'CASCADE' });
    };

    return member
};