module.exports = function(sequelize, DataTypes) {
    var savedPumps = sequelize.define("savedPumps", {
      logs_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      unit_id: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return savedPumps;
  };
  