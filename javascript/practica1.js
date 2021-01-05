// let word = "hola mundo";

// console.log(Array.from(word));
// console.log(word.split(''))


/*   SORT  */
// const letters = ['s','a','p','b'];
// const numbers = [1,2,4,5,23,3,22,6,0];
// console.log(letters.sort());
// console.log(numbers.sort((a,b)=>b-a));

/* 
function menor a mayor (a,b){

    if( a-b > 0  ) return -1;
    if ( a-b < 0 ) return 1;    
    if( a==b) return 0;
}

*/
/* 
function mayor a menor (b,a){

    if( b-a > 0  ) return -1;
    if ( b-a < 0 ) return 1;    
    if( b==a) return 0;
}

*/

// const numbers = [12,3,34,5344,23,13];

// numbers.forEach((number)=>console.log(number));

// numbers.forEach((number,index)=> console.log(`${number} esta en la posición :${index}`));

// const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];

// console.log(words.some(word=>word.length>10));
// console.log(words.every(word=>word.length>2));

// let numbers=[2,4,6,8,10];

// const numbers2 = numbers.map(number=> number*2);

// console.log(numbers2);

/*let numbers=[2,4,6,8,10];

const numbers2 = numbers.filter(number=>number>4);

console.log(numbers2);
*/
// let numbers=[2,4,6,8,10];

// console.log(numbers.reduce((a,b)=>a+b));

// const users =[
//     {
//         name:'User1',
//         online:true
//     },
//     {
//         name:'User2',
//         online:true
//     },
//     {
//         name:'User3',
//         online:true
//     },
//     {
//         name:'User4',
//         online:false
//     },
//     {
//         name:'User5',
//         online:false
//     }

// ];

// const userOnline = users.reduce((cont,user)=>{
//     if(user.online)cont++;
//     return cont;
// },0);
// console.log(`Usuario conectado: ${user}`);

// const numbers =[-12,-6,-2,4,6,8];

// const addNumers= (a,b,c)=>{
//     console.log(a+b+c);
// }
// let numberstoAdd = [1,2,3];

// addNumers(...numberstoAdd);

// let users = ['Javier', 'Marta', 'Jaime'];

// let newUser =['Juan','Pepe'];

// users.splice(2,0,...newUser);
// console.log(users);

// const arr1= [1,2,3,4];

// const arr2 = [...arr1];

// console.log(arr2);

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8];

// let arrConcat = [...arr1 ,...arr2]; //arr1.concat(arr2);

// console.log(arrConcat);

// const restParms = (...numbers) =>{
//     console.log(numbers.sort((a,b)=>a-b));
// }

// restParms(1,23,3,4,5,43);

// const numbers =[-12,4,3,-4,5,13,5   ];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// console.log ([...new Set (numbers)]);