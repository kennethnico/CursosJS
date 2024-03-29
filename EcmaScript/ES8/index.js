//Liberado en Junio de 2017

//Herramientas para convertir objetos a arreglos/matrices
const data = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana'
};
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

//Object Values - Valores de un objeto a un arreglo
const data2 = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana'
};
const values = Object.values(data2);
console.log(values);


//Padding
const string = 'hello';
console.log(string.padStart(7,'*** '));
console.log(string.padEnd(12,' -------'));

const obj ={
    name: 'Edwin',
}

//Async y Await
//Promesas
const helloworld = () => {
    return new Promise((resolve, reject) => {
        (0)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    })
};

const helloAsync = async () =>{
    const hello = await helloworld();
    console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloworld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};
anotherFunction();