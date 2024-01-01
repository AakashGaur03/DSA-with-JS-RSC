// Q4 Two Sum
// Given an array of integers nums and integer target
// return indices of the two number such that they add up to target

// Input nums = [2,7,11,15], target = 9
// Output : [0,1] (Because nums[0] + nums[1]===9 , we return [0,1])

// Input: nums [3,2,4], target = 6
// Output:[1,2]

// Approach 1

const TwoSums1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return false;
};

console.log(TwoSums1([2, 3, 4, 5], 8));

// Approach 2

const TwoSums = (nums, target) => {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    }
    else{
        // Its storing the value in object
        obj[n]=i
    }
  }
};

console.log(TwoSums([1,2,3,4,5,6,7,8],9))
