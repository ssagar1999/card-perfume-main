// // // // // // // let a = 9; //stack

// // // // // // // let b = 89;


// // // // // // // let obj1 = { a : 56}


// // // // // // // let obj2 = obj1;

// // // // // // // obj2.a = 1212;

// // // // // // // console.log(obj1, obj2)



// // // // // // // let obj1 = {key1:89, key2:23}
// // // // // // // let obj2 = obj1;


// // // // // // // obj2.key1 = 1212;

// // // // // // // console.log(obj1, obj2)


// // // // // // let apple = function Apple(name){

// // // // // //     let nameString = 'my name is  :' + name;

// // // // // //     console.log(nameString)

// // // // // // }


// // // // // // let newFunc =  () => {
// // // // // //     console.log('arrow function')
// // // // // // }

// // // // // // let addstring = (a,b) =>{
// // // // // //   return a+b;
// // // // // // }

// // // // // // apple('shubham')
// // // // // // apple('Ayush')
// // // // // // apple('Pavan')
// // // // // // apple('Rohit')

// // // // // // newFunc()

// // // // //  // cb is my callback function passes as argument
// // // // // function a(cb){
// // // // //     let num = 90 + 90;

// // // // //     let num2 = 180-90;

// // // // //     cb()
// // // // // }

// // // // // function b(){

// // // // // console.log('function b is called')
// // // // // }


// // // // // function c(){
// // // // //     console.log('function c is called')
// // // // // }

// // // // // function d(){
// // // // //     console.log('function d is called')
// // // // // }
// // // // // a(b)
// // // // // a(c)
// // // // // a(d)

// // // // // function Main(cb1, cb2, n1, n2){
// // // // //     console.log('main function is called');
// // // // //     console.log(cb1, cb2, n1,n2)
// // // // //     cb1()
// // // // //     cb2()
// // // // // }

// // // // // function yo(){
// // // // //     console.log('s function is called')
// // // // // }
// // // // // function y(){
// // // // //     console.log('no function is called')
// // // // // }

// // // // // Main(yo, y, 3,5)


// // // // function Main(a,b,c){
// // // //     let num = a(b,3);
// // // //     let num2 = c(b,9);
// // // //     console.log(num, num2)
// // // // }

// // // // function add(n1,n2){
// // // //     return n1+n2

// // // // }

// // // // Main(sub,100,78)


// // // let student = {
// // //     'my name': 'sai',
// // //     rollno:37987983,
// // //     giveExam :function(){
// // //         console.log('exam is given')
// // //     }, 

 
// // // }

// // // console.log(student['my name'])

// // // console.log(student.name,  student.rollno)


// // class Student{
// //     constructor(name,rollno){
// //         console.log('constuctor chal gya')
// // this.name= name;
// // this.rollno= rollno;
// // this.school = 'DPS';
// //     }
// // }

// // let student1 = new Student('arav', 7)
// // let student2 = new Student('chetan', 17)
// // console.log(student1, student2)
// let c = {key : 10}
// let a = {key : 10}

// console.log(c.key == a.key)


// function writeMyName(){
//     console.log('shubham')
// }
// writeMyName()

// let func = function(arg1, arg2){
//     console.log('shubham', arg1, arg2)
// }
// func(23, 45)


function greetPerson(nameofThePerson, num){
    console.log('hello ' + nameofThePerson, num)
}

greetPerson('shubham', 90)
// greetPerson('pritam')
// greetPerson('Rohit')
