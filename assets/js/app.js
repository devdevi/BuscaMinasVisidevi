//creamos ujn arreglo
var tableBombIt = [
					' ',//primer valor espacio vacio
					'*',//segundo valor una bomba
					'1',//un numero
					' ',
					'\n',
					' ',
					' ',
					'*',
					'2',
					'\n',
					'1',
					'*',
					' ',
					' ',
					'\n',
					' ',
					'3',
					'*',
					' '
					];
//arreglo con las convinaciones que nos pidieron

var containerBombIt = document.getElementById('container-bomb-it');
var bombIt = document.getElementById('bomb-it');
containerBombIt.appendChild(bombIt);
//funcion que va a recivir un arreglop
var drawGameZone = function(array){
	//pintar un div por cada uno de estos arreglos
	for (i=0; i< tableBombIt.length; i++){
		//por cada uno de estos espacios crea algo 
		var cell = document.createElement('div');
		//queremos que creen estiquetas que permitan irnos abajo
		var enter = document.createElement('br');
		//si pasa esto crea un div si es de otro tipo cre un salto de linea

		//creamos un flujo condicional
		if(array[i] == '1' || array[i] == '2' || array[i] == '3' ){
			 //la celda creaada una clase llamada number
		 cell.className = 'number';
		 //que a la celda  creada le decimos que en su interior tenga el resutaldo que tiene el arreglo
		 cell.innerText = array[i];
		 //al darle click a la celda aparesca el numero 
		 cell.onclick = showNumber;
		}else if (array[i] == ' ' ){
			//la celda crea una clase llamada emptySpace
			cell.className = 'emptySpace';
			cell.onclick = changeColor;

		}else if (array[i] == '*' ){
			//la celda crea una clase llamada bomb
			cell.className = 'bomb';
			//cuando crees la celda agrega un evento con click que sea igual a bomb it;
			cell.onclick = boom;
		}else if (array[i] == '\n'){
		 	bombIt.appendChild(enter);
		 	continue;
		 	//luego de cumplir las condiciones continua;
		};
		//afuera de las condiciones dentro de el for 
		bombIt.appendChild(cell);	
	};
	addBtnRestart();
};


var showNumber = function(){
	this.className = 'number numberShow'/* this. dice a esta clase..las clases se leen por casacadas osea respeta a la NumberSHow*/
};
var changeColor =function(){
	this.style.backgroundColor = 'black';
};
 var boom = function(){
 	containerBombIt.removeChild(bombIt);
 	containerBombIt.innerHTML ='<img  alt="BOOM!" src="assets/images/bomb.gif ">'
 	addBtnRestart();
 	alert('LOSER!');
 };
//creando boton restart
 var addBtnRestart = function(){
 	var btnRestart = document.createElement('button');
 	btnRestart.innerText = 'Restart!!';
 	btnRestart.addEventListener('click',reStart);
 	containerBombIt.appendChild(btnRestart)


 };
 var reStart = function(){
 	location.reload();
 }
drawGameZone(tableBombIt);
alert('Partida Nueva!')