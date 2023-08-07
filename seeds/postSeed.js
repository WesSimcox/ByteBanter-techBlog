const { Post } = require('../models');

const samplePosts = [
    {
        title: 'The First Voice',
        content: 'I have a soft spot for sandwiches.',
        user_id: 1
    },
    {
        title: 'Feline Fascination',
        content: 'Cats are my favorite companions.',
        user_id: 2
    },
    {
        title: 'Seeking Employment',
        content: 'Is anyone hiring?',
        user_id: 3
    },
    {
        title: 'Unconventional Sight',
        content: 'A dog sporting a hat at the store!',
        user_id: 4
    },
    {
        title: 'Music Mystery',
        content: 'Who penned "Wheres your head at?"',
        user_id: 5
    },
    {
        title: 'Satisfying Sandwich Quest',
        content: 'A fantastic sandwich awaits you in Denver.',
        user_id: 6
    }
];

const seedPosts = async () => {
    try {
        await Post.bulkCreate(samplePosts);
        console.log('\n*** POSTS SEEDED ***\n');
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

module.exports = seedPosts;