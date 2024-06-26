const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];


let op = ['London', 'Manchester', 'Birmingham', 'Liverpool'];
let newArray = [];
for(let val  of cities){
    let newVal = val.toLowerCase();
    let fl = newVal[0];
    let ans = newVal.replace(fl, fl.toUpperCase());
    newArray.push(ans)
}

console.log(newArray)

