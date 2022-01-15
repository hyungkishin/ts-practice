interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class Cart_v2 {
  // 속성
  user: User;
  store: object;
  // 생성자
  constructor(user) {
    this.user = user;
    this.store = {};
  }
  // 함수 
  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}
// 인스턴스 (객체) <-> Cart Class 
const cartJohn2 = new Cart_v2({ name: 'john' });
const cartJay2 = new Cart_v2({ name: 'jay' });