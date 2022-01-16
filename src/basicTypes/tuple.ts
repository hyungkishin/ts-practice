let x: [string, number]; // tuple 타입의 경우. 이런 형식으로 도 가능하다.

x = ["hello", 39] // 이처럼 항상 순서도 맞아야 하고 길이도 맞아야 하고 , 타입도 맞아야 한다.

x = [39, "hello"] // [string, number] 각 자리에 들어갈 놈들이 아니다 라고 경고 뿜어냄.

x = ["hello", 39, 'world'] // Type '[string, number, string]' is not assignable to type '[string, number]'.
// Source has 3 element(s) but target allows only 2