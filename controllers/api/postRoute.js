const express = require('express');
const router = express.Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updateCount] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updateCount > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [deleteCount] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deleteCount > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;