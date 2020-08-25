const { testLab } = require("firebase-functions");

function sum(a, b) {
  return a + b;
}

test('gets sum', () => {
  expect(sum(1,1)).toBe(2)
  expect(sum(1,1)).not.toBeNaN()
})