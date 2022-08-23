// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let index = 0; index <= groceryList.length; index+=1){
//     console.log(groceryList[index]); 
// }

//mostra a lista
// for(let lista of groceryList){
//     console.log(lista);
// }

//mostra indice da lista
// for(let index in groceryList){
//     console.log(index);
// }

//letras de uma string
// let word = "café";
// for(let letras of word){
//     console.log(letras);
// }

let numeros = [10, 20, 30];
for(let soma of numeros){
    soma *= 2;
    console.log(soma);
}