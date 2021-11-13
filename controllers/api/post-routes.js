const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');

// GET all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one post
router.get('/:id', (req, res) => {
    
});

// POST / create new user
router.post('/', (req, res) => {

});

// PUT / update user
router.put('/:id', (req, res) => {

});

// DELETE / destroy user
router.delete('/:id', (req, res) => {

});

module.exports = router;