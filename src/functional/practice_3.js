"use strict";
/**
 * 함수 합성
 * 수학에서의 함수 합성
 * 한 함수의 공역이 다른 함수의 정의역과 일치하는 경우 두 함수를 이어 하나의 함수로
 * 만드는 연산이다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.isExpensivePrice = exports.isExpensive = exports.list3 = exports.list2 = exports.list1 = exports.priceOfApple = exports.priceOfOrange = exports.priceOfTomato = exports.totalPrice = void 0;
exports.totalPrice = 0;
function priceOfTomato() {
    return exports.totalPrice += 7000;
}
exports.priceOfTomato = priceOfTomato;
function priceOfOrange() {
    return exports.totalPrice += 15000;
}
exports.priceOfOrange = priceOfOrange;
function priceOfApple() {
    return exports.totalPrice += 10000;
}
exports.priceOfApple = priceOfApple;
function list1() {
    // 토마토, 오렌지, 사과 한 상자 ( 계산 결과를 리턴해준다. )
    return priceOfTomato() + priceOfOrange() + priceOfApple();
}
exports.list1 = list1;
function list2() {
    // 토마토 2상자 ( 토마토 가격 + 토마토 가격)
    return priceOfTomato() + priceOfTomato();
}
exports.list2 = list2;
function list3() {
    // 오랜지 100상자 ( 오랜지 가격 * 100 )
    return priceOfOrange() * 100;
}
exports.list3 = list3;
/**
 * @param name
 * @returns // 각각의 과일의 값만을 찾아주는 순수함수 ( 사상 mapping )
 * 수학에서의 함수는 어떤 키에 대응하는 매핑
 * 파이썬 -> 딕트
 * 자바 -> 맵
 * typescript -> 레코드 등으로 불리고
 * 정의역에 값에 치역을 대입시키는 방법과 같다.
 */
function getPrice(name) {
    if (name === "tomato") {
        return 7000; // 치역 
    }
    else if (name === 'orange') {
        return 15000; // 치역
    }
    else if (name === "apple") {
        return 10000; // 치역 
    }
}
// V1
//  export const isExpensive = (price: number) => {
//     return price > 10000;
//  }
// V2
const isExpensive = (price) => {
    if (price === undefined)
        return false;
    return price > 10000;
};
exports.isExpensive = isExpensive;
// V1
//  export const main = () => {
//     const price = getPrice("tomato");
//     // getPrice 타입에 속하는 값중 isExpensive 인자의 price 부분집합에 속하는 반면 undefined 는 number 에 속하지 않음.
//     return isExpensive(price)  // 그래서 합성이 불가능함
//  }
const isExpensivePrice = (price) => {
    return (0, exports.isExpensive)(getPrice("tomato"));
};
exports.isExpensivePrice = isExpensivePrice;
// V2
const main = () => {
    // 함수를 잇는다는것은 어떤 함수의 출력을 다른함수의 입력으로 넘겨주는것을 의미하죠.
    // 타입 스크립트가 아니였다면, 런타임 에러로 이어졌을것이고, 디버깅도 까다로워 졌을것이다.
    // "매번" 일어나는 에러가 아니기 때문에.
    return (0, exports.isExpensive)(getPrice("tomato"));
};
exports.main = main;
