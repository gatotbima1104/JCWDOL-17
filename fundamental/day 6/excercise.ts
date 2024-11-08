/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Number
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average

class CStudent {
     name: string;
     email: string;
     age: number;
     score: number

    constructor(n: string, e: string, a: number, s: number){
      this.name = n;
      this.age = a;
      this.email = e;
      this.score = s;
    }
}


class LHA {
  highest: number = 0
  lowest: number = 0
  average: number = 0

  constructor(numbers: number[]){
    
    this.highest = Math.max(...numbers)
    this.lowest = Math.min(...numbers)
    this.average = numbers.reduce((sum, prev) => (sum + prev), 0) / numbers.length
    this.average.toFixed(4)
    
  }

}

const test = new LHA([1,2,3,4,5])

const calculateStudentArr = (student: CStudent[]) =>{
  return {
    score: new LHA(student.map((el) => el.score)),
    age: new LHA(student.map((el)=> el.age))
  }
}

const student1 = new CStudent('goku', 'goku@gmail.com', 20, 100)
const student2 = new CStudent('goku', 'goku@gmail.com', 19, 88)
const student3 = new CStudent('goku', 'goku@gmail.com', 18, 77)

console.log(calculateStudentArr([student1, student2, student3]))
  

