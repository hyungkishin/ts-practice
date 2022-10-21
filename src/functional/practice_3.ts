/**
 * 함수 합성
 * 수학에서의 함수 합성
 * 한 함수의 공역이 다른 함수의 정의역과 일치하는 경우 두 함수를 이어 하나의 함수로
 * 만드는 연산이다.
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

/**
 * @param name 
 * @returns // 각각의 과일의 값만을 찾아주는 순수함수 ( 사상 mapping )
 * 수학에서의 함수는 어떤 키에 대응하는 매핑
 * 파이썬 -> 딕트 
 * 자바 -> 맵
 * typescript -> 레코드 등으로 불리고
 * 정의역에 값에 치역을 대입시키는 방법과 같다.
 */

function getPrice(name: string): number | undefined { // 문자를 입력 받으면 숫자를 리턴 + 입력외에 다른 문자열을 입력 받으면 undefined 를 리턴 
    if (name === "tomato") {
        return 7000; // 치역 
    } else if (name === 'orange') {
        return 15000; // 치역
    } else if (name === "apple") {
        return 10000; // 치역 
    }
}

// V1
//  export const isExpensive = (price: number) => {
//     return price > 10000;
//  }

// V2
export const isExpensive = (price: number | undefined) => {
    if (price === undefined) return false
    return price > 10000;
}

// V1
//  export const main = () => {
//     const price = getPrice("tomato");
//     // getPrice 타입에 속하는 값중 isExpensive 인자의 price 부분집합에 속하는 반면 undefined 는 number 에 속하지 않음.
//     return isExpensive(price)  // 그래서 합성이 불가능함
//  }

export const isExpensivePrice = (price: number): boolean => {
    return isExpensive(getPrice("tomato"))
}
// V2
export const main = () => {
    // 함수를 잇는다는것은 어떤 함수의 출력을 다른함수의 입력으로 넘겨주는것을 의미하죠.
    // 타입 스크립트가 아니였다면, 런타임 에러로 이어졌을것이고, 디버깅도 까다로워 졌을것이다.
    // "매번" 일어나는 에러가 아니기 때문에.
    return isExpensive(getPrice("tomato"))
} 
