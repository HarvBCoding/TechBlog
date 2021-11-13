const User = require('./User');
const Post = require('./Post');

// user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// post can have many comments

// comment belongs to post

// users can have many comments

// comment belongs to user

module.exports = { User, Post }