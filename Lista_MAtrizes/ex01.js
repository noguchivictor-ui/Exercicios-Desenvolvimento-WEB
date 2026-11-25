const numeros = [11,1,3,1,2,2];

const semRepeticao = [];

for(let i = 0;i< numeros.length;i++){
    let encontrado = false;
    for(let j = i+1;j<numeros.length;j++){
        if(numeros[i] === numeros[j]){
            encontrado = true;
            break;
        }
    }
    if(encontrado === false){
        semRepeticao.push(numeros[i]);
    }
}
console.log(semRepeticao)
