const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const sessionAuth = require('../utils/sessionAuth')

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const dbPostData = await Post.findAll({
      order: [['id', 'DESC']],
      limit: 10,
      include: [{ model: Comment}],
    });


    const postData = dbPostData.map((post) =>
    post.get({ plain: true })
  );
    // res.status(200).json(postData);
    res.render('homepage', {
      postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard',  async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      include: [{ model: Post}],
      order: [
        [Post, 'id', 'DESC']
      ]
    });

    const userData = dbUserData.get(({ plain: true })
    );
    // console.log(userData)

    res.render('dashboard', {
      userData,
      logged_in: req.session.logged_in,
    });

    // res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id',  async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment}],

    });

    const postData = dbPostData.get(({ plain: true })
    );
    // console.log(postData)

    res.render('post', {
      postData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });

    // res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;
