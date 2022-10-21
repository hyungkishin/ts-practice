const person1 = { name: 'Mark', age: 19 };
// person1 is not "object" type
const person2 = Object.create({ name: 'Mark', age: 39 });
// create by Object.create

let objs: object = {};
objs = { name: 'Mark' };
objs = [{ name: 'Mark' }];
objs = 39; // error 
objs = true; // error 
objs = 100n; // error 
objs = Symbol(); // error 
objs = null; // error 
objs = undefined; // error 


declare function create(o: object | null): void;

create({ prop: 0 });
create(null);
create(42);
create("string");
create(100n);
create(Symbol());
create(null);
create(undefined);