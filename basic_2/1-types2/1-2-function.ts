{
  // // javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
 
  // // javascript 
  // function tsFetchNum(id: string): Promise<number> {
  //   // code...
  //   // code ...
  //   // code  ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }


  // javascript -> TypeScript
  // Optional parameter
  function printName(fristName: string, lastName?: string) {
    console.log(fristName);
    console.log(lastName);
  }
  printName('steve', 'jobs');
  printName('asd');
  printName('asd', undefined);

  // Default parameter (기본 파라미터 값을 지정할 수 있다.)
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();


  // Rest parameter 

  function addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a+b);
  }

  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));


}