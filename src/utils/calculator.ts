export function evaluate(expression: string): number {
  const parts = expression.split(' ');
  const num1 = parseFloat(parts[0]);
  const operator = parts[1];
  const num2 = parseFloat(parts[2]);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '×':
      return num1 * num2;
    case '÷':
      return num1 / num2;
    default:
      return num1;
  }
}