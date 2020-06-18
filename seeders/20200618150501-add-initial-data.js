'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Simple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fancy',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    await queryInterface.bulkInsert('Recipes', [{
      name: 'The Meat Stick',
      review: 'much meat',
      description: 'a stick of meat',
      url: 'http://meat.com',
      likes: 0,
      vegetarian: false,
      vegan: false,
      glutenfree: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Fiesta Salad',
      review: "It's a party in your salad",
      description: 'salad party?',
      url: 'http://saladfiesta.com',
      likes: 0,
      vegetarian: true,
      vegan: false,
      glutenfree: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
    return await queryInterface.bulkInsert('RecipeCategories', [{
      recipesId: 1,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // {
    //   recipesId: 1,
    //   categoriesId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    {
      recipesId: 1,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 2,
      categoriesId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      recipesId: 2,
      categoriesId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('RecipeCategories', null, {});
  }
};
