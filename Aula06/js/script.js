// É bom manter o padrão entre "" e ''

var nome = "Josué";
var sobrenome = "Bueno";

var nomeCompleto = nome + " " + sobrenome; // Concatenando Strings
console.log(nomeCompleto);

var frase = "Esta é uma frase complexa"; // Tambem é uma String
console.log("5.29999999"); // Tambem é uma String

console.log(typeof nome);
console.log(typeof "nome"); // typeof com qualquer dado retorna o tipo do dado

document.write('Como escrever "entre aspas!"'); // Permite escrever no html

console.log("Seu nome é: " + nomeCompleto); // Concatenando String com texto