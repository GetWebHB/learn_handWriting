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

// 本质：创建了一个新的对象，并且这个对象的[[prototype]]指向了父类的prototype
Stu.prototype = Object.create(Person.prototype);

const s = new Stu("name", 20, 1010);
s.say();
