module.exports = function(sequelize, DataTypes) {
    var maintenance_logs = sequelize.define("maintenance_logs", {
      logs_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      stroke_range: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unit_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // USED PARTS
      valve_used: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      seat_used: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      DRing_used: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      packing_used: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      plunger_used: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      // Discharge valves
      DH1_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH2_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH3_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH4_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH5_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // discharge seats
      DH1_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH2_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH3_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH4_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH5_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // discharge Dring
      DH1_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH2_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH3_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH4_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      DH5_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // suction vavle
      SH1_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH2_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH3_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH4_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH5_valve: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // Suction seats
      SH1_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH2_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH3_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH4_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH5_seat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // suction dring
      SH1_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH2_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH3_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH4_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH5_DRing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // packing
      SH1_packing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH2_packing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH3_packing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH4_packing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH5_packing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // plungers
      SH1_plunger: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH2_plunger: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH3_plunger: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH4_plunger: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      SH5_plunger: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
  
    return maintenance_logs;
  };
  