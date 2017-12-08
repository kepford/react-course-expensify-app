const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should generate greeting with name', () => {
  const result = generateGreeting('Bob');
  expect(result).toBe('Hello Bob!');
});

test('Should generate greeting with no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
