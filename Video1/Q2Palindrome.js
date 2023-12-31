// Q1 Palindrome number
// An integer is a palindrome when it reads the same forward and backward

// Input x = 121       ---->>> Output:True
// Input x =  35      ---->>> Output:False



// const x=121222
// console.log(x.toString())
// console.log(x.toString().split(''))
// console.log(x.toString().split('').reverse())
// console.log(x.toString().split('').reverse().join(''))

const ispandrome =(x)=>{
    // if(x<0) return false
    // return x===+x.toString().split('').reverse().join('')
    return x< 0 ? false : (x===+x.toString().split('').reverse().join(''))
}

console.log(ispandrome(2112))