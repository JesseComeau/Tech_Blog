const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      post_title: req.body.title,
      post_message: req.body.body,
      user_id: req.session.user_id,
    });
    res.status(201).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(201).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;