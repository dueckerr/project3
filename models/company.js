module.exports = function(sequelize, DataTypes) {
    var company = sequelize.define("company", {
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Inactive", "Active"]
      }
    });
  
    return company;
  };
  