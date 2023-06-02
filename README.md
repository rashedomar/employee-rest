
---

# Employee Board Backend API

This is a simple backend API for managing employees and their contact details. It provides separate endpoints for employees and HR managers, each with different access rights.

## Features

**Employee API**
- Update personal contact information

**HR Manager API**
- List all employees
- Add a new employee
- Deactivate an employee

## Technology Stack

- Node.js
- Express.js
- Prisma (for MySQL database management)
- Passport.js (for authentication)
- bcrypt.js (for password hashing)
- faker.js 

## Getting Started

These instructions will help you setup a local development instance of the app.

### Requirements

- Node.js
- MySQL

### Installing

1. Clone this repository `git clone https://github.com/rashedomar/employee-rest.git`
2. Enter the cloned repository `cd employee-rest`
3. Install dependencies `npm install`
4. Copy the example environment file and make the required changes `cp .env.example .env`
5. run `npx prisma push`
6. run `npx prisma generate` 
7. run `npm run seed`
5. Run the server `npm run dev`

## API Routes

**User Registration**
- `POST /api/user/register` - create a user 


**Employee Endpoints**

- `POST /api/employee/update/:id` - Update the contact information of the employee

**Manager Endpoints**

- `GET /api/manager/list` - List all employees
- `POST /api/manager/add` - Add a new employee
- `PATCH /api/manager/deactivate/:id` - Deactivate an employee

Please note that all manager endpoints require HTTP Basic Authentication.

## Running Tests

No tests currently exist for this project.

## Deployment

This API is ready to be deployed on a platform like Heroku. Additional configuration may be required depending on your hosting solution.

---

Please note that the contents of the README file depend on the specifics of your project. This is a basic template and you may need to add or remove sections depending on your project's requirements.