// Time Complexity


const number =(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if(i===3) return arr[i]        
    }
}

const nums=[1,2,3,4,5,6,7,8]

console.time("Number")
console.log(number(nums))
console.timeEnd("Number")     //   Time Taken 6.009ms

const number2=(arr)=>{
    return arr[3]
}

console.time("Number")
console.log(number2(nums))
console.timeEnd("Number")     //   Time Taken 0.112ms


// Same functionality but Second is Fast because in first it is looping through the numbers there is a for loop

// Time Complexity is How many task/Operations is performed by the function or the program
// In 1st the loop ran 4 times so 4 task                O(n)
// In 2nd it directly return 4th value  so 1 task       O(1)



const someOperation=(n)=>{
    return (n*(n+6)/2)
}

console.log(someOperation(6))

// Here it is performing 3 operations that is * , + and / and it doesnt depends upon the input So    O(1)



const GoingupandDown=(n)=>{
    console.log("Going ->")
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log("At end Going <-")
    for (let j = n-1; j >= 0; j--) {
        console.log(j)
    }

    console.log("At Start")

}


GoingupandDown(5)

// Here 
// console.log("Going ->")                  1 Operation
// console.log("At end Going <-")           1 Operation
// console.log("At Start")                  1 Operation
// for (let i = 0; i < n; i++) {            n Operation
//     console.log(i)
// }
// for (let j = n-1; j >= 0; j--) {         n Operation
//     console.log(j)
// }
// Total Operation performed 2n+3     It is Considered as O(n) Time Complexity



const printBoth=(n)=>{
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i,j)            
        }        
    }
}

printBoth(5)

// It ran 5 X 5 Times 
// It has n*n Operations
// Time Complexity : O(n^2)