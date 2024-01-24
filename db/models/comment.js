"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  // Naming of class needs Caps ? - yes need
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.sighting);
    }
  }
  Comment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
      },
      sighting_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          //IS THIS NAME OF CLASS? - This is name of mode(aka table), it runs in order  based on timeline
          model: "sightings",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "comment",
      // below: is this needed?  - yes
      underscored: true,
    }
  );
  return Comment;
};
