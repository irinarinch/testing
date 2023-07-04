import Validator from '../Validator';

const validator = new Validator();

test('is valid', () => {
  const result = validator.checkAlgorithm('3530111333300000');
  expect(result).toBe(true);
});

test('is not valid', () => {
  const result = validator.checkAlgorithm('sdfgh');
  expect(result).toBe(false);
});

test('is American Express', () => {
  const result = validator.checkSystem('371449635398431');
  expect(result).toBe('americanExpress');
});

test('is not American Express', () => {
  const result = validator.checkSystem('30569309025904');
  expect(result).not.toBe('americanExpress');
});
