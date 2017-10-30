var array = [
            [1,2,3 ],
            [4,5,6 ],
            [7,8,'']
            ];
var colors= [
            ['#FA5858', '#ACFA58', '#CC2EFA'],
            ['#FAAC58', '#2ECCFA', '#FA58D0'],
            ['#F7D358', '#2E64FE', '#FE2E64']
            ];
var rand=0;
var movimientos='0';
window.onload = function(e){
 array=shuffle(array);
 draw(array);
}

function siguiente(){
  draw(array);
}

function draw(array) {
  var canvas = document.getElementById('tablero');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    n=0;x=0;y=0;
    for (var i = 0; i <= 336; i=i+168) {
      for (var j = 0; j <= 336; j=j+168) {
        ctx.fillStyle=colors[x][y];
        ctx.fillRect(i,j, 168, 168);
        ctx.font= "64px Arial"
        ctx.fillStyle = '#fff';
        ctx.fillText(array[x][y],(i+61),(j+102));
        x++;
      }
      x=0;
      y++;
    }
  }

  var moves = document.getElementById('moves');
  if (moves.getContext) {
    var ctx2 = moves.getContext('2d');
    ctx2.clearRect(0, 0, moves.width, moves.height);
    ctx2.font= "64px Arial";
    ctx2.fillText(movimientos,60,120);
}
 NumMovimientos(array);
}

function EspacioBlanco(array){
 var espacioi;
 var espacioj;
  for (var i = 0; i <3; i++) {
    for (var j = 0; j <3; j++) {
    if(array[i][j]===''){
    espacioi=i;
    espacioj=j;
  }
  }
  }
  return [espacioi,espacioj]
}

function Posicion(array,valor){
 var posi;
 var posj;
  for (var i = 0; i <3; i++) {
    for (var j = 0; j <3; j++) {
    if(array[i][j]===valor){
    posi=i;
    posj=j;
  }
  }
  }
  return [posi,posj]
}

function NumMovimientos(array){

var PosEspacio = EspacioBlanco(array);
var PosEspacioi = PosEspacio[0];
var PosEspacioj = PosEspacio[1];
var numPosib;
if (PosEspacioi!==1 && PosEspacioj!==1) {
  numPosib=2;
Opciones_2(array,PosEspacio);
}else if (PosEspacioi==1 && PosEspacioj==1) {
  numPosib=4;
  Opciones_4(array,PosEspacio);
  }else if (PosEspacioi==1 || PosEspacioj==1) {
  numPosib=3;
  Opciones_3(array,PosEspacio);
  }
}

function Opciones_2(array,PosEspacio){
//  alert(PosEspacio);
  var PosEspacioi = PosEspacio[0];
  var PosEspacioj = PosEspacio[1];
  //Punto 0,0
  if (PosEspacioi==0 && PosEspacioj==0) {
    var myArray=[array[0][1],array[1][0]];
    var menor = Menor(myArray);
    var Pos= Posicion(array,menor);
    array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
    array[Pos[0]][Pos[1]]="";
    movimientos++;
  }
  //Punto 2,0
  if (PosEspacioi==2 && PosEspacioj==0) {
    var myArray=[array[2][1],array[1][0]];
    var mayor = Mayor(myArray);
    var Pos= Posicion(array,mayor);
    array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
    array[Pos[0]][Pos[1]]="";
    movimientos++;
  }

  //Punto 0,2
  if (PosEspacioi==0 && PosEspacioj==2) {
    var myArray=[array[0][1],array[1][2]];
    var menor = Menor(myArray);
    var Pos= Posicion(array, menor);
    array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
    array[Pos[0]][Pos[1]]="";
    movimientos++;
  }
    //Punto 2,2
    if (PosEspacioi==2 && PosEspacioj==2) {
      var myArray=[array[2][1],array[1][2]];
      var mayor = Mayor(myArray);
      var Pos= Posicion(array,mayor);
      array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
      array[Pos[0]][Pos[1]]="";
      movimientos++;
    }
}

function Opciones_3(array,PosEspacio){
  var PosEspacioi = PosEspacio[0];
  var PosEspacioj = PosEspacio[1];
  //Punto (1,0)
  if(PosEspacioi===1&&PosEspacioj===0){
    var myArray=[array[0][0],array[1][1],array[2][0]];
    var mayor = Mayor(myArray);
    var Pos= Posicion(array,mayor);
    array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
    array[Pos[0]][Pos[1]]="";
    movimientos++;
  }
  //Punto (2,1)
  if(PosEspacioi===2&&PosEspacioj===1){
    var myArray=[array[2][2],array[1][1],array[2][0]];
    var menor = Menor(myArray);
    var Pos= Posicion(array,menor);
    array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
    array[Pos[0]][Pos[1]]="";
    movimientos++;
}

//Punto (1,2)
if(PosEspacioi===1&&PosEspacioj===2){
  var myArray=[array[2][2],array[1][1],array[0][2]];
  var mayor = Mayor(myArray);
  var Pos= Posicion(array,mayor);
  array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
  array[Pos[0]][Pos[1]]="";
  movimientos++;
}

//Punto (0,1)
if(PosEspacioi===0&&PosEspacioj===1){
  var myArray=[array[0][0],array[1][1],array[0][2]];
  var menor = Menor(myArray);
  var Pos= Posicion(array,menor);
  array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
  array[Pos[0]][Pos[1]]="";
  movimientos++;
}
}

function Opciones_4(array,PosEspacio){
  var PosEspacioi = PosEspacio[0];
  var PosEspacioj = PosEspacio[1];

//Punto (1,1)

var myArray=[array[0][1],array[1][0],array[1][2],array[2][1]];
if(rand===0){
  var mayor = Mayor(myArray);
  var Pos= Posicion(array,mayor);
  array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
  array[Pos[0]][Pos[1]]="";
  movimientos++;
  rand++;
}else {
  var menor = Menor(myArray);
  var Pos= Posicion(array,menor);
  array[PosEspacioi][PosEspacioj]=array[Pos[0]][Pos[1]];
  array[Pos[0]][Pos[1]]="";
  movimientos++;
  rand=0;
}
}


function Mayor(array){
  var max=Math.max.apply(null, array);
  return (max);
}

function Menor(array){
  var min=Math.min.apply(null, array);
  return(min);
}

function shuffle(array){
  array=shufflex(array);
  array=shuffley(array);
  return array;
}


function shufflex(array){
  for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
   return array;
}

function shuffley(array) {
   for(var i = 0; i< array.length; i++) {
      k = array[i].length;
      while(k--){
           j = Math.floor(Math.random() * (array.length - 1));
           tempk = array[i][k];
           tempj = array[i][j];
           array[i][k] = tempj;
           array[i][j] = tempk;
      }
   }
    return array;
}
