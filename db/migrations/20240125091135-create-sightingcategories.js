// "use strict";
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable("sighting_categories", {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       sighting_id: {
//         allowNull: false,
//         references: {
//           model: "sightings",
//           key: "id",
//         },
//         type: Sequelize.INTEGER,
//       },
//       category_id: {
//         allowNull: false,
//         references: {
//           model: "categories",
//           key: "id",
//         },
//         type: Sequelize.INTEGER,
//       },
//       created_at: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: new Date(),
//       },
//       updated_at: {
//         allowNull: false,
//         type: Sequelize.DATE,
//         defaultValue: new Date(),
//       },
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable("sighting_categories");
//   },
// };
