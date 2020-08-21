'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/schedule_arranger',
  {
    logging: false   //ログが出ないようにする
  });

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
}