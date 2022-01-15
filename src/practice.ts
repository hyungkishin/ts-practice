class Cart {
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

const cartJohn = new Cart({name: 'john'});
const cartJay = new Cart({name: 'jay'});