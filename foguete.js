let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for(index of numbers){
//     console.log(index);
// }
// for(let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let sum = 0
// for(index of numbers){
//     console.log(sum += index);
// }

//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let sum = 0;
for(let index = 0; index < numbers.length; index+=1){
    sum = sum + numbers[index];
    //sum += numbers[index];
}
console.log('Média aritmética: ', sum / numbers.length);

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.



//4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


//5- 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;


//6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";



//7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;
