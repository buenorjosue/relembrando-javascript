// Array é uma lista de objetos - podem ter vários tipos de dados

var arr = [ //Array de vários tipos
    5,
    "Mattheus",
    true,
    {
        teste:1,
        teste2:2,
    }
];

var arr2 = [1,2,3,4,5]; //Array de um tipo só

console.log(arr2);

console.log(arr[2]); //Acessando um elemento especifico

arr[4] = 10; // Inserindo um item no array

arr[0] = "Oi"; //Sobreescrevendo elemento

console.log(arr);