// // // let 


// // let arr = [1,2,3,4];
// // let newArray = arr.map(cb);

// // function cb(v){
// //     console.log(v+100)
// // }


// let Inputarr = ['a', 'b', 1, 'f', 9, 'g']

// // op -> ['A','B', 'F', 'G']

// //lets remove all the numbers -> filter out numbers from array
// let allAlphas = Inputarr.filter(myCb)

// function myCb(v){
//     if(typeof v == 'string') return true
//     else return false

// }


// console.log(allAlphas)

// let output = allAlphas.map(cb)

// function cb(v){
//     return v.toUpperCase();
// }
// console.log(output)

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 800 },
    { name: 'Monitor', price: 300 },
    ];
    let expensiveProducts = products.filter(cb)


    function cb(v){
       if(v.price > 300) return true
       else return false

    }

    console.log(expensiveProducts)
    // const output = [
    //     { name: 'Laptop', price: 1000 },
    //     { name: 'Smartphone', price: 500 },
    //     { name: 'Tablet', price: 800 },
     
    //     ];