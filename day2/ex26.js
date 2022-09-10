let nums = [123, 4, 599, 6, 78, 8];

let [n1, n2, n3, ...nums1] = nums;
// n1, n2, and n3 are numbers, nums1 is an array consisting remaining elements from nums

console.log(n1);
console.log(n2);
console.log(n3);
console.log(nums1);

console.log(Math.max(...nums));

let nums2 = nums1; // reference to nums1
nums2.push(999);

console.log(nums1);
console.log(nums2);

let nums3 = [...nums1]; // shallow copy
nums3.push(888);
console.log(nums1);
console.log(nums3);
