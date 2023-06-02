const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

exports.addEmployee = async (req, res, next) => {
  const { name, jobTitle, contactInfo, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newEmployee = await prisma.employee.create({
      data: { name, jobTitle, contactInfo, password: hashedPassword },
    });
    res.status(201).json({ data: newEmployee });
  } catch (error) {
    next(error);
  }
};

exports.listEmployees = async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json({ data: employees });
  } catch (error) {
    next(error);
  }
};

exports.deactivateEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deactivatedEmployee = await prisma.employee.update({
      where: { id },
      data: { status: 'inactive' },
    });
    res.status(200).json({ data: deactivatedEmployee });
  } catch (error) {
    next(error);
  }
};

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
  