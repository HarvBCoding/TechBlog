const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'malicious1',
        email: 'harveyb@gmail.com',
        password: 'password4321'
    },
    {
        username: 'iamironman',
        email: 'ironclad@gmail.com',
        password: 'password4321'
    },
    {
        username: 'knightwing',
        email: 'darkknight@gmail.com',
        password: 'password4321'
    },
    {
        username: 'lumosknox',
        email: 'rhyisg@gmail.com',
        password: 'password4321'
    },
    {
        username: 'moonmoon',
        email: 'jacc76@gmail.com',
        password: 'password4321'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;