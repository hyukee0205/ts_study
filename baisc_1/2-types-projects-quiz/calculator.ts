/**
 * Let's make a calculator 🧮
 */

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command, b:number, c:number):number {
  switch (command) {
    case 'add':
      return b+c;
    case 'substract':
      return b-c;
    case 'multiply':
      return b*c;
    case 'divide':
      return b/c;
    case 'remainder':
      return b%c;
    default:
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
