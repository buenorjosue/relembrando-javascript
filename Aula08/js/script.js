// null representa um valor - No futuro do código pode haver um valor na variavel
// undefined está criada mas n tem valor 

//Hoisting - Todas as variaveis e funções são inicializadas no inicio
console.log("Não foi definido ainda: " + num); 

var nome = null; // Vai ser definido, está vazio
var sobrenome;
var num = 1;

console.log(nome);

nome = "Josué";

console.log(nome);

console.log(sobrenome); // Não foi definido ainda