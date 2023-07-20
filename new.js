class person{
    constructor(fistName,lastName,salary){
      this.fistName = fistName,
      this.lastName = lastName,
      this.salary= salary
    }
}
const hero  = new person('hero','alam',2000)
console.log(hero)

function name(fistName,lastName,salary){
    this.fistName = fistName;
    this.lastName = lastName;
    this.salary= salary;
}
console.log(new name('farhad','uddin',2000))