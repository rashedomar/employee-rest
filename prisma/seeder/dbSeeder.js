const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const faker = require('faker');

const prisma = new PrismaClient();

async function main() {
  const employeeData = Array.from({ length: 10 }, (_, i) => ({
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    contactInfo: faker.internet.email(),
    status: "active",
    createdAt: faker.date.past(),
  }));

  const employees = await prisma.employee.createMany({
    data: employeeData,
  });

  console.log(`Created ${employees.count} employees`);

  const userData = Array.from({ length: 10 }, (_, i) => ({
    username: faker.internet.userName(),
    password: bcrypt.hashSync('password123', 10),
  }));

  const users = await prisma.user.createMany({
    data: userData,
  });

  console.log(`Created ${users.count} users`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
