const colors = require('colors'); //requer instalação da biblioteca no cmd: npm install colors

//console.log("Hello World");


//Criando letras grandes com composição de caracteres
let hH, eE, lL, oO, hello;

//Cria/draw letra H
hH = `#     #\n
#     #\n
#  #  #\n
#     #\n
#     #\n`;

//console.log(hH);
//console.log();
//Cria/draw letra E
eE = `#  #  #\n
#      \n
#  #  #\n
#      \n
#  #  #\n`;

//console.log(eE);

//console.log();
//Cria/draw letra L
lL = `#      \n
#      \n
#      \n
#      \n
#  #  #\n`;

//console.log(lL);
//console.log();
//console.log(lL);

console.log();
//Cria/draw letra O
oO = `#  #  #\n
#     #\n
#     #\n
#     #\n
#  #  #\n`;

//console.log(oO);

hello = `#     #      #  #  #      #            #            #  #  #\n
#     #      #            #            #            #     #\n
#  #  #      #  #  #      #            #            #     #\n
#     #      #            #            #            #     #\n
#     #      #  #  #      #  #  #      #  #  #      #  #  #\n`;


console.log(colors.bold(colors.green(hello)));


