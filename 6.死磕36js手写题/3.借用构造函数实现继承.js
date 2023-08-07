// 就是在子类函数中，主动的调用父类构造函数（call形式）
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(`hi i am a ${this.name}`);
};

function Stu(name, age, sno) {
  Person.call(this, name, age);
  this.sno = sno;
}

Stu.prototype = new Person();

const stu = new Stu("ice", 20, '23');
stu.say();

console.log(stu);
