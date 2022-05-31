const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// router.get('/', async (req, res) => {
//     // Send the rendered Handlebars.js template back as the response
//     try {
//       const dbPostData = await Post.findAll({
//         order: [['id', 'DESC']],
//         limit: 10,
//         include: [{ model: Comment}],
//       });

//       const postData = dbPostData.map((post) =>
//       post.get({ plain: true })
//     );
//       // res.status(200).json(postData);
//       res.render('homepage', {
//         postData,
//         logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

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

// router.get('/dashboard', async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id, {
//       include: [{ model: Post}]
//     });

//     if (!userData) {
//       res.status(404).json({ message: 'No id found with that id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;