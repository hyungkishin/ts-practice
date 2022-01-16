"use strict";
class Cart_v2 {
    // 생성자
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    // 함수 
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
// 인스턴스 (객체) <-> Cart Class 
const cartJohn2 = new Cart_v2({ name: 'john' });
const cartJay2 = new Cart_v2({ name: 'jay' });
