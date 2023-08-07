const { User } = require('../models');

const sampleUsers = [
    {
        username: 'TheOneUser',
        password: 'SecurePassword123',
        email: 'user1@example.com'
    },
    {
        username: 'FriendlyFrank',
        password: 'Frankie456',
        email: 'user2@example.com'
    },
    {
        username: 'BitUnhappyBitmad',
        password: 'Unhappy2022',
        email: 'user3@example.com'
    },
    {
        username: 'GailBitten',
        password: 'Bitten987',
        email: 'user4@example.com'
    },
    {
        username: 'MrCrazyHat',
        password: 'HatLover123',
        email: 'user5@example.com'
    },
    {
        username: 'MileMasterKyle',
        password: 'RunningFree',
        email: 'user6@example.com'
    }
];

const seedUsers = async () => {
    try {
        await User.bulkCreate(sampleUsers);
        console.log('\n*** USERS SEEDED ***\n');
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

module.exports = seedUsers;