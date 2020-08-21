'use strict';
const loader = require('./sequelize-loader');
const { Sequelize } = require('./sequelize-loader');
const sequelize = loader.Sequelize;

const Candidate = loader.database.define(
  'candidates',
  {
    candidateId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    candidateName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    scheduleId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  },
  {
    freezeTimeName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['scheduleId']
      }
    ]
  }
);

module.exports = Candidate;