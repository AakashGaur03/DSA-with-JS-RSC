// Q3 Remove Duplicates from sorted Array
// Given an integer array nums sorted in non-descending order, remove the duplicates in-place(means in same array can't create a new array) such that each unique element apprears only once . The relative order of the element should be kept the same. Then return the number of unique elements in nums.


// Input : [1,1,2] ----->>>> Output:2,[1,2,_]
// Input : [0,0,1,1,2,2,3,3,4] ----->>>> Output:5,[0,1,2,3,4,_,_,_,_]

// Approach 1 with inbuilt functions

const removeDuplicates1=(nums)=>{
    if(nums.length===0) return 0
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i]===nums[i+1])
        {
            nums.splice(i+1,1)      // remove 1 element and i-- to check again
            i--
        }        
    }
    console.log(nums)
    return nums.length
}
// console.log(removeDuplicates1([0,0,1,1,2,2,3,3,4]))
// Time Complexity O(n)

// Approach 2 without inbuilt Function


const removeDuplicates = (nums)=>{
    if(nums.length===0) return 0
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j])
        {
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
}

console.log(removeDuplicates([0,0,1,1,2,2,3,3,4]))
console.log(removeDuplicates([0,0,1]))
