/*
토마토 7000 원
사과 10000 원
오랜지 15000 원
*/

export let totalPrice: number = 0;

/**
 * 
// 세 개 과일을 모두 더하는 식
totalPrice += 7000;
totalPrice += 15000;
totalPrice += 10000;

// 3만원을 더하는 코드
totalPrice += 30000; // 어떤과일이 몇박스인지 ? 불분명한 코드
totalPrice += 8000; // 토마토를 더하려다 8000 원을 더해버리는 실수 혹은 0이 하나 더붙는 큰 실수로 이뤄질 수 있다.
 */

/**
 * 실수를 줄이고 재사용성을 높힌 코드
 * totalPrice 라는 전역상태를 변경하는 부수효과를 일으키는
 * sub 루틴. 프로시저에 해당하게 된다.
 * 그러나 임의로 값을 더하는게 아닌 
 * 과일별로 정해진 값들을 더하기 떄문에 실수를 줄일 수 있다.
 * 명령형 프로그래밍으로 작성해보자. 
 * * 명령형 프로그래밍 : 컴퓨터가 계산하는 절차를 명령을 내리는 방식으로 프로그래밍 하는것.
 */

export function addTomato() {
    totalPrice += 7000;
}
export function addOrange() {
    totalPrice += 15000;
}

export function addApple() {
    totalPrice += 10000;
}

export function list1() {
    // 토마토, 오렌지, 사과 한 상자
    addTomato()
    addOrange()
    addApple()
}

export function list2() {
    // 토마토 2상자
    addTomato()
    addTomato()
}

export function list3() {
    // 오랜지 100상자 addOrange 100번 X 매번 같은일을 해주는 친구가 필요.
    for (let i = 0; i < 100; i++) {
        addOrange()
    }
}

export function main() {
    list3();
}