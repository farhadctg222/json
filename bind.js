

const student = {
   fistName: 'farhad',
   lastName: 'uddin',
   adrees: 'chattogram',
   edu: 'S.S.C',
   salary: 25000,
   fullName: function(){
   
    console.log( this.fistName,this.lastName)
   },
   charchBill(amount){
    console.log(this)
    this.salary = this.salary-amount
    return this.salary
   }

}
// student.charchBill(200)
// console.log(student.salary)

const saluddn = {
    fistName: 'sala',
    lastName: 'uddn',
    salary: 10000
}

const masud = {
    fistName: 'masud',
    lastName: 'uddin',
    salary: 50000
}
// student.charchBill()
const fnd =student.charchBill.bind(saluddn)
fnd(2154)
fnd(250)
fnd(530)
// console.log(saluddn.salary)
// console.log(student.salary)

const masudSalary = student.charchBill.bind(masud)
masudSalary(20)
masudSalary(3840)
console.log(masudSalary(40))





