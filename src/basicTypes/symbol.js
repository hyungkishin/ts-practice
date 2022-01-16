"use strict";
// 프리미티브 타입의 값을 담아서 사용한다.
// 고유하고 수정 불가능한 값으로 만들어준다.
// 그래서 주로 접근을 제어하는데 쓰는 경우가 많습니다.
// 함수로 사용할땐 대문자 Symbol 
// type 으로 사용할땐, 소문자 symbol
console.log(Symbol('foo') === Symbol('foo'));
const sym = Symbol();
const obj = {
    [sym]: "value"
};
obj[sym];
