
function vector(n, m) {

    let number = []
    
 for(let i=0; i<n; i++){
  number.push(Math.floor(Math.random()*m));

 }
   return number
}
 let number = vector(10, 20)

//  console.log(number);





let v1 = [2, 5, 8, 4, 1]
let v2 = [6, 8, 5, 2, 6]

function sumaVector(v1, v2) {

   if(v1.length !== v2.length){
      return;
   } 

   let sum = [];

   for(let i=0; i<v1.length; i++){
         
       sum.push(v1[i]+v2[i]);
   }
   return sum
   }
     let sum = sumaVector(v1, v2);
   //   console.log(sum);





let v = [5, 6, 4];
let n = 2;


function productoNumeroVector(n, v) {
   
   let number1 = [];

   for (let i= 0; i< v.length; i++) {
       
      number1.push(v[i]*n)
      }
      return number1;
   }
   let number1 = productoNumeroVector(n,v);
   // console.log(number1);



let v3 = [10, 6, 8, 5];
let v4 = [6, 2, 1, 3];

if(v3.length !== v4.length){
      return;
}
function restaVector(v3, v4) {

   let number2 = [];

   for (let i =0; i<v4.length; i++){
      number2.push(v3[i] - v4[i]);
   }
    return number2;
}
 let number2 = restaVector(v3, v4);
//   console.log(number2);




  let v5 = [5, 1, 6]
  let v6 = [10, 5, 2]

  if (v5.length !== v6.length) {
      return;
  }

  function productoVector(v5, v6) {
    
   let number3 = []

   for(let i = 0; i<v6.length; i++){
      number3.push(v5[i] * v6[i]);
   }
   return number3;
   
  }
  let number3 = productoVector(v5, v6);
//   console.log(number3);


  module.exportar = {vector, sumaVector, productoNumeroVector, restaVector, productoVector};