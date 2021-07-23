const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----DATABASE SYNC----------');
  await seedUsers();
  console.log('-----USERS LOADED---------');

  await seedPosts();
  console.log('-----POSTS LOADED---------');

  await seedComments();
  console.log('------COMMENTS LOADED--------');

  await seedVotes();
  console.log('-----VOTES LOADED---------');

  process.exit(0);
};

seedAll();
