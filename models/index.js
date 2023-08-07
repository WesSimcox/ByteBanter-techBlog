const User = require('./user');
const Post = require('./post');
const View = require('./view');

// User associations
User.hasMany(Post, { foreignKey: 'user_id' });
User.hasMany(View, { foreignKey: 'user_id' });

// Post associations
Post.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Post.hasMany(View, { foreignKey: 'post_id' });

// View associations
View.belongsTo(Post, { foreignKey: 'post_id', onDelete: 'CASCADE' });
View.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = { User, Post, View };
