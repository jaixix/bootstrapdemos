arr1 = [1,2,3,6,7,8];
console.log(arr1);

// arr2 = [];
// for(var i=0; i<arr1.length; i++){
//     arr2.push(arr1[i]*2);
// }
// console.log(arr2);

function mapForEach(arr, fn){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(fn())
    }
}