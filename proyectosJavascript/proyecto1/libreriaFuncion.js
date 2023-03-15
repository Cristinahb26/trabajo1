let myLib = require ("./libreriaVector");

myLib.vector(8,5)
myLib.sumaVector(10,5)
myLib.productoNumeroVector(2,5)
myLib.restaVector(15,5)
myLib.productoVector(10, 8)



let v1 = [2, 5, 8, 4, 1];
let v2 = [6, 8, 5, 2, 6];
let v3 = [];

function SumaVector(v1, v2) {
    
v1.forEach((element, index) => {
    v3.push(element + v2[index])

})
   return v3;
} v3 = SumaVector(v1, v2);
   console.log(v3);




let v4 = [2, 5, 8, 4, 1];
let v5 = [6, 8, 5, 2, 6];


    
let mySumaVector = v4.map(function(element, ind) {

    return element + v5[ind];
} 
)
 console.log(mySumaVector)




let v = [3, 5, 2, 8, 6]

let myNumerosPares = v.filter(function(element) {
    return element % 2 == 0;
    
}); 
console.log(myNumerosPares);



let sumatoria = v.reduce(function(acumulador, element) {

    return acumulador + element;
})
     console.log(sumatoria);

