const router = require('express').Router();

const pageRoutes = require('./pageRoutes');
const apiRoutes = require('./api');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
