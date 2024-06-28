// // let str = 'hello';

// // console.log(str.charAt(1000))
// // console.log(str.charAt(0))

// // console.log(str[0])
// // console.log(str.charCodeAt(4))

// // let str2 = 'world'

// // let res1 = str+str2;
// // let result  = str.concat('sdsdsdsd', 'qwewiuasdiu', str2)
// // console.log(res1, result)

// // let res = str.includes('T')
// // console.log(res)

// // let res = 'T'.repeat(50);
// // let str  =  'hELLO';

// // let response = str.replaceAll('L', 'T')
// // console.log(response, str)

// // let str = 'helloworld';

// // let subst = str.slice(2, str.length)
// // console.log(subst)

// // let str = '2020-5-3';

// // let ans = str.split('-');
// // // [2020,5,3]

// // console.log(ans)

// // let names = 'Priyanshu(priyanshu.sengar_cs22@gla.ac.in),Sanchit(sanchit.gla_cs22@gla.ac.in),Shivam(Shivam.pandey_cs22@gla.ac.in),Ankesh(ankesh.kumar_cs22@gla.ac.in)'


// // let 
// // let namesArray = names.split(',');
// // console.log(namesArray)

// // let date = '2020-5-3'

// // // op= [2,0,2,0,-,5,-,3]
// // let op = date.split('')

// // console.log(op)


// // let str = 'hello&&&worldis&&&a&&&good&&&word'
// // // i want array of words
// // let ans = str.split('&&&');
// // console.log(ans)

// // let str = 'HEllo woRld';
// // let ans = str.toUpperCase();
// // let  ans2 = str.toLowerCase();

// // console.log(ans, ans2);

// // let str = 'hello       ';

// // let newStr = str.trim();

// // console.log(newStr, 'dd')

// let ans  = 'hello world'.replace('world', 'everyone')
// console.log(ans)


let inputArrar =  ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


    let outputArray = [];

    for(let val of inputArrar){

        let ans = val.split(';')

      let str1 = ans[0].slice(0,3);
      let str2 = ans[1];
      let finlAns = str1 + ' : ' + str2;

      outputArray.push(finlAns)

    }

    console.log(outputArray)