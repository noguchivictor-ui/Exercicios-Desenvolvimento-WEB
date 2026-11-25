const numeros = [3,1,2,3,6];

let maiorSequencia = 1;
let sequenciaAtual = 1;

for(let i =0;i<numeros.length;i++){
    if(numeros[i] === numeros[i - 1]+ 1){
        sequenciaAtual++;
    }else{
        sequenciaAtual = 1;
    }
    if(sequenciaAtual > maiorSequencia){
        maiorSequencia = sequenciaAtual;
    }
}
console.log(maiorSequencia);