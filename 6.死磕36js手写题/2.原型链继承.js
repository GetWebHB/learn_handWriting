// 原型链继承的本质： 子类的实例对象的显示原型指向父类的prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(`hi i am a ${this.name}`);
};

function Stu(sno) {
  // this.name = name;
  this.sno = sno;
}

Stu.prototype = new Person("ice");

const stu = new Stu("32");
stu.say();

console.log(stu);
