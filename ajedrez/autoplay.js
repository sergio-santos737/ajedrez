var matriztablero = new Array(8);
var posx;
var posy;
var movimiento = 0;

function autoplay() {
    for (i = 0; i < 8; i++) matriztablero[i] = new Array(8);
    llenar_espacios();
}


function llenar_espacios() {
    for (x = 1; x < 8; x++) {
        for (y = 1; y < 8; y++)
            matriztablero[x][y] = 0;
    }
}

function cheeckcell(x, y) {
    celda(x, y);
}

function celda(x, y) {
    checktrue = false;
    valor = document.getElementById("c" + x + y).innerText;
    difx = x - posx;
    dify = y - posy;

    if (valor == "♟" && movimiento == (0) && matriztablero[x][y] == 0) {
        matriztablero[x][y] = 1;
        movimiento = 1;
        posx = x;
        posy = y;
    }
    if (movimiento == 1 && matriztablero[x][y] == 0) {
        if (difx == 0 && dify == -2) { checktrue = true; }
        if (difx == 0 && dify == -1) { checktrue = true; }
        if (checktrue) paintpeon(x, y); movimiento = 0;
    }

    if (valor == "♘" && movimiento == (0) && matriztablero[x][y] == 0) {
        matriztablero[x][y] = 1;
        movimiento = 1;
        posx = x;
        posy = y;
    }
    if (valor == "♘" && movimiento == 1 && matriztablero[x][y] == 0) {
        if (difx == 1 && dify == -2) { checktrue = true; }
        if (difx == 2 && dify == -1) { checktrue = true; }
        if (difx == 1 && dify == 1) { checktrue = true; }
        if (difx == 2 && dify == 2) { checktrue = true; }

        if (difx == -2 && dify == -2) { checktrue = true; }
        if (difx == -1 && dify == -1) { checktrue = true; }
        if (difx == -2 && dify == 1) { checktrue = true; }
        if (difx == -1 && dify == 2) { checktrue = true; }

        if (checktrue) paintpeon(x, y); movimiento = 0;
    }

}

function paintcell(x, y, color) {
    Bloque = document.getElementById("c" + x + y);
    Bloque.style.background = color;
}

function paintpeon(x, y) {
    Bloque = document.getElementById("c" + x + y);
    Bloque.innerHTML = "<span>&#x265F;</span>";
}

/*
0->libre
1->ocupado
*/

autoplay();