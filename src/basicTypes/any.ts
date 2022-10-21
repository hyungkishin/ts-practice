function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d // 이런 것 도 가능 . 가급적 any 는 쓰지말자.

function leakingAny(obj: any) {
    const a: number = obj.num; // any 에서 누수를 막는법 
    const b = a + 1;
    return b;
}

const c = leakingAny({ num: '1' })
c.indexOf("0") // compile Level 에서 에러를 발생
// console.log(c);