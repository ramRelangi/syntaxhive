const dotenv = require('dotenv');
dotenv.config();


const UserService = require('../services/userService');

// Mock the User model
jest.mock('../models/User', () => (sequelize) => {
  const { DataTypes } = require('sequelize');
  const User = {
    create: jest.fn(),
    findOne: jest.fn(),
    findByPk: jest.fn(),
  };

  return {
    init: () => User,
    ...User,
    sequelize
  };
});

const User = require('../models/User')();

describe('UserService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('createUser should create and return a user', async () => {
    const mockUser = {
      id: 'some-uuid',
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashed-password',
    };
    User.create.mockResolvedValue(mockUser);

    const user = await UserService.createUser('Test User', 'test@example.com', 'password');
    expect(User.create).toHaveBeenCalledWith({ name: 'Test User', email: 'test@example.com', password: 'password' });
    expect(user).toEqual(mockUser);
  });

  it('findUserByEmail should return a user if the email exists', async () => {
    const mockUser = {
      id: 'some-uuid',
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashed-password',
    };
    User.findOne.mockResolvedValue(mockUser);

    const user = await UserService.findUserByEmail('test@example.com');
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
    expect(user).toEqual(mockUser);
  });

  it('findUserByEmail should return null if the email does not exist', async () => {
    User.findOne.mockResolvedValue(null);

    const user = await UserService.findUserByEmail('nonexistent@example.com');
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'nonexistent@example.com' } });
    expect(user).toBeNull();
  });

  it('getUserById should return a user if the id exists', async () => {
    const mockUser = {
      id: 'some-uuid',
      name: 'Test User',
      email: 'test@example.com',
      password: 'hashed-password',
    };
    User.findByPk.mockResolvedValue(mockUser);

    const user = await UserService.getUserById('some-uuid');
    expect(User.findByPk).toHaveBeenCalledWith('some-uuid');
    expect(user).toEqual(mockUser);
  });

  it('getUserById should return null if the id does not exist', async () => {
    User.findByPk.mockResolvedValue(null);

    const user = await UserService.getUserById('nonexistent-uuid');
    expect(User.findByPk).toHaveBeenCalledWith('nonexistent-uuid');
    expect(user).toBeNull();
  });
});