// triangle function param (height => triangle height)
// 01
// 02 03
// 04 05 06
// 07 08 09 10
function triangleNumbers(height:number) {

    let triangles: string = ''
    
    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= i; j++ ){
            if(j <10) {
                triangles += '0' + j  
            }else{
                triangles += j  
            }
            
        }

        triangles += '\n'
    }

    return triangles
}

console.log(triangleNumbers(20))


// function loop the number input 
// replace the multiple 3 with "Fizz"
// replace the multiple 5 with "Buzz"
// replace the multiple 3 and 5 with "FizzBuzz"
// Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
let numbers: number = 15
let fizzBuzzNumbers: (number | string)[] = []
function fizzBuzz(number: number) {
    for(let i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
        fizzBuzzNumbers.push("FizzBuzz")
        }else if(i % 3 == 0) {
            fizzBuzzNumbers.push("Fizz")
        }else if(i % 5 == 0){
            fizzBuzzNumbers.push("Buzz")
        }else{
            fizzBuzzNumbers.push(i)
        }
    }
    return fizzBuzzNumbers
}

console.log(fizzBuzz(numbers))

// calculated Body Massa Index (BMI)
// formula: BMI = weight(kg) / (height(meter))2
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z
function BMI(massa:number, height: number){
    
    let formula = massa / Math.pow((height / 100), 2)
    if(formula < 18.5){
        return "Less weight"
    }else if(formula >= 18.5 && formula <= 24.9){
        return "Ideal"
    }else if(formula >= 25.0 && formula <= 29.9){
        return "Overweight"
    }else if(formula >= 30.0 && formula <= 39.9){
        return "Very Overweight"
    }else{
        return "Obesity"
    }
}

console.log(BMI(40, 174))


// function remove add numbers
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
let arrNumb: number[] = [1,2,3,4,5,6,7,8,9,10]
let arrNonOdd: number[] = []
function removeOddNumbers(number:number[]) {
    for(let i = 0; i < arrNumb.length; i++){
        if(arrNumb[i] % 2 == 0) arrNonOdd.push(arrNumb[i])
    }

    return arrNonOdd
}

console.log(removeOddNumbers(arrNumb))


// function split string, conver to array of words
// Example : “Hello World” → [“Hello”, “World”]
let words: string = 'Hello World'
console.log(words.split(' '))


arrNumb.map((e) => {
    if(e % 2 == 0) return e
})