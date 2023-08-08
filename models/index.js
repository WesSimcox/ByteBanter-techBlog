const User = require('./User');
const Post = require('./Posts');
const View = require('./View');

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
