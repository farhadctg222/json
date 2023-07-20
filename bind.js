

const student = {
   fistName: 'farhad',
   lastName: 'uddin',
   adrees: 'chattogram',
   edu: 'S.S.C',
   salary: 25000,
   
   charchBill(amount){
    
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
student.charchBill()
const fnd =student.charchBill.bind(saluddn)
fnd(2154)
fnd(250)
fnd(530)
console.log(saluddn.salary)
console.log(student.salary)

const masudSalary = student.charchBill.bind(masud)
masudSalary(20)
masudSalary(3840)
console.log(masudSalary(40))

student.charchBill.call(masud,300)
student.charchBill.call(masud,2100)

console.log(masud.salary)
console.log(masud)


student.charchBill.apply(masud,[300])
console.log(masud,masud.salary)

