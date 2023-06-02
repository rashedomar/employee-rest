const express = require('express');
const passport = require('passport');
const employeeRoutes = require('./routes/employeeRoutes');
const managerRoutes = require('./routes/managerRoutes');
require('./middleware/passportSetup');
const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/api/employee', employeeRoutes);
app.use('/api/manager', managerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(3000, () => console.log('Server started'));