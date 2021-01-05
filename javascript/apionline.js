const multiply =(a,b)=>{
    let result = 0;
    const positive = Math.abs(b)==b
    for(i=0;i<Math.abs(b);i++){
        result = positive ? result + a: result-a;
    }
    return result;
}

const a = multiply(2,-8);
console.log(a)


const getBiggest = (arr)=> arr.reduce((acc,el) =>acc >el ? acc : el)
const b = getBiggest([50,30,-3,2])

console.log(b)


const clean = (arr)=> arr.reduce((acc,el)=>{
    if(el){
        acc.push(el)
    }
    return acc;
},[])

const c = clean([1,undefined,null,0,2,3])

console.log(c)