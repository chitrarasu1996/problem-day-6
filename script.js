
// Implement the bubble sort algorithm.

let arr = [2, 1, 7, 6, 5, 3];


// for (let i = 0; i < arr.length; i++) {

//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[i] > arr[j]) {

//             const temp = arr[i];

//             arr[i] = arr[j];

//             arr[j] = temp;

//         }
//     }


// }

// console.log("count",arr)
//  Implement the selection sort algorithm


// for (let i = 0; i < arr.length; i++) {

//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[minIndex] > arr[j]) {
//             minIndex = j
//         }
//     }

//     if (minIndex !== i) {
//         arr[i] = arr[i] + arr[minIndex];

//         arr[minIndex] = arr[i] - arr[minIndex];

//         arr[i] = arr[i] - arr[minIndex]
//     }
// }


//  Implement the insertion sort algorithm.
// const arr = [2, 1, 7, 6, 5, 3];


for(let i=1;i<arr.length;i++){

let currentElem=arr[i]

let index=i;

while(index > 0  && arr[index-1] > currentElem){
    arr[index]=arr[index-1]
index--
}

arr[index]=currentElem;

 }



console.log("indsertion",arr)