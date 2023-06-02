const express = require('express');
const router = express.Router();
const passport = require('passport');
const managerController = require('../controllers/managerController');

router.get(
  '/list',
  passport.authenticate('local', { session: false }),
  managerController.listEmployees
);
router.post(
  '/add',
  passport.authenticate('local', { session: false }),
  managerController.addEmployee
);
router.put(
  '/deactivate/:id',
  passport.authenticate('local', { session: false }),
  managerController.deactivateEmployee
);

router.post('/register', managerController.register);

module.exports = router;
