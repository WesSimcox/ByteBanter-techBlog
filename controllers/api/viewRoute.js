const express = require('express');
const router = express.Router();
const { View } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const views = await View.findAll();
    res.json(views);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching views.' });
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const { post_id } = req.body;
    const { user_id } = req.session;

    const newView = await View.create({ post_id, user_id });
    res.status(201).json(newView);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create view.' });
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  const viewId = req.params.id;

  try {
    const deletedCount = await View.destroy({ where: { id: viewId } });

    if (deletedCount > 0) {
      res.json({ message: 'View deleted.' });
    } else {
      res.status(404).json({ error: 'View not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete view.' });
  }
});

module.exports = router;
