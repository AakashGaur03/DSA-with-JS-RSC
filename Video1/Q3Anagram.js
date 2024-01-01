// Q3 Anagram
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase , using all the original letters exactly once

// Input (s="anagram").(t="nagaram")  ----->>>  Output:true
// Input (s="rat").(t="car")  ----->>>  Output:false

// Approach 1
const Anagram1 = (s, t) => {
  // console.log(s.split('').sort().join(""))
  // console.log(t.split('').sort().join(""))
  return s.split("").sort().join("") == t.split("").sort().join("");
};

console.log(Anagram1("anagram", "nagaram"));

const Anagram = (s, t) => {
    if(s.length!==t.length) return false

    let obj1={}
    let obj2={}

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]]=(obj1[s[i]] || 0) + 1
        obj2[t[i]]=(obj2[t[i]] || 0) + 1
    }

    console.log(obj1)
    console.log(obj2)

    for (const key in obj1) {
        if(obj1[key] !== obj2[key]) return false

        return true
    }

};

console.log(Anagram("anagram", "nagaram"));


// s=anagram    obj1={a:3,n:1,:g:1,m:1}