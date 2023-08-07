const database = require('../config/connection');
const seedUsers = require('./user_seed');
const seedPosts = require('./post_seed');

const initializeSeed = async () => {
    try {
        await database.sync({ force: true });
        console.log('\n*** DATABASE SYNCED ***\n');
        
        await seedUsers();
        console.log('\n*** USERS SEEDED ***\n');
        
        await seedPosts();
        console.log('\n*** POSTS SEEDED ***\n');
        
        process.exit(0);
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
};

initializeSeed();