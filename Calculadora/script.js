
var numero=0;

// -----------------------Botão 0---------------------------
function botao0(){
numero=document.getElementById('bt0').innerText;
document.getElementById('operation').value += numero;

}


document.getElementById('bt0').onclick = botao0;

// -----------------------Botão 1----------------------------
function botao1(){
numero=document.getElementById('bt1').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt1').onclick = botao1;

// -----------------------Botão 2----------------------------
function botao2(){
numero=document.getElementById('bt2').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt2').onclick = botao2;

// -----------------------Botão 3----------------------------
function botao3(){
numero=document.getElementById('bt3').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt3').onclick = botao3;

// -----------------------Botão 4----------------------------
function botao4(){
numero=document.getElementById('bt4').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt4').onclick = botao4;

// -----------------------Botão 5----------------------------
function botao5(){
numero=document.getElementById('bt5').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt5').onclick = botao5;

// -----------------------Botão 6----------------------------
function botao6(){
numero=document.getElementById('bt6').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt6').onclick = botao6;

// -----------------------Botão 7----------------------------
function botao7(){
numero=document.getElementById('bt7').innerText
document.getElementById('operation').value += numero;

}

document.getElementById('bt7').onclick = botao7;

// -----------------------Botão 8----------------------------
function botao8(){
numero=document.getElementById('bt8').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt8').onclick = botao8;

// -----------------------Botão 9----------------------------
function botao9(){
numero=document.getElementById('bt9').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('bt9').onclick = botao9;

// -----------------------Botão Clear----------------------------
function botaocl(){
document.getElementById('operation').value=""
document.getElementById('result').value=""

}

document.getElementById('cl').onclick = botaocl;

// -----------------------Botão Igual----------------------------
function botaores(){
numero=document.getElementById('operation').value;
numero=eval(numero)
document.getElementById('result').value = numero;

}

document.getElementById('res').onclick = botaores;

// -----------------------Botão Adição----------------------------
function botaoadc(){
numero=document.getElementById('adc').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('adc').onclick = botaoadc;

// -----------------------Botão Subtração----------------------------
function botaosub(){
numero=document.getElementById('sub').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('sub').onclick = botaosub;

// -----------------------Botão Multiplicação----------------------------
function botaox(){
numero=document.getElementById('x').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('x').onclick = botaox;

// -----------------------Botão Divisão----------------------------
function botaodiv(){
numero=document.getElementById('div').innerText;
document.getElementById('operation').value += numero;

}

document.getElementById('div').onclick = botaodiv;

//-----------------------Calcular Fórmula de Bhaskara----------------------
function calcular(){

    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d = b*b - 4*a*c;
    var r = document.getElementById("r");

    if(d<0){
        r.innerHTML="Delta=" + d + "<br>Sem raízes reais";
    }else{
        var x1 = (-b + Math.sqrt(d))/(2*a);
        var x2 = (-b - Math.sqrt(d))/(2*a);
        x1=x1.toFixed(2)
        x2=x2.toFixed(2)
        r.innerHTML="Delta = " + d + "<br> x1= "+x1+"<br>x2= "+x2;
    }
}
//--------------------Calcular Teorema de Pitágoras----------------------
function calc(){
    var a = document.getElementById("aa").value;
    var b = document.getElementById("bb").value;
    var c = Math.sqrt(a*a + b*b);
    
    console.log(a)
    document.getElementById("rest").innerText = "Hipotenusa = " + c.toFixed(2);
}
