const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SETNULL'
});

// post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// comment belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// users can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment }