function dico(){
    return Math.ceil(Math.random() * 10);
}
let d1 = dico();
let d2 = dico();
console.log(d1, d2);

// while(d1 === d2){
//     d2 = dico()
// }
if(d1 === d2){
    console.log("valor igual");
} else {
    console.log("nao igual");
}