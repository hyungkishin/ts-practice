class Cart_v1 {
  constructor(user) {
    this.user = user;
    this.store = {};
  }
  put(id, project) {
    this.store[id] = product;
  }
  get(id) {
    return this.store[id];
  }
}

const cartJohn1 = new Cart_v1({ name: 'john' });
const cartJay1 = new Cart_v1({ name: 'jay' });