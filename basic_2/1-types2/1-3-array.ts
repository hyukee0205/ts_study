{
  // Array
  const fruits: string[] = ['사과', '바나나'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  // 오브젝트 디스트럭쳐리
  const [name, age] = student;

}