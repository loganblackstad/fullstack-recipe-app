'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    review: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    vegan: DataTypes.BOOLEAN,
    glutenfree: DataTypes.BOOLEAN
  }, {});
  Recipes.associate = function(models) {
    Recipes.belongsToMany(models.Categories, {
      through: 'RecipesCategories',
      foreignKey: 'recipesId',
      otherKey: 'categoriesId'
    });
  };
  return Recipes;
};