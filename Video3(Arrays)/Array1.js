let arr = ["apple", "banana", "orange"];
// console.log(arr)

let person = {
  name: "Aak",
  id: "21",
};

let arr2 = ["apple", person, null, 3];
// console.log(arr2)
// console.log(arr2[1].name)

let arr3 = ["apple", "banana", "orange"];
// Add at end of array
arr3.push("cherry");
arr3.push("watermelon");
// console.log(arr3)

// Remove from end of array
arr3.pop();
// console.log(arr3)

// Add at start of array

arr3.unshift("Mango");
arr3.unshift("Blueberry");
// console.log(arr3)

// Remove from start of array

arr3.shift();
// console.log(arr3)

// Looping in Array

let array = [1, 2, 3, 4, 5, 6, 777, 8];
for (let i = 0; i < array.length; i++) {
  // console.log(array[i])
}

let i = 0;
while (i < array.length) {
  // console.log(array[i])

  i++;
}

// Inbuilt Loop Methods

const number = [1, 2, 3, 45, 67, 8];
number.map((item, index, array) => {
//   console.log(item, index, array);
});

const newNums = number.map((item, index, array) => {
  return item +5
});

// console.log(newNums)

const newNums2 = number.filter((item, index, array) => {
    return item >3
  });

// console.log(newNums2)

const newNums3 = number.reduce((prev,item, index, array) => {
    return prev + item
  },100);
// ,100 is the value that sets the initial value to which all value adds
//   console.log(newNums3)



  const newNums4 = number.some((item, index, array) => {
    return item >3
  });
// Returns true if any one condition is true
//   console.log(newNums4)

  
  const newNums5 = number.every((item, index, array) => {
    return item >3
  });
// Returns true if any all condition is true
  console.log(newNums5)


  
  const newNums6 = number.find((item, index, array) => {
    return item >3
  });
// Returns first item that is true
  console.log(newNums6)