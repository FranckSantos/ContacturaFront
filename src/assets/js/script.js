//declaração de variáveis
var canvas;
var ctx;

// Define a variavel para calculo de colisao da bola
var ballRadius = 10;

// Variaveis que definem o estado das teclas pressionadas
var leftPressed = false;
var rightPressed = false;

// Define o tamanho da barra
var paddleHeight = 10;
var paddleWidth = 125;
var paddlePadding = 10;
var paddleX = (600 - paddleWidth)/2;
var paddleY = 640 - paddleHeight - paddlePadding;

// Posicao inicial da bola

var x = 250;
var y = 612;// - 40;

// Velocidade do movimento da bola
var dx = 2;
var dy = 2;

// Configuracoes dos tijolos
var brickRowCount = 13;
var brickColumnCount = 20;
var brickWidth = 30;
var brickHeight = 20;
var brickPadding = 2;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
	bricks[c] = [];
	for(r=0; r<brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1};
	}
}

// Pontuacao do jogador
var score = 0;

	
window.onload = function() {
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");

};

function home(){
	document.getElementById("home").onclick = function () {
	location.href = "http://localhost:4200";
	}
}


function newGame(){
	document.getElementById("newGame").style.display = "none";
	document.getElementById("home").style.display = "none";
	document.getElementById("menuInicio").style.display = "none";
}
	
	function play1() {
		document.getElementById("img").src = "/assets/img/play.png";
	}

	function play2() {
		document.getElementById("img").src = "/assets/img/playOpacity.png";
	}

	function back1() {
		document.getElementById("img2").src = "/assets/img/back.png";
	}

	function back2() {
		document.getElementById("img2").src = "/assets/img/backOpacity.png";
	}

// Funcao executada quando uma tecla for pressionada
function keyDownHandler(e)
{
	
	if (e.keyCode == 39) {

		// Seta direita
		rightPressed = true;	

	} else if (e.keyCode == 37) {

		// Seta esquerda
		leftPressed = true;

	}

}

// Funcao executada quando uma tecla for solta
function keyUpHandler(e)
{

	if (e.keyCode == 39) {
	
		// Seta direita	
		rightPressed = false;	

	} else if (e.keyCode == 37)  {
		
		// Seta esquerda
		leftPressed = false;

	}

}

// Funcao para desenhar a bola
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#ffffff";
	ctx.fill();
	ctx.closePath();
}

// Funcao para desenhar a barra
function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = '#FF0000';
	ctx.fill();
	ctx.closePath();
}

// Funcao responsavel por detectar a colisao da bola com os tijolos
function collisionDetection()
{
	// Percorre todos os tijolos
	for (c = 0; c < brickColumnCount; c++) {
		for (r = 0; r < brickRowCount; r++) {
			b = bricks[c][r];

			// Verifica se o tijolo ainda nao foi destruido
			if (b.status == 1) {

				// Verifica se a bola esta em colisao com o tijolo
				if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {

					// Desativa o tijolo, rebate a bola e incrementa a pontuacao
					dy = -dy;
					b.status = 0;
					score++;

				}

				// Verifica se todos os tijolos foram destruidos (jogador venceu)
				if (score == brickColumnCount * brickRowCount) {
					alert('PARABÉNS, VOCÊ GANHOU!');
					document.location.reload();
				}

			}
		}
	}
}

// Funcao responsavel por exibir a pontuacao do usuario na tela
function drawScore()
{
	ctx.font = '24px arial';
	ctx.fillStyle = '#E71989';
	ctx.fillText('Score: ' + score, 15, 30);
}

// Desenha os tijolos na tela em forma de parede
/*function drawBricks() {
	for(c=0; c<brickColumnCount; c++) {
		for(r=0; r<brickRowCount; r++) {

			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#1a6ca4";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}*/

function drawBricks1() {
	for(c = 1; c < 3; c++) {//colunas
		for(r=1; r < 7; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#6DD47E";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks2() {
	for(c = 3; c < 4; c++) {//colunas
		for(r=5; r < 7; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#6DD47E";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks3() {
	for(c = 4; c < 6; c++) {//colunas
		for(r=1; r < 12; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#6DD47E";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks4() {
	for(c = 7; c < 9; c++) {//colunas
		for(r=1; r < 12; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#1E90FF";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks5() {
	for(c = 9; c < 11; c++) {//colunas
		for(r=1; r < 3; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#1E90FF";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}


function drawBricks6() {
	for(c = 9; c < 11; c++) {//colunas
		for(r=10; r < 12; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#1E90FF";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks7() {
	for(c = 11; c < 13; c++) {//colunas
		for(r = 1; r < 12; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#1E90FF";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}



function drawBricks8() {
	for(c = 14; c < 16; c++) {//colunas
		for(r=1; r < 7; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#FFD55A";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks9() {
	for(c = 16; c < 17; c++) {//colunas
		for(r=5; r < 7; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#FFD55A";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function drawBricks10() {
	for(c = 17; c < 19; c++) {//colunas
		for(r = 1; r < 12; r++) {//linhas
			if (bricks[c][r].status == 1) {
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#FFD55A";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

// Funcao para desenhar os elementos da tela
function mainLoop() 
{	
	//home();
	
	newGame();

	// Limpa o canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Desenha a barra
	drawPaddle();

	// Desenha a bola
	drawBall();

	// Detecta a colisao da bola com os tijolos
	collisionDetection();

	// Exibe a pontuacao na tela
	drawScore();

	// Desenha os tijolos
	//drawBricks();

	drawBricks1();

	drawBricks2();
	
	drawBricks3();

	drawBricks4();

	drawBricks5();

	drawBricks6();

	drawBricks7();

	drawBricks8();

	drawBricks9();

	drawBricks10();
	

	// Incrementa a direcao da bola, ou seja, faz o movimento
	x += dx;
	y += dy;

	// Detecta a colisao da bola com as paredes laterais
	if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}

	// Colisao com o topo da tela
	if(y + dy < ballRadius) {

		// Inverte a direcao da bola
		dy = -dy;

	} else if (y + dy > canvas.height - ballRadius - paddlePadding - paddleHeight) {

		// Colisao com o fim da tela

		// Caso a colisao seja com a barra, a bola e rebatida
		if (x > paddleX && x < paddleX + ballRadius + paddleWidth) {

			dy = -dy;

		} else {
			document.location.reload();
			alert('GAME OVER! \\_(ツ)_/¯');
		}
	}

	// Caso uma tecla esteja pressionada, move a barra de controle
	if (rightPressed && paddleX + paddlePadding < canvas.width - paddleWidth) paddleX += 7;
	if (leftPressed && paddleX - paddlePadding > 0) paddleX -= 7;
}

// Define as funcoes que irão manipular as entradas do jogador
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Chama o loop principal do jogo e define a frequencia com que sera executado

function iniciar(){
	setInterval(mainLoop, 10);
}