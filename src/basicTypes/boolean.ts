let isDone: boolean = false;

isDone = true;
console.log(typeof isDone);

let isOk: Boolean = true;

/* 이 경우는 true 값을 가진 Boolean 객체가 생성되면서 
 primitive type 인 isNotOk 변수에 할당하려고 하니 문제가 생긴다.
'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible
*/
let isNotOk: boolean = new Boolean(true);