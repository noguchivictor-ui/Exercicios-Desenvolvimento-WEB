const matrizA = [[1, 3], [3, 4]];
const matrizB = [[1, 2], [3, 4]];

let saoIguas = true;

if(matrizA.length !== matrizB.length){
    saoIguas = false;
} else{
    for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < matrizA.length; j++){
            if(matrizA[i][j] !== matrizB[i][j]){
            saoIguas = false;
            break;
           }
        }
    }
}
console.log(saoIguas);

// EXERCICIO 25

const matrizA = [[1, 2], 
                  [3, 4]];
const matrizB = [[0, 0], [0, 0]];

for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < matrizA.length; j++){
            matrizB[j][i] = matrizA[i][j]
           }
        }
console.log(matrizB)

// EXERCICIO 26


const matrizA = [[1, 2], 
                 [3, 4]];

const matrizB = [[1, 0], 
                 [3, 3]];

const matrizResultado = [[0,0],[0,0]];

for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < matrizB[0].length; j++){
            for(let k = 0;k < matrizB.length;k++){        
              matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
           }
        }
console.log(matrizResultado)
//EXERCICIO 27

const matrizA = [[1, 2], 
                 [3, 4]];

let diagonal1 = 1;
let diagonal2 = 1;

for(let i = 0; i < matrizA.length; i++){
        for(let j = 0; j < matrizA.length; j++){
           if( i == j){
              diagonal1 *= matrizA[i][j];
           } else if (j == matrizA.length - i -1){
              diagonal2 *= matrizA[i][j];          
             }
        }
}
let determinante = diagonal1 - diagonal2;
console.log(determinante);

//EXERCICIO 28

let matriz = [[1,2,3],
                [0,4,5],
                [1,0,6]];

let determinante  =
    (matriz[0][0] * matriz[1][1] * matriz[2][2]) +
    (matriz[0][1] * matriz[1][2] * matriz[2][0]) +
    (matriz[0][2] * matriz[1][0] * matriz[2][1]) -
    (matriz[0][2] * matriz[1][1] * matriz[2][0]) -
    (matriz[0][1] * matriz[1][0] * matriz[2][2]) -
    (matriz[0][0] * matriz[1][2] * matriz[2][1]);

    console.log("Determinante: " + determinante);            

//EXERCICIO 29
const matriz = [[1,9],[5,4]];

let diagonal1 = 1;
let diagonal2 = 1;

for(let i = 0; i < matriz.length; i++){
  for(let j = 0; j< matriz.length; j++){
    if(i == j){
      diagonal1 *= matriz[i][j];
    } else if(j == matriz.length - i -1){
      diagonal2 *= matriz[i][j];
    }
  }
} 
let inversa = [[,],[,]];
let resultado = diagonal1 - diagonal2;
if(resultado !== 0){
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
      
     // let contaInversa =matriz[i][j] / resultado;
     // inversa.push(contaInversa);
     inversa[0][0] = matriz[1][1] / resultado;
     inversa[0][1] = -matriz[0][1] / resultado;
     inversa[1][0] = -matriz[1][0] / resultado;
     inversa[1][1] = matriz[0][0] / resultado;
    }
  }
console.log(inversa);

//EXERCICIO 30
const matriz = [[1,0],[0,1]];

let x = true;
for(let i = 0; i < matriz.length; i++){
  for(let j = 0; j< matriz.length; j++){
    if(i == j && matriz[i][j] !== 1){
      x = false;
    }
    if(i > j && matriz[i][j] !== 0){
      x = false;
    }
    if(i < j && matriz[i][j] !== 0){
      x = false;
    }
  }
}
console.log(x);

//EXERCICIO 31
const matriz = [[1,0],[0,1]];

let x = 0;
let y = 1;

if (x >= 0 && x < matriz.length && y >= 0 && y < matriz.length){
  for(let j = 0; j < matriz[x].length; j++){
    const temp = matriz[x][j];

    matriz[x][j] = matriz[y][j];
    matriz[y][j] = temp;
  }
  for(let i = 0; i < matriz.length; i++){
     for(let j = 0; j < matriz.length; j++){
        console.log(matriz[i][j]);
  }
  }

}
//EXERCICIO 32
const matriz = [[1,0],[0,1]];

let x = 0;
let y = 1;

if (x >= 0 && x < matriz.length && y >= 0 && y < matriz.length){
  for(let j = 0; j < matriz[x].length; j++){
    const temp = matriz[j][x];

    matriz[j][x] = matriz[j][y];
    matriz[j][y] = temp;
  }
  for(let i = 0; i < matriz.length; i++){
     for(let j = 0; j < matriz.length; j++){
        console.log(matriz[i][j]);
        
  }
  }

}

//EXERCICIO 33


//exercicio 13
const matriz = [[1,2],[5,4]];

for(let i = 0; i < matriz.length; i++){
  maiorValor = matriz[0][0];
  for(let j = 0; j< matriz.length; j++){
    if( matriz[i][j] > maiorValor){
      maiorValor = matriz[i][j];
      console.log(`Maior valor da linha ${i}:`+ maiorValor);
    }
  }
} 



