//Olá, você foi contratado para executar este projeto. 
//É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. 
//Veja abaixo os requisitos do projeto:

//- Precisamos desenvolver um menu para um microondas super veloz, 
//onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function microondas(comida, tempo) {
    switch (comida) {
        case 1:
            if (tempo / 10 == 1) {
                 console.log("Prato pronto, bom apetite!!!");
            } else if (tempo / 10 >= 2 && tempo / 10 < 3) {
                 console.log("O prato queimou");
            } else if (tempo / 10 >= 3) {
                 console.log("kabumm");
            } else {
                 console.log("tempo insuficiente");
            }
            break;
        case 2:
            if (tempo / 8 == 1) {
                 console.log("Prato pronto, bom apetite!!!");
            } else if (tempo / 8 >= 2 && tempo / 8 < 3 ) {
                 console.log("O prato queimou");
            } else if (tempo / 8 >= 3) {
                 console.log("kabumm");
            } else {
                 console.log("tempo insuficiente");
            }
            break;
        case 3:
            if (tempo / 15 == 1) {
                 console.log("Prato pronto, bom apetite!!!");
            } else if (tempo / 15 >= 2 && tempo / 15 < 3) {
                 console.log("O prato queimou");
            } else if (tempo / 15 >= 3) {
                 console.log("kabumm");
            } else {
                 console.log("tempo insuficiente");
            }
            break;
        case 4:
            if (tempo / 12 == 1) {
                 console.log("Prato pronto, bom apetite!!!");
            } else if (tempo / 12 >= 2 && tempo / 12 < 3) {
                 console.log("O prato queimou");
            } else if (tempo / 12 >= 3) {
                 console.log("kabumm");
            } else {
                 console.log("tempo insuficiente");
            }
            break;
        case 5:
            if (tempo / 8 == 1) {
                 console.log("Prato pronto, bom apetite!!!");
            } else if (tempo / 8 >= 2 && tempo / 8 < 3) {
                 console.log("O prato queimou");
            } else if (tempo / 8 >= 3) {
                 console.log("kabumm");
            } else {
                 console.log("tempo insuficiente");
            }
            break;
        default:
            console.log("Prato inexistente");
            break;
    }
}
// 1:
microondas(1,7)
microondas(1,10)
microondas(1,20)
microondas(1,30)

// 2:
microondas(2,4)
microondas(2,8)
microondas(2,16)
microondas(2,24)

// 3:
microondas(3,10)
microondas(3,15)
microondas(3,30)
microondas(3,45)

// 4:
microondas(4,8)
microondas(4,12)
microondas(4,24)
microondas(4,36)

// 5:
microondas(5,4)
microondas(5,8)
microondas(5,16)
microondas(5,24)

// 6 ou outros:
microondas(6,2)
microondas(0,2)
microondas(8,20)