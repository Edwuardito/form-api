const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');

const { DATABASE } = process.env;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD ,{
  logging: false, 
  native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]); 
sequelize.models = Object.fromEntries(capsEntries);

const { Question, Answer } = sequelize.models;

Question.hasMany(Answer, { foreignKey: 'id_question' });
Answer.belongsTo(Question, { foreignKey: 'id_question' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};