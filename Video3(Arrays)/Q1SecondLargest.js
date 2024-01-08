// Q1 Second Largest Number in an array
// Given an array of size N , print Second largest distinct element from array
// Input : [1,23,43,4,66,7,88,4]

const secondMaxBrute1 = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[arr.length - 2];
};

// secondMaxBrute1([1,23,43,4,66,7,88,4])
// console.log(secondMaxBrute1([1,23,43,4,66,7,88,4]))

// But here Problem is if array is
// Input : [1,44,2,66,66]
// So now 66 ,66 will be twice and second last element will also be 66 only that is max
// And similary number can repeat more than twice also so not correct approach

// Now we we create a set beacuse set doesnt contain multiple values and then we will convert that set into Array again by Array.from() and now we can access second largest value
const secondLargest = (arr) => {
  if (arr.length <= 0) return -1;
  else if (arr.length === 1) return arr[0];

  const uniqueArr = Array.from(new Set(arr));  // Time Complexity is O(n)
  uniqueArr.sort((a, b) => b - a);     // Time Complexity is O(nlogn)
  console.log(uniqueArr);
  return arr[1];
};

// secondLargest([1,44,2,66,66])
// console.log(secondLargest([1,44,2,66,66]))
// console.log(secondLargest([2]))
// console.log(secondLargest([2,5]))
// console.log(secondLargest([]))

const optimizedSecondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {        // Time Complexity is O(arr.length)   that is O(n)
    if(arr[i]>largest)
    {
        secondLargest=largest
        largest=arr[i]
    }else if(arr[i]!= largest && arr[i] > secondLargest)
    {
        secondLargest=arr[i]
    }
  }
  return secondLargest
};
optimizedSecondLargest([4,23,32,33,45,1]);
console.log(optimizedSecondLargest([4,23,32,33,45,1]))