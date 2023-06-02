const { PrismaClient } = require('@prisma/client');
const httpMocks = require('node-mocks-http');
const controller = require('.././src/controllers/managerController.js'); // assuming the controller's location

jest.mock('@prisma/client');

describe('Employee Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
    PrismaClient.mockClear();
  });

  it('should add an employee', async () => {
    const mockEmployee = { id: 1, name: 'John Doe', jobTitle: 'Engineer', contactInfo: 'john@example.com' };
    PrismaClient.prototype.employee = {
      create: jest.fn().mockResolvedValue(mockEmployee),
    };
    req.body = mockEmployee;

    await controller.addEmployee(req, res, next);
    
    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual({ data: mockEmployee });
  });

  it('should list all employees', async () => {
    const mockEmployees = [
      { id: 1, name: 'John Doe', jobTitle: 'Engineer', contactInfo: 'john@example.com' },
      { id: 2, name: 'Jane Doe', jobTitle: 'Manager', contactInfo: 'jane@example.com' },
    ];
    PrismaClient.prototype.employee = {
      findMany: jest.fn().mockResolvedValue(mockEmployees),
    };

    await controller.listEmployees(req, res, next);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ data: mockEmployees });
  });

  it('should deactivate an employee', async () => {
    const mockEmployee = { id: 1, name: 'John Doe', jobTitle: 'Engineer', contactInfo: 'john@example.com', status: 'inactive' };
    PrismaClient.prototype.employee = {
      update: jest.fn().mockResolvedValue(mockEmployee),
    };
    req.params = { id: mockEmployee.id };

    await controller.deactivateEmployee(req, res, next);
    
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ data: mockEmployee });
  });

  // Additional tests for error handling can be added here.
});
