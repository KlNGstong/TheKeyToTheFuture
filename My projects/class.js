console.log('Первый пример\n{');

const Point = class {
    constructor(x,y){
        this.x = x
        this.y = y
    }
}
const serializable = Category => class extends Category{
    toString() {
        return `[${this.x}, ${this.y}]`
    }
}
const movable = Category => class extends Category {
    move(x, y){
        this.x += x
        this.y += y
    }
}
const PointEx = serializable(movable(Point))
const point1 = new PointEx(10,20)
point1.move(5,-2)
console.log(point1.toString());
const { x, y} = point1
console.log(x, y);
console.log('}\nВторой пример\n{');


var Animal = {
    speak() {
      console.log(this.name + ' издает звук.');
    }
  };
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' лает.');
    }
  }
  Object.setPrototypeOf(Dog.prototype, Animal);
  
  var d = new Dog('Митци');
  d.speak();

  class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' рычит.');
  }
}



console.log('}\n Третий пример\n{');

class Bob { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(this.name + ' издает звук.');
    }
  }
  
  class Ho extends Bob {
    speak() {
      super.speak();
      console.log(this.name + ' рычит.');
    }
  }
  console.log('}');
  