//1
// Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 2 }
// ○ Output: true
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false

interface Ia {
  a: any;
}

// const objEqual = (obj1: Ia, obj2: Ia) =>
//     console.log(
//         obj1.a == obj2.a ? true : false
//     )
// objEqual({a : 2}, {a : "hello"})

const objEqual2 = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  const obj_1 = Object.keys(obj1);
  for (const element of obj_1) {
    console.log(obj1[element] == obj2[element] ? true : false);
  }
};

objEqual2({ a: 2 }, { a: 2 });

//2 Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }



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

interface IStudent {
  name: string;
  email: string;
}

const mergeObj = (arr1: IStudent[], arr2: IStudent[]) => 
    console.log(
        arr1
            .concat(arr2)
            .filter(
                (el, i, self) => 
                    i === self.findIndex((l) => l.name == el.name
                    // console.log(self.findIndex((e)=>e.email == el.email ))
                )
            )
    );

    
mergeObj(
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ],
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ]
);


//4
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]


const switchvalues = (student: object[]) => {
  return student.map((el) => {
    let switched: Record<string | number, string> = {}
    
    Object.entries(el).forEach(([key, value]) => {
      switched[value as string | number] = key;
    }) 
    
    return switched
  })
  
}

console.log(switchvalues([{ name: 'David', age: 20 }]))

//5
const faktorialNumber = (number: number) => {

  let result: number = 1

  if(number >= 1) {
    // console.log(number)
    result = number * faktorialNumber(number - 1)
  }

  return result
}

console.log(faktorialNumber(5))

//6
class Player {
  name: string;
  health: number = 100
  power: number = 10  

  constructor(n: string, h:number, p: number){
    this.name = n
    this.health = h
    this.power = p
  }

  randomItems(){
    const randomChoice = Math.random()  
    if(randomChoice < 0.5){
      this.health += 10
    }else{
      this.power += 10
    }
  }

  hit(power: number){

  }

  useItem(item: ()=> number){
    this.randomItems()
  }

  showStatus(){
    `Player `
  }

  shooting(){
    this.randomItems()  
  }
}

class ShootingGame {
  playerA : Player | undefined;
  playerB : Player | undefined

  constructor(){
    
  }

  start(){

  }
}




