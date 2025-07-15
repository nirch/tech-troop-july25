const { capitalize, reverseString, isPalindrome } = require('./strings');

describe('capitalize', () => {
  test('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('hELLO')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('Hello');
  });

  test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns input if not a string', () => {
    expect(capitalize(123)).toBe(123);
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });
});

describe('capitalize - edge cases', () => {
  test('handles whitespace-only strings', () => {
    expect(capitalize('   ')).toBe('   ');
  });

  test('handles single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('A')).toBe('A');
  });

  test('handles strings with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
    expect(capitalize('1hello')).toBe('1hello');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Racecar')).toBe('racecaR');
    expect(reverseString('')).toBe('');
  });

  test('throws error if input is not a string', () => {
    expect(() => reverseString(123)).toThrow('Input must be a string');
    expect(() => reverseString(null)).toThrow('Input must be a string');
    expect(() => reverseString(undefined)).toThrow('Input must be a string');
  });
});

describe('reverseString - edge cases', () => {
  test('handles whitespace-only strings', () => {
    expect(reverseString('   ')).toBe('   ');
  });

  test('handles single character strings', () => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('!')).toBe('!');
  });

  test('handles strings with special characters', () => {
    expect(reverseString('!@#')).toBe('#@!');
    expect(reverseString('123')).toBe('321');
  });
});

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  test('returns false if input is not a string', () => {
    expect(isPalindrome(12321)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});

describe('isPalindrome - edge cases', () => {
  test('handles whitespace-only strings', () => {
    expect(isPalindrome('   ')).toBe(true);
  });

  test('handles strings with only special characters', () => {
    expect(isPalindrome('!!!')).toBe(true);
    expect(isPalindrome('!@#@!')).toBe(true);
  });

  test('handles strings with numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  test('handles mixed case and special characters', () => {
    expect(isPalindrome('A!b@b!a')).toBe(true);
  });
});