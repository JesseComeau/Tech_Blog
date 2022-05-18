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


module.exports = router;