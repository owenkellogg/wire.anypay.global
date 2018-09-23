'use strict';
module.exports = function(sequelize, DataTypes) {
  var account_bank_wire_infos = sequelize.define('account_bank_wire_infos', {
    bank_name: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    account: DataTypes.INTEGER,
    aba: DataTypes.INTEGER,
    anypay_account_email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return account_bank_wire_infos;
};