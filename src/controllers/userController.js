const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

exports.register = async (req, res, next) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const newManager = await prisma.user.create({
        data: { username, password: hashedPassword },
      });
      res.status(201).json({ message: 'Manager registered successfully', data: newManager });
    } catch (error) {
      next(error);
    }
  };