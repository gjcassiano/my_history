const Sequelize = require('sequelize');
const sequelize = new Sequelize('world', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});

const City = sequelize.define('city',{
    Id: {type: Sequelize.INTEGER, primaryKey: true} ,
    Name: Sequelize.STRING,
    CountryCode: Sequelize.STRING,
    District: Sequelize.STRING,
    Population: Sequelize.INTEGER
},{
    timestamps: false,

  // I don't want createdAt
  createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,

  // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
  deletedAt: false,
  paranoid: true,
  tableName: 'city'
}); 

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// sequelize
//   .query('SELECT * FROM city limit 100', {model: City, raw:true})
//   .then(city => {
//     // Each record will now be mapped to the project's model.
//     // console.log(city)
//   })

City.all({limit:10}).then(city =>{
    console.log(city);
})