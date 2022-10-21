### TS

- Class 는 ES6 에 새로 등장하였다.
- 이전에는 함수를 통해 새로운 타입을 만들었다면,
- 클래스가 나온 이후에는 class 를 통해서 특정타입의 객체를 생성할수 있다.
- 함수에 new 키워드로 객체를 생성하는 방식도 되지만,
- 클래스의 new 키워드로 객체를 생성하는 방식도 된다.

### 접근 제한자.

- private, public, protected 이 있다.
- private => class 내부에서만 접근이 가능 (인스턴스에선 접근이 불가능)
- default 는 public ( 아무것도 명시 해 주지 않았을때.)

```
private 랑 protected 차이.
es6 에서도 상속을 할 수가 있는데,
하위타입 extends 상위타입 시에

하위타입 {
    this.(private 은 접근 불가능 protected 는 접근 가능)
}
```

- 접근 제한자는 기존 ES6 에서 TypeScript 에 추가된 기능이다.

### 생성자 매개변수에서 속성정의 + 할당까지.

```js
class Cart_v3 {
    // 생성자 Level 에서 매개변수와 정의와 접근제한자 를 함께 사용하면,
    // 해당 클래스의 속성이 정의됨과 동시에 생성자 인자로 전달까지 할수 있게 된다.
  constructor(public user: User, private store: object = {}) {}
  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}
class PromotionCart extends Cart_v3 {
  addPromotion() {
    this.user
  }
}

const cartJohn3 = new Cart_v3({ name: 'john' });
cartJohn3.user // <- 인스턴스 에서도 사용 가능
const prom3 = new PromotionCart({name: 'mymy'})
prom3.user // 상속받은 하위 타입에서도 사용 가능
```

### Basic Types update

```
boolean
undefined
string
primited Type
null
any
array

```

부수효과 종류
```
외부의 상태를 변경하거나,
화면이나 file 의 데이터를 쓰는등의 io 작업등이 부수효과 이다.

error 나 exception 을 발생시켜 실행 흐름을 바꾸는것도 부수효과의 일종이다.
```

```
함수를 합성한다는것은
함수의 공역이 다른함수의 정의역과 일치하는 경우 
두함수를 이어 하나의 함수로 만드는 연산이다.

정의역과 공역은 프로그래밍 언어에서 타입에 해당한다.

함수를 잇는다는것 -> 

```