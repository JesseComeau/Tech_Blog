const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.user_id,
      post_id: req.body.postID
    });
    res.status(201).json(commentData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

module.exports = router;