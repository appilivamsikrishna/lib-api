module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define("book", {
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        costINR: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        softcopyAvailable: {
            type: DataTypes.BOOLEAN
        },
        publishYear: {
            type: DataTypes.INTEGER
        },
        edition: {
            type: DataTypes.TEXT
        }
    })
    return Book

}