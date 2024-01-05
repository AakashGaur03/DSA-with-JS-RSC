// Space Complexity
// Space Complexity is the space occupied by the variables ,function or algorithm 


// In JS
// Boolean , number , undefined , null => Constant Space Complexity
// Strings , arrays ,objects => Dynamic Space Complexity

const SumofArr=(arr)=>{
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let score=[22,45,324,233,23]

console.log(SumofArr(score))


// Size of array doesnt matter it is returning only one value    Space Complexity :  O(1)

const MulofArr=(n)=>{
    const array=[]
    for (let i = 0; i < n; i++) {
        array.push(i*69)
    }
    return array
}

console.log(MulofArr(8))

// Size of input matters it is returning result on basis of value    Space Complexity :  O(n)


const createMatrix=(n)=>{
    let matrix=[]
    for (let i = 0; i < n; i++) {
        matrix[i]=[];
        for (let j = 0; j < n; j++) {
            matrix[i][j]=i+j            
        }        
    }
    return matrix
}

const matrix=createMatrix(5)
console.log(matrix)


// Size of input matters it is returning result nXn basis    Space Complexity :  O(n^2)