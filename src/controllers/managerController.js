const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

exports.addEmployee = async (req, res, next) => {
  const { name, jobTitle, contactInfo } = req.body;
  try {
    const newEmployee = await prisma.employee.create({
      data: { name, jobTitle, contactInfo },
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
  const id  = parseInt(req.params.id);
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


  