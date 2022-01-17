/*
토마토 7000 원
사과 10000 원
오랜지 15000 원
*/

/**
 * 각가의 과일이 얼마인지 나타내는 방식으로 + 순수함수 + 선언적 프로그래밍
 */
export let totalPrice: number = 0;

export function priceOfTomato() {
    return totalPrice += 7000;
}
export function priceOfOrange() {
    return totalPrice += 15000;
}

export function priceOfApple() {
    return totalPrice += 10000;
}

export function list1() {
    // 토마토, 오렌지, 사과 한 상자 ( 계산 결과를 리턴해준다. )
    return priceOfTomato() + priceOfOrange() + priceOfApple()
}

export function list2() {
    // 토마토 2상자 ( 토마토 가격 + 토마토 가격)
    return priceOfTomato() + priceOfTomato()
}

export function list3() {
    // 오랜지 100상자 ( 오랜지 가격 * 100 )
    return priceOfOrange() * 100
}

export function main() {
    return list2();
}


/**
 * @param name 
 * @returns // 각각의 과일의 값만을 찾아주는 순수함수 ( 사상 mapping )
 * 수학에서의 함수는 어떤 키에 대응하는 매핑
 * 파이썬 -> 딕트 
 * 자바 -> 맵
 * typescript -> 레코드 등으로 불리고
 * 정의역에 값에 치역을 대입시키는 방법과 같다.
 */

 function getPrice(name: string) {
    if (name === "tomato") {
        return 7000;
    } else if (name === 'orange') {
        return 15000;
    } else if (name === "apple") {
        return 10000;
    }
}

// refactoring -> 그러나 사람이 손으로 만들어서 사용한다는것에 . 모든 숫자 모든 문자에 대해서 대응한다는것에 비효율 적이다... 라고 생각할 수 도 있겠다.
const priceOfFruit = {
    tomato: 7000,
    orange: 15000,
    apple: 10000,
}

// 어떤 문자열이 짝수 인지 홀수인지를 판별하는 테이블 
const isEven = {
    tomato: true,
    orange: true,
    apple: false,
}

// 함수화
const isEvenFn = (str: string) => str.length % 2 === 0;
