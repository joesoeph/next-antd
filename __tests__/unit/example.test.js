function add(a, b) {
  return a + b;
}

describe('Example unit test', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
