const { verifyUserCredentials } = require('../../../services/auth.js');

describe('Testing for valid user credentials', () => {
  test('should return true as valid credentails', () => {
    const user = {
      email: 'h@gmail.com',
      password: '123',
    };
    expect(verifyUserCredentials(user)).toBe(true);
  });

  test('should return false as invalid password', () => {
    const user = {
      email: 'h@gmail.com',
      password: '789',
    };
    expect(verifyUserCredentials(user)).toBe(false);
  });

  test('should return false as invalid credentials', () => {
    const user = {
      email: 'f@gmail.com',
      password: '789',
    };
    expect(verifyUserCredentials(user)).toBe(false);
  });
});
