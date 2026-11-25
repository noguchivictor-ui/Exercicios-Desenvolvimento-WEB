const  numeros = [1,2,3,4,5,6];

let maior = numeros[0];
let segundoMaior = null;

for(let i =0;i<numeros.length;i++){
    if(numeros[i]> maior){
        maior = numeros[i];
    }
}
for(let i =0;i<numeros.length;i++){
    if(numeros[i] < maior){
        if(segundoMaior === null || numeros[i]>segundoMaior){
            segundoMaior = numeros[i];
        }
    }
}
console.log(segundoMaior)