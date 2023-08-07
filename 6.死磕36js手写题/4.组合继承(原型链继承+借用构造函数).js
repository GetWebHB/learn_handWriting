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

Stu.prototype = new Person();
Stu.prototype.constructor = Stu;

const s = new Stu("ice", 23, 1024);
s.say();
console.log(s);
