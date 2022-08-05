//Reposo
const obj ={
    name:'Edwin',
    age:29,
    country: 'MX',
}
let {name, ...all} = obj;
console.log(name,all);

//Propagación
const obj2 ={
    name:'Edwin',
    age:29,
}
const obj3 ={
    ...obj2,
    country: 'MX',
}
console.log(obj3);

//Promise finally
const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
       (1)
        ? setTimeout(()=> resolve('Hello World'), 3000) //resolve("Hello world")
        : reject(new Error('Test Error'));
    });
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log('Finalizó'));

//Regex