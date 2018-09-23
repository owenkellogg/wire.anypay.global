'use strict';
module.exports = function(sequelize, DataTypes) {
  var wires = sequelize.define('wires', {
    wire_invoice_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return wires;
};