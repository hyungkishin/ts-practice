"use strict";
function returnAny(message) {
  console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d; // 이런 것 도 가능 . 가급적 any 는 쓰지말자.
function leakingAny(obj) {
  const a = obj.num;
  const b = a + 1;
  return b;
}
const c = leakingAny({ num: "1" });
c.indexOf("0");
