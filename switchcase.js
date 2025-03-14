function colorirFundo() { // Função de clorir
    document.body.bgColor = "#ffffff"
    document.body.style.color = "#ffffff"
    let txtCorFundo = document.getElementById("txtCorFundo");
    let corFundo = txtCorFundo.value.toLowerCase(); // essa variável está recebendo em minusculo o valor que for digitado no txtCorFundo

    switch (corFundo) { // seria como o interrupitor algoritimo switch vai detectar a cor, e se a cor exisitr nesse aloritimo ele irá mudar a cor do fundo da página 
        case "azul": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#0000ff";
            break; // break seria uma pausa
        case "azul escuro": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#00008B";
            break; // break seria uma pausa
        case "azul claro": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#05aff7";
            break; // break seria uma pausa
        case "amarelo": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#fcf403";
            break; // break seria uma pausa
        case "rosa": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#fa05dd";
            break; // break seria uma pausa
        case "rosa claro": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#ffc9ee";
            break; // break seria uma pausa
        case "vermelho": // caso estiver o comando irá colorir a página
            document.body.bgColor = "#fc0303";
            break; // break seria uma pausa
        case "roxo": // caso estiver o comando irá colorir a página
            document.body.bgColor = "#c203fc";
            break; // break seria uma pausa
        case "roxo claro": // caso estiver o comando irá colorir a página
            document.body.bgColor = "#f28fff";
            break; // break seria uma pausa
        case "verde": // caso estiver o comando irá colorir a página
            document.body.bgColor = "#008000";
            break; // break seria uma pausa
        case "verde claro": 
            document.body.bgColor = "#a5fc4e"
            break;// break seria uma pausa
        case "laranja": // caso estiver o comando irá colorir a página
            document.body.bgColor = "#fc8c03";
            break; // break seria uma pausa
        case "preto": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#000000";
            document.body.style.color = "#ffffff"
            break; // break seria uma pausa
        case "cinza": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#757873";
            break; // break seria uma pausa
        case "marrom": // caso estiver o comando azul irá colorir a página
            document.body.bgColor = "#964b00";
            break; // break seria uma pausa
        default:
            document.body.bgColor = "#ffffff";
            break;
         
 }
};

function colorirTexto() {
    document.body.style.color = "#000000";
    let txtCorTexto = document.getElementById("txtCorTexto");
    let corTexto = txtCorTexto.value.toLowerCase(); // essa variável está recebendo em minusculo o valor que for digitado no txtCorTexto

switch (corTexto) { // seria como o interrupitor algoritimo switch vai detectar a cor, e se a cor exisitr nesse aloritimo ele irá mudar a cor do fundo da página 
    case "cinza": // caso estiver o comando azul irá colorir a página
        document.body.style.color = "#757873";
        break; // break seria uma pausa
    case "marrom": // caso estiver o comando azul irá colorir a página
        document.body.style.color = "#964b00";
        break; // break seria uma pausa
    case "preto": // caso estiver o comando azul irá colorir a página
         document.body.style.color = "#000000";
        break; // break seria uma pausa
    case "azul": // caso estiver o comando azul irá colorir a página
            document.body.style.color = "#0000ff";
            break; // break seria uma pausa
    case "azul escuro": // caso estiver o comando azul irá colorir a página
            document.body.style.color = "#00008B";
            break; // break seria uma pausa
    case "azul claro": // caso estiver o comando azul irá colorir a página
            document.body.style.color = "#05aff7";
            break; // break seria uma pausa
    case "amarelo": // caso estiver o comando azul irá colorir a página
            document.body.style.color = "#fcf403";
            break; // break seria uma pausa
    }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function(event) {
    if (event.keyCode == 13){
        colorirFundo();
    }
});

document.getElementById("txtCorTexto").addEventListener('keyup', function(event) {
    if (event.keyCode == 13){
        colorirTexto();
    }
});