{
  /**
   * Type assertion 
   */
  function jsStrFunc(): any {
    return 'hello';
  }  
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(5)); //사용 X

  function findNumbers(): number[] | undefined {
    return undefined
  }
  const numbers = findNumbers();
  numbers!.push(2);
  
  const button = document.querySelector('class')!; //버튼이 확실하게 있을 경우
  


}