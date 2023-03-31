{
  /**
   * javascript
   * 원시 타입(primitive): number, string, boolean, bigint, symbol, null, undefined
   * 객체 타입(Object): function, array ...
   */

  // number
  const num:number = -6;

  // string
  const str:string = 'hello';

  // boolean
  const boal:boolean = true;

  // undefined (값이 있는지 없는지 결정되지 않은 상태)
  let name: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;

  // 함수를 만들 때는 대부분 무언가가 있고 없고 차이를 알기 위해 undefined를 많이 쓴다.
  function find(): number | undefined {
    return undefined;
  }

  // null (값이 비었다고 결정된 상태)
  let person: null;
  let person2: string | null;
  

  // 쓰지 않는 타입들

  // unknown (알수없는 .. 가능하면 쓰지 않는다.)
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any (어떤것이든 담을 수 있는 변수 )
  let anything: any = 0;
  anything = 'hello';


  // void (함수에서 아무것도 리턴하지 않는 경우)
  function print(): void {
    console.log('hello');
    return;
  }

  // never : 아무것도 리턴할 수 없을때 절대,, 
  function throwError(message: string): never{
    throw new Error(message);
  }


}