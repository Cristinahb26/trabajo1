// function calculadora(operacion, op1, op2) {
    

//     if(operacion === "sum") {
        
//         return op1+op2;
//     }
//     else if (operacion === "subs"){
//         return op1-op2;

//     }else if (operacion === "mult"){
//         return op1* op2;

//     }else if (operacion === "div"){
//        return op1 / op2;
    
//     }
// }

// console.log(calculadora("sum",2,5));
// console.log(calculadora("subs",10,5));
// console.log(calculadora("mult",2,5));
// console.log(calculadora("div",15,5));




// function calculadora(operacion, op1, op2=0) {
    

//     if(operacion === "sum") {
        
//         return op1+op2;
//     }
//     else if (operacion === "subs"){
//         return op1-op2;

//     }else if (operacion === "mult"){
//         return op1* op2;

//     }else if (operacion === "div"){
//        return op1 / op2;
    
//     }
// }

// console.log(calculadora("sum",2));





// let calculadora = (operacion, op1, op2) => {
    

//     if(operacion === "sum") {
        
//         return op1+op2;
//     }
//     else if (operacion === "subs"){
//         return op1-op2;

//     }else if (operacion === "mult"){
//         return op1* op2;

//     }else if (operacion === "div"){
//        return op1 / op2;
    
//     }
// }

// console.log(calculadora("sum",8,5));
// console.log(calculadora("subs",10,5));
// console.log(calculadora("mult",2,5));
// console.log(calculadora("div",15,5));





function calculadora(operacion, op1, op2) {


    if(operacion === "sum") {
        
        return op1+op2;
    }
    else if (operacion === "subs"){
        return op1-op2;

    }else if (operacion === "mult"){
        return op1* op2;

    }else if (operacion === "div"){
       return op1 / op2;
    
    }
}

let miCalculadora = ["sum", 8, 10]
console.log(calculadora(...miCalculadora));

let miCalculadora1 = ["subs", 25, 10]
console.log(calculadora(...miCalculadora1));

let miCalculadora2 = ["mult", 25, 2]
console.log(calculadora(...miCalculadora2));

let miCalculadora3 = ["div", 50, 2]
console.log(calculadora(...miCalculadora3));
