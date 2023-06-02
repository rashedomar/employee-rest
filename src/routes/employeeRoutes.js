const express = require('express');
const router = express.Router();
const passport = require('passport');
const employeeController = require('../controllers/employeeController');

router.put(
  '/update',
  passport.authenticate('local', { session: false }),
  employeeController.updateInfo
);


module.exports = router;
