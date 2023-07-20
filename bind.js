

const student = {
   fistName: 'farhad',
   lastName: 'uddin',
   adrees: 'chattogram',
   edu: 'S.S.C',
   salary: 5000,
   fullName: function(){
    this.fistName
    this.lastName
    console.log(this.fullName)
   },
   charchBill(amount){
    this.salary = amount - this.salary
    return amount
   }

}
student.charchBill(200)
console.log(student.charchBill())


