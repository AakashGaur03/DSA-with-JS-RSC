// Spread Operator

const nums1=[1,2,3]
const nums2=[4,52,543]
const nums3=[5,8,53]

const finalNums=[nums1,nums2]
// console.log(finalNums)
const finalNums2=[...nums1,...nums2]
// console.log(finalNums2)

function sum(...numbers)
{
    return numbers
}

// console.log(sum(nums1,nums2))
// console.log(sum(...nums1,...nums2))
// console.log(sum(...nums1,...nums2,45,"AA"))

const newnums=nums1.concat(nums2)
const newnums3=nums1.concat(nums2,nums3)
// console.log(newnums)
// console.log(newnums3)

let arr=["apple","banana","orange","mango"]
const sliceArr = arr.slice(0,2)
const sliceArr2 = arr.slice(-1)
const sliceArr3 = arr.slice(-3)
// console.log(sliceArr)
// console.log(sliceArr2)
// console.log(sliceArr3)

arr.splice(1,3,"kiwi")
// console.log(arr)
arr=["apple","banana","orange","mango"]
arr.splice(1,2,"watermelon")
// console.log(arr)


const dummyArr = [1,2,3,4,5]
// dummyArr.fill(0)
// console.log(dummyArr)
// dummyArr.fill(0,2)
// console.log(dummyArr)
// dummyArr.fill(3,3)
// console.log(dummyArr)

const index = dummyArr.findIndex((item)=> item===3)
console.log(index)


const flatExample = [1,2,3,[4,56,75] , [34,6,345,3,[3,4,5,33,2]],22,78,76,3,2]

const flattedArr = flatExample.flat()
// console.log(flattedArr)
const flattedArr2 = flatExample.flat().flat()
// console.log(flattedArr2)
// const flattedArr3 = flatExample.flat().flat().flat()
// console.log(flattedArr3)


const revarr=[1,2,3,4,5,6,7]
// console.log(revarr)
revarr.reverse()
// console.log(revarr)

const sortedArrLetter = ["a","d","g","c","b"]
sortedArrLetter.sort()
console.log(sortedArrLetter)

const sortedArrNum = [10,5,6,3,34,23,65,22]
sortedArrNum.sort((a,b) => a-b)             // Ascending
console.log(sortedArrNum)
const sortedArrNum2 = [10,5,6,3,34,23,65,22]
sortedArrNum2.sort((a,b) => b-a)            // Descending
console.log(sortedArrNum2)