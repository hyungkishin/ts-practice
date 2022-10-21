"use strict";
/*
토마토 7000 원
사과 10000 원
오랜지 15000 원
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.list3 = exports.list2 = exports.list1 = exports.priceOfApple = exports.priceOfOrange = exports.priceOfTomato = exports.totalPrice = void 0;
/**
 * 각가의 과일이 얼마인지 나타내는 방식으로 + 순수함수 + 선언적 프로그래밍
 */
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
function main() {
    return list2();
}
exports.main = main;
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
        return 7000;
    }
    else if (name === 'orange') {
        return 15000;
    }
    else if (name === "apple") {
        return 10000;
    }
}
// refactoring -> 그러나 사람이 손으로 만들어서 사용한다는것에 . 모든 숫자 모든 문자에 대해서 대응한다는것에 비효율 적이다... 라고 생각할 수 도 있겠다.
const priceOfFruit = {
    tomato: 7000,
    orange: 15000,
    apple: 10000,
};
// 어떤 문자열이 짝수 인지 홀수인지를 판별하는 테이블 
const isEven = {
    tomato: true,
    orange: true,
    apple: false,
};
// 함수화
const isEvenFn = (str) => str.length % 2 === 0;
