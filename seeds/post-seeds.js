const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem ipsum dolor sit ame',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 1
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit ame',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 3
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 4
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 5
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 1
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 4
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 3
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 2
    },
    {
        title: 'Ea recusandae libero aut earum ducimus aut amet',
        post_text: 'Nam eligendi illo qui dolorem quaerat sit voluptatem veniam eum porro distinctio et dignissimos enim ut ipsa nisi et minima error. Ut voluptas aperiam',
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;