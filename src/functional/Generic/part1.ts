// 숫자를 그대로 돌려주는 함수 
const idNumber = (n: number) => {
    return n
}
// 문자열을 그대로 돌려주는 함수
const idString = (n: string) => {
    return n
}

// boolean 값을 그대로 돌려주는 함수
const idBoolean = (n: boolean) => {
    return n
}
// 어떤 타입의 값이라도 그대로 돌려주는 함수

const id = <T>(x: T) => {
    return x
}