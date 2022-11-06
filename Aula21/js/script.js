// Break encerra a instrução e Continue pula para a proxima

for(var i = 10; i > 0; i--){

    console.log(i);

    if(i == 5){
        break; // interrompendo o for
    }

}

console.log("Break Chegou!");


var x = 0;

while(x < 10){
    x++;
    
    if(x === 5){
        continue; // Pulando o 5
    }

    console.log(x);
}