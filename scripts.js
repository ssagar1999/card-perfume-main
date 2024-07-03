// // // // // // // // // let 


// // // // // // // // let arr = [1,2,3,4];
// // // // // // // // let newArray = arr.map(cb);

// // // // // // // // function cb(v){
// // // // // // // //     console.log(v+100)
// // // // // // // // }


// // // // // // // let Inputarr = ['a', 'b', 1, 'f', 9, 'g']

// // // // // // // // op -> ['A','B', 'F', 'G']

// // // // // // // //lets remove all the numbers -> filter out numbers from array
// // // // // // // let allAlphas = Inputarr.filter(myCb)

// // // // // // // function myCb(v){
// // // // // // //     if(typeof v == 'string') return true
// // // // // // //     else return false

// // // // // // // }


// // // // // // // console.log(allAlphas)

// // // // // // // let output = allAlphas.map(cb)

// // // // // // // function cb(v){
// // // // // // //     return v.toUpperCase();
// // // // // // // }
// // // // // // // console.log(output)

// // // // // // const products = [
// // // // // //     { name: 'Laptop', price: 1000 },
// // // // // //     { name: 'Smartphone', price: 500 },
// // // // // //     { name: 'Tablet', price: 800 },
// // // // // //     { name: 'Monitor', price: 300 },
// // // // // //     ];
// // // // // //     let expensiveProducts = products.filter(cb)


// // // // // //     function cb(v){
// // // // // //        if(v.price > 300) return true
// // // // // //        else return false

// // // // // //     }

// // // // // //     console.log(expensiveProducts)
// // // // // //     // const output = [
// // // // // //     //     { name: 'Laptop', price: 1000 },
// // // // // //     //     { name: 'Smartphone', price: 500 },
// // // // // //     //     { name: 'Tablet', price: 800 },
     
// // // // // //     //     ];


// // // // // // let nums = [-1,-2,1,-3,-8,-9];
// // // // // // let ans = nums.every(cb);
// // // // // // function cb(v){
// // // // // //     if(v < 0) return true
// // // // // //     else return false
// // // // // // }

// // // // // let marks = [20,40,60, 80,70]

// // // // // let ans = marks.some(function cb(marks){
// // // // //     if(marks > 50) return true
// // // // // });
// // // // // console.log(ans)

// // // // let arr = [-1,-2,-3,4,-3,-78];
// // // // let ans = arr.some((v) =>{
// // // //     if(v < 0) return true;
// // // //     else return false;
// // // // })

// // // // console.log(ans)


// // // let num = [1,2,3, 7, 89 ,99].find(v => v == 89)
// // // let index = [1,2,3,90,2].findIndex(v => v == 2)
// // // let lastindex = [1,2,3,90,2, 89, 898989 , 2,  9090, 2].findLastIndex(v => v == 2)

// // // console.log(num, index, lastindex)


// // let arr = ['a', 'b', 'c', 'd'];

// // let str = arr.join('------------------');

// // console.log(str)


// function reverseStr(str){
//     let myArr = str.split('');
//     console.log(myArr);
//     let revArr = myArr.reverse();
//     return revArr.join('')
// }

// let ans = reverseStr('HELLO')
// let ans2 = reverseStr('world')
// let ans3 = reverseStr('GLA');

// console.log(ans, ans2, ans3)

const students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 19, grade: 'B' },
    { name: 'Charlie', age: 20, grade: 'A' },
    { name: 'Diana', age: 21, grade: 'A' },
    ];
    

    // filter out age > 20 and grade = A

    let obj = {

        'smile': ':)',
        'sad': ':(',
    }

    // "Make me smile"

    function emotify(str){

        let arr = str.split(' ');
        console.log(arr);
        let temp = arr.slice(0,2) + obj[arr[2]];
       let temp2 = temp.split(',')
console.log(temp2)
        return temp2.join('')

    }

    let ans = emotify("Make me smile");
    let ans2 = emotify("Make me sad");

    console.log(ans2)