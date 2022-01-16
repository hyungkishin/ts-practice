interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class Cart_v3 {
  // 생성자
  constructor(public user: User, private store: object = {}) { }
  // 함수 
  put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}
// 인스턴스 (객체) <-> Cart Class 
class PromotionCart extends Cart_v3 {
  addPromotion() {
    this.user
  }
}
const cartJohn3 = new Cart_v3({ name: 'john' });
// cartJohn3.user
const promj3 = new PromotionCart({ name: 'jay' });
// promj3.user