var floor = document.getElementsByClassName("floor");
var wall_left1 = document.getElementsByClassName("wall-left");
var wall_top1 = document.getElementsByClassName("wall-top");
var wall_bottom1 = document.getElementsByClassName("wall-bottom");
var wall_right1 = document.getElementsByClassName("wall-right");
var black = document.getElementsByClassName("void");
var column_left1 = document.getElementsByClassName("column-left1");
var column_left2 = document.getElementsByClassName("column-left2");
var column_right1 = document.getElementsByClassName("column-right1");
var column_right2 = document.getElementsByClassName("column-right2");
var column_top1 = document.getElementsByClassName("column-top1");
var column_top2 = document.getElementsByClassName("column-top2");
var column_bottom1 = document.getElementsByClassName("column-bottom1");
var column_bottom2 = document.getElementsByClassName("column-bottom2");


create_static()
create_room();
create_door("top");
create_door("bottom");
create_door("right");
create_door("left");

function create_door(param) {
    for (let index = 1; index < 5; index++) {
        document.getElementById("door-" + param + index).style.backgroundImage = "url(./img/door-" + param + index + ".png)";
        document.getElementById("door-" + param + index).classList.remove("void", "wall-" + param);
    }
}

function create_static() {
    document.getElementById("corner-top-left1").style.backgroundImage = "url(./img/corner-top-left1.png)";
    document.getElementById("corner-top-right1").style.backgroundImage = "url(./img/corner-top-right1.png)";
    document.getElementById("corner-bottom-left1").style.backgroundImage = "url(./img/corner-bottom-left1.png)";
    document.getElementById("corner-bottom-right1").style.backgroundImage = "url(./img/corner-bottom-right1.png)";
    //Columna abaix
    for (let index = 0; index < column_bottom1.length; index++) {
        column_bottom1[index].style.backgroundImage = "url(./img/column-bottom1.png)";
    }
    for (let index = 0; index < column_bottom2.length; index++) {
        column_bottom2[index].style.backgroundImage = "url(./img/column-bottom2.png)";
    }
    //Columna adalt
    for (let index = 0; index < column_top1.length; index++) {
        column_top1[index].style.backgroundImage = "url(./img/column-top1.png)";
    }
    for (let index = 0; index < column_top2.length; index++) {
        column_top2[index].style.backgroundImage = "url(./img/column-top2.png)";
    }
    //Columna dreta
    for (let index = 0; index < column_right1.length; index++) {
        column_right1[index].style.backgroundImage = "url(./img/column-right1.png)";
    }
    for (let index = 0; index < column_right2.length; index++) {
        column_right2[index].style.backgroundImage = "url(./img/column-right2.png)";
    }
    //Columna esquerra1
    for (let index = 0; index < column_left1.length; index++) {
        column_left1[index].style.backgroundImage = "url(./img/column-left1.png)";
    }
    for (let index = 0; index < column_left2.length; index++) {
        column_left2[index].style.backgroundImage = "url(./img/column-left2.png)";
    }
}

function create_room() {
    //Terra
    for (let index = 0; index < floor.length; index++) {
        var rnd = Math.floor(Math.random() * (20 - 1) + 1);
        floor[index].style.backgroundImage = "url(./img/ground" + rnd + ".png)";
    }
    //Pared esquerra
    for (let index = 0; index < wall_left1.length; index++) {
        var rnd = Math.floor(Math.random() * (3 - 1) + 1);
        wall_left1[index].style.backgroundImage = "url(./img/wall-left" + rnd + ".png)";
    }
    //Pared adalt
    for (let index = 0; index < wall_top1.length; index++) {
        var rnd = Math.floor(Math.random() * (3 - 1) + 1);
        wall_top1[index].style.backgroundImage = "url(./img/wall-top" + rnd + ".png)";
    }
    //Pared abaix
    for (let index = 0; index < wall_bottom1.length; index++) {
        var rnd = Math.floor(Math.random() * (3 - 1) + 1);
        wall_bottom1[index].style.backgroundImage = "url(./img/wall-bottom" + rnd + ".png)";
    }
    //Pared dreta
    for (let index = 0; index < wall_right1.length; index++) {
        var rnd = Math.floor(Math.random() * (3 - 1) + 1);
        wall_right1[index].style.backgroundImage = "url(./img/wall-right" + rnd + ".png)";
    }
    //Buid
    for (let index = 0; index < black.length; index++) {
        black[index].style.backgroundImage = "url(./img/void.png)";
    }
}



/*####################### PERSONATGE #######################*/

var personatge = document.getElementById("personatge");

const PIXELS_TECLA = 10;
var t = 300;
var l = 700;
var posicio = "";

function mou(event) {
    var x = event.which;
    console.log(x);
    if (x == 115) {
        abaix();
        posicio = "abaix";
    }
    if (x == 119) {
        adalt();
        posicio = "adalt";
    }
    if (x == 100) {
        dreta();
        posicio = "dreta";
    }
    if (x == 97) {
        esquerra();
        posicio = "esquerra";
    }
    if (x == 32) {
        ataca(posicio);
    }
}

function abaix() {
    if (t < 530) {
        t += PIXELS_TECLA;
    }
    personatge.src = "./img/personatge/front.png";
    personatge.style.top = t + "px";
}

function adalt() {
    if (t > 55) {
        t -= PIXELS_TECLA;
    }
    personatge.src = "./img/personatge/back.png";
    personatge.style.top = t + "px";
}

function dreta() {
    if (l < 1105) { //MALAMENT: Ajustar
        l += PIXELS_TECLA;
    }
    personatge.src = "./img/personatge/right.png";
    personatge.style.left = l + "px";
}

function esquerra() {
    if (l > 290) {
        l -= PIXELS_TECLA;
    }
    personatge.src = "./img/personatge/left.png";
    personatge.style.left = l + "px";
}

function ataca() {
    personatge.src = "./img/personatge/" + posicio + ".png";
    setTimeout(() => { personatge.src = "./img/personatge/front.png"; }, 200);
}