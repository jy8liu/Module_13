const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

/* Send a message when a user navigates an invalid route */
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;