document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador
let cor = [
    //0             2       2
    ['Vermelho', 'Azul','Amarelo'], //0

    //0         1        2          3
    ['Roxo', 'Verde','Laranja', 'Marrom'], //1

];

document.write(`Todas as propriedades do objeto cor: ${JSON.stringify(cor)}</strong><br><br>`);
document.write("Misturando <strong>"+cor[0][0]+" e <strong>"+cor[0][2]+"</strong></strong> forma o <strong>"+cor[1][2]+"</strong><br>")