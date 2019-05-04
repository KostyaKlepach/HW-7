let button = document.querySelectorAll('button');
let keyA = new Audio("audio/1.mp3");
let keyS = new Audio("audio/2.mp3");
let keyD = new Audio("audio/3.mp3");
let keyF = new Audio("audio/4.mp3");
let keyG = new Audio("audio/5.mp3");
let keyH = new Audio("audio/6.mp3");
let keyJ = new Audio("audio/7.mp3");
let keyK = new Audio("audio/8.mp3");

let play = (key,btn,audio) => {
	document.addEventListener('keydown', function(event){
		if (event.keyCode == key) {
			audio.currentTime = 0;
			audio.play();
			btn.classList.add('active');
		} 
	});
	document.addEventListener('keyup', (event)=>{
		btn.classList.remove('active');
	})	
}
play(65,button[0],keyA);
play(83,button[1],keyS);
play(68,button[2],keyD);
play(70,button[3],keyF);
play(71,button[4],keyG);
play(72,button[5],keyH);
play(74,button[6],keyJ);
play(75,button[7],keyK);

function mouse(btn,audio) {
	btn.addEventListener('mousedown', ()=>{
		audio.currentTime = 0;
		audio.play();
	});
}
mouse(button[0],keyA);
mouse(button[1],keyS);
mouse(button[2],keyD);
mouse(button[3],keyF);
mouse(button[4],keyG);
mouse(button[5],keyH);
mouse(button[6],keyJ);
mouse(button[7],keyK);