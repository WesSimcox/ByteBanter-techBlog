const express = require('express');
const router = express.Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const userData = await User.create({ email, username, password });

    req.session.save(() => {
      req.session.logged_in = true;
      res.json(userData);
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ where: { email } });

    if (!userData || !(await userData.checkPassword(password))) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
    } else {
      req.session.save(() => {
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(500).end();
  }
});

module.exports = router;
