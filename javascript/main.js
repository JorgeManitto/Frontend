// const btn = document.getElementById('btn');
// const btn1 = document.getElementById('btn1');
// const demo =document.getElementById('demo');

// let cont= 0;


// const interval =    setInterval(() => {
//         demo.innerHTML=`numero: ${cont}`;
//         cont++;
//         if(cont == 14){
//             console.log("catorce");
//         }
// }, 1000);



// btn1.addEventListener('click',()=>{
//     setInterval(() => {
//         demo.innerHTML=`numero: ${cont}`;
//         cont++;
       
// }, 1000);
// })
// btn.addEventListener('click',()=>{
//     clearInterval(interval);
// })  



// const button = document.getElementById('button');
// let flag =false;
// console.log(flag);
// button.addEventListener('click',()=>{
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET','https://jsonplaceholder.typicode.com/users');//el primer parametro tipo get o post //el segundo es la direccion puede ser un archivo de php o algun otro lenguaje de backend 

//     xhr.addEventListener('load',(data)=>{
//        const dataJson = JSON.parse( data.target.response);

//        const list = document.getElementById('list');
//         for (const userInfo of dataJson){
//             const listItem = document.createElement('H3');
//             listItem.textContent=`${userInfo.id}-${userInfo.name}`
//             list.appendChild(listItem);

//         }
       
//     })
//     xhr.send();
//         flag = true;
// },{once : true});

// console.log(flag);

// un callback es una funcion que se ejecuta a traves de otra funcion 
// los callbacks no son asincronos


// const getUser = (id,cb)=>{
// 	const user = {
// 	name: 'dorian',
// 	id:id
// 	}
//     if(id==2) cb('User Not Exist')
//     else cb(null,user)
// }

// getUser(1, (err,user)=>{
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`);

// });


// const Users = [
//     {    id:1,   name: "jorge" },{    id:2,   name: "oscar"},{id:3, name: "manitto"    }

// ]

// const Emails = [
//     {
//         id:1,
//         email:'jorge@admin.com',
//     },
//     {
//         id:2,
//         email:'osacar@admin.com',
//     }
// ]

// const getUser = (id,cb)=>{
//     const user = Users.find(user => user.id == id)
//     if(!user) cb(`Not exist a user wih ${id}`)
//     else cb (null,user)
// } 

// const getEmail = (user,cb) =>{
//     const email = Emails.find(email=>email.id==user.id)
//     if(!email)cb (`${user.name} hasn't email`)
//     else cb(null,{
//         id:user.id,
//         name:user.name,
//         email:email.email
//     }) 
// }

// getUser(1,(err,user)=>{
//     if(err) return console.log(err)

//     getEmail(user,(err,res)=>{
//         if(err) return console.log(err)
//         getEmail(user,(err,res)=>{
//             if(err) return console.log(err)
//         })
//         getEmail(user,(err,res)=>{
//             if(err) return console.log(err)
//         })
//         getEmail(user,(err,res)=>{
//             if(err) return console.log(err)
//             console.log(res)
//         })
//     })


// });
// console.log(Users[0])
//una promesa es un objeto  con dos callbacks internnos

// const Users = [
//     {    id:1,   name: "jorge" },{    id:2,   name: "oscar"},{id:3, name: "manitto"    }
// ]

// const Emails = [{    id:1,    email:'jorge@admin.com',   }, {id:2,email:'osacar@admin.com',}
// ]

// const getUser = (id)=>{
//     const user = Users.find(user=>user.id == id)
//     const promise = new Promise((res,rej) => {
//         if(!user) rej (`Doesn't exist an user with id`)
//         else res(user)
//     })
//     return promise;
// }

// getUser(3).then(user => console.log(user)).catch(err=>console.log(err))

// const button = document.getElementById('button');

// button.addEventListener('click',()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.ok ? Promise.resolve(res):Promise.reject(res))

//     .then (res => res.json())
//     .then (res => {

//             const list = document.getElementById('list')
//             const fragment = document.createDocumentFragment()
//             for(const userInfo of res){
//                 const listItem = document.createElement('LI')
//                 listItem.textContent = `${userInfo.id}-${userInfo.name}`
//                 fragment.appendChild(listItem)

//             }
//             list.appendChild(fragment); 
//     })
// },{once : true})


// console.log(newPost)
// console.log(JSON.stringify(newPost))
// const button = document.getElementById('button');

// button.addEventListener('click', ( )=> {
//     const newPost = { 
//         title:"Nuevo post",
//         body:"Lorem ipsum dolor",
//         userId:1
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST',
//             body: JSON.stringify(newPost),
//             headers:{
//                     "Content-type":"application/json"

//             }

//     })      
//     .then(res => res.json())
//     .them(data => console.log(data))

    
// })

// const button = document.getElementById('button')

// button.addEventListener('click', () => {
//     const newPost = {
//         title: 'A new post',
//         body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         userId: 1
//     }

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// })
// ver archivos con fetch
// const button_img = document.getElementById('button-img')
// const button_pdf = document.getElementById('button-pdf') 

// button_img.addEventListener('click',()=>{
//     fetch('dog.jpg')
//     .then(res => res.blob())
//     .then(img => {
//         document.getElementById('img').src = URL.createObjectURL(img);
//     })
// })