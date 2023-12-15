// dgls 在组合式继承的基础上，扩展封装函数 组合继承会调用两次父类
// 1. 实例化父类上
// 2. 借用父类构造函数上

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(`hi, i am ${this.name}`);
};

function Stu(name, age, sno) {
  Person.call(this, name, age);
  this.sno = sno;
}

function inherit(Supper, Sub) {
  const parent = object(Supper.prototype);

  Sub.prototype = parent;
  Sub.prototype.constructor = Sub;
}

// 实现stu类继承自person类
inherit(Person, Stu);

const s = new Stu("ic111e", 20, 1010);
s.say();
