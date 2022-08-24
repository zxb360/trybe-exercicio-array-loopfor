//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 * (4 - 1) * (4 - 2) * (4 - 3)
// 4! = 4 x    3    x    2    x    1   = 24

let fatorial = 10;
let res = fatorial;
//console.log(res);
for(let index = 1; index < fatorial; index += 1){
  // 1 ; 1 < 4 ; 1 = 1 + 1 => 2 < 4 ; 2 + 1 = 3 ;   
    res *= index  
 // 4 = 4 * 1 => 4 = 4 * 2  => 8 = 8 * 3 => 24 
}
console.log(res);