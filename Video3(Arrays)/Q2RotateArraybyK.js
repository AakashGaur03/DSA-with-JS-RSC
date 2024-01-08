// Q2 Roate array by K
// Given an integer array nums , rotate the array to the right by K steps,
// where K is non negative number.

// Input Nums:[1,2,3,4,5,6,7], K=3 , ------->>>>> Output : [5,6,7,1,2,3,4]
// Input Nums:[-1,-100,3,99], K=2 , ------->>>>> Output : [3,99,-1,-100]

//  Nums:[1,2,3,4,5,6,7], K=1 ---->>> [7,1,2,3,4,5,6]
//  Nums:[1,2,3,4,5,6,7], K=2 ---->>> [6,7,1,2,3,4,5]
//  Nums:[1,2,3,4,5,6,7], K=3 ---->>> [5,6,7,1,2,3,4]

// Approach 1 With inbuilt JS functions
const rotatedArr = (nums, k) => {
  let size = nums.length;

  if (k > size) {
    k = k % size; // let k=10 and size=8 so k=10%8 remider =2 then k=2
  }

  const rotated = nums.splice(size - k, size); // 8-3=5 ---> [5,6,7]           // Time Complexity O(n)
  // console.log(rotated)
  // console.log(nums)
  nums.unshift(...rotated); // Time Complexity O(n)
  return nums; // Total Time Complexity O(n)+O(n) = O(2n)=> o(n)
};
console.log(rotatedArr([1, 2, 3, 4, 5, 6, 7], 3));








const reverse = (nums, left, right) => {
    while (left < right) {
      const temp = nums[left];
      nums[left++] = nums[right]; // As ++ and -- are post operator they
      nums[right--] = temp; // will updated after execution of line
    }
  };


const optimizedReverse = (nums,k) =>{
    let size = nums.length;

    if (k > size) {
      k = k % size; // let k=10 and size=8 so k=10%8 remider =2 then k=2
    }

    // [1,2,3,4,5,6,7]
    // 1) Reverse All [7,6,5,4,3,2,1]
    // 2) Reverse K elements [5,6,7,4,3,2,1]
    // 3) Reverse rest [5,6,7,1,2,3,4]

    reverse(nums,0,nums.length-1)       // Time Complexity O(n)
    reverse(nums,0,k-1)                 // Time Complexity O(k)
    reverse(nums,k,nums.length-1)       // Time Complexity O(n-k)

    return nums                         // Total Time Complexity O(n)

}
console.log(optimizedReverse([-1,-100,3,99],2))
console.log(optimizedReverse([1,2,3,4,5,6,7],3))

