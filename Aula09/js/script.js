// Object é igual o Dictionary em Python 
// Os itens do objeto são chamados de Propriedades e possuem chave e valor

var obj = { // Objetos possuem a seguinte estrutura { chave: valor}
    nome : "Josué",
    idade: 29,
    profissao: "Estudante",
    estaEstudando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome); // Acessando uma propriedade

console.log("O meu nome é: " + obj.nome); // Concatenando

obj.nome = "Steve Jobs"; // Alterando um valor

console.log(obj.nome);

obj.estadoCivil = "Solteiro"; // Criando uma nova propriedade

console.log(obj);