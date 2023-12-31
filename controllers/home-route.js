const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }],
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('homepage', { posts, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }],
        });

        const post = postData.get({ plain: true });

        res.render('post', { ...post, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', { ...user, logged_in: true });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
    } else {
        res.render('login');
    }
});

module.exports = router;
