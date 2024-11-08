/** @format **/

//1
// Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 2 }
// ○ Output: true
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false

interface IAnyObj {
  [key: string]: any;
}

// const objEqual = (obj1: Ia, obj2: Ia) =>
//     console.log(
//         obj1.a == obj2.a ? true : false
//     )
// objEqual({a : 2}, {a : "hello"})

// const objEqual2 = (obj1: Record<string, any>, obj2: Record<string, any>) => {
//   const obj_1 = Object.keys(obj1);
//   for (const element of obj_1) {
//     console.log(obj1[element] == obj2[element] ? true : false);
//   }
// };

// objEqual2({ a: 2 }, { a: 2 });

// mas jordan
const checkEqual = (a: IAnyObj, b: IAnyObj) => {
    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)

    if(aKeys.length != bKeys.length) return false
    for (const key in a) {
      if(a[key] !== b[key]) return false
    }
    
    return true
}

console.log("from equal",checkEqual({ a: "2" }, { a: 2 }))


//2 Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

// mas jordan
const getIntersect = (a: IAnyObj, b: IAnyObj) => {
  const c: IAnyObj = {}
  for (const key in a) {
    if(a[key] == b[key]) c[key] = a[key]
  }

  return c

}

console.log("from intersect", getIntersect({ a: 1, b: 2 }, { a: 1, c: 3 }))


//3 Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: "Student 1", email : "student1@mail.com" },
// { name: "Student 2", email : "student2@mail.com" }
// ]
// Array2 → [
// { name: "Student 1", email : "student1@mail.com" },
// { name: "Student 3", email : "student3@mail.com" }
// ]
// ● Result :

// ArrayResult → [
// { name: "Student 1", email : "student1@mail.com" },
// { name: "Student 2", email : "student2@mail.com" },
// { name: "Student 3", email : "student3@mail.com" }

// interface IStudent {
//   name: string;
//   email: string;
// } 

// const mergeObj = (arr1: IStudent[], arr2: IStudent[]) => 
//     console.log(
//         arr1
//             .concat(arr2)
//             .filter(
//                 (el, i, self) => 
//                     i === self.findIndex((l) => l.name == el.name
//                     // console.log(self.findIndex((e)=>e.email == el.email ))
//                 )
//             )
//     );
    
// mergeObj(
//   [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 2", email: "student2@mail.com" },
//   ],
//   [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 3", email: "student3@mail.com" },
//   ]
// );

// mas jordan

class Student {
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name = name,
    this.email = email
  }
}

const mergeStudent = (student1: Student[], student2: Student[]) => {
    const nonStudentIn_1: Student[] = student2.filter((s2) => {
      const index = student1.findIndex((s1) =>
        s1.name == s2.name && s1.email == s1.email
      )

      if(index == -1) return true
      return false
    })

    return student1.concat(nonStudentIn_1)
}


console.log(
  mergeStudent(
    [
      new Student("student 1", "s1@mail.com"),
      new Student("student 2", "s2@mail.com"),
    ],
    [
      new Student("student 1", "s1@mail.com"),
      new Student("student 2", "s2@mail.com"),
      new Student("student 3", "s3@mail.com"),
    ]
  )
)

//4
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]


// const switchvalues = (student: object[]) => {
//   return student.map((el) => {
//     let switched: Record<string | number, string> = {}
    
//     Object.entries(el).forEach(([key, value]) => {
//       switched[value as string | number] = key;
//     }) 
    
//     return switched
//   })
// }

// console.log(switchvalues([{ name: 'David', age: 20 }]))

// mas jordan
// const switchKeys = (arr: IAnyObj[]) => {  //[{ name: 'David', age: 20 }]
//   const objEntries = arr.map((el) => Object.entries(el)) //[ [ [ 'name', 'David' ], [ 'age', 20 ] ] ]
//   const swap = objEntries.map((el)=> {  //[ [ 'name', 'David' ], [ 'age', 20 ] ]
//     return el.map((el2) => {   //[ 'name', 'David' ] [ 'age', 20 ]
//       return [el2[1], el2[0]]  //[ 'David', 'name' ], [ 20, 'age' ]
//     })
//   })

//   return swap.map((entries) => { //[ [ 'David', 'name' ], [ 20, 'age' ] ]
//     return Object.fromEntries(entries) //{ '20': 'age', David: 'name' }
//   })
// }

// console.log(switchKeys([{ name: 'David', age: 20 }]))


//5
// const faktorialNumber = (number: number) => {

//   let result: number = 1

//   if(number >= 1) {
//     // console.log(number)
//     result = number * faktorialNumber(number - 1)
//   }

//   return result
// }

// console.log(faktorialNumber(5))

//6
class CPlayer {
  private name: string;
  private health: number = 100
  private power: number = 10  

  constructor(n: string){
    this.name = n
  }

  damage(power: number){
    if(this.health > this.power) this.health -= power
    else this.health=0
  }

  useItem(item: {health: number, power: number}){
    this.health += item.health
    this.power += item.power
  }

  get h(){
    return this.health
  }

  get p(){
    return this.power
  }

  showStatus(){
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    )
  }

  
}

class CShootingGame {
  playerA : CPlayer;
  playerB : CPlayer;

  constructor(player1: CPlayer, player2: CPlayer){
    this.playerA = player1
    this.playerB = player2
  }

  private random(){
    return Math.floor(Math.random() * 2) //0 - 0.9 => 0 - 1
  }

  private getRandomItem(): {
    health: number;
    power: number;
  }{
    return this.random() == 1 ? {health: 0, power: 10} : {health: 10, power: 0}
  }


  start(){
    while(this.playerA.h > 0 && this.playerB.h > 0){
      this.playerA.showStatus()
      this.playerB.showStatus()
      this.playerA.useItem(this.getRandomItem())
      this.playerB.useItem(this.getRandomItem())
      if(this.random() == 0){
        this.playerA.damage(this.playerB.p)
        if(this.playerA.h == 0) break
        this.playerB.damage(this.playerA.p)
      }else{
        this.playerB.damage(this.playerA.p)
        if(this.playerB.h == 0) break
        this.playerA.damage(this.playerB.p)
      }
    }

    this.playerA.showStatus()
    this.playerB.showStatus()
  }
}

const p1 = new CPlayer('gatot')
const p2 = new CPlayer('goku')

const game = new CShootingGame(p1, p2)
game.start()




