const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateInfo = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { contactInfo } = req.body;
  try {
    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: { contactInfo },
    });
    res.status(200).json({ data: updatedEmployee });
  } catch (error) {
    next(error);
  }
};
