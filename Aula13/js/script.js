var nome = "Josué";

if(nome == "Pedro"){
    console.log("Seu nome é Pedro!");
}
else if(nome == "Josué"){ // Tem que vir depois do if e antes do else | Pode criar uma condição diferente
    console.log("Olá, Criador!");
}
else{ // Quando nenhum anterior é atendido | Deve vir por ultimo
    console.log("Seu nome não é Pedro!");
}

/////////////////////////////////

var idade = 20;

if(idade > 20){
    console.log("Ele pode entrar na festa!");
}
else if(idade >= 18){ // If só com Else If
    console.log("Pode entrar, mas só com autorização!");
}

/////////////////////////////////

if(nome == "Mattheus"){
    console.log("Seu nome é Mattheus");
}
else{ // If só com Else
    console.log("Não sei seu nome!");
}