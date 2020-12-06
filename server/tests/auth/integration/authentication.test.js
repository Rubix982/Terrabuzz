const { generateAccessToken, verifyAccessToken } = require('../../../services/auth.js');

describe('Testing for access token creation on login', () => {
  test('should return an access-token', () => {
    const data = {
      email: 'h@gmail.com',
      password: '123',
    };
    expect(generateAccessToken(data)).toBeTruthy();
  });

  test('should throw an error', () => {
    const data = {
      email: 'g@gmail.com',
      password: '123',
    };
    expect(() => generateAccessToken(data)).toThrow('Please login with valid credentials!');
  });
});

describe('Testing if payload is same both to and fro token', () => {
  test('should return payload successfully', () => {
    const data = {
      email: 'h@gmail.com',
      password: '123',
    };
    const token = generateAccessToken(data);

    expect(verifyAccessToken(token).handle).toBe('hassanzhd');
  });

  test('should throw error', () => {
    const data = {
      email: 'h@gmail.com',
      password: '123',
    };
    let token = generateAccessToken(data);
    token = token.replace('e', 'E');
    expect(() => verifyAccessToken(token)).toThrow('invalid token');
  });
});
