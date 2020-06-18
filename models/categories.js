'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.TEXT
  }, {});
  Categories.associate = function (models) {
    Categories.belongToMany(models.Recipes, { through: "RecipeCategories" })
  };
  return Categories;
};