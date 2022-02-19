//Link do Vídeo: https://youtu.be/97i4bn7My0U

function preload(){
  imgNave= loadImage("naves/nave33.png")
 
  
  
}

function setup() {
  createCanvas(728, 410);
  
  personagem = new Personagem(0,200,25,250, imgNave);
  frameRate(30);
  
  
  

}

function draw() {
  
//tela de menu
  if(tela==1){
   
   background(0);
   textSize(25)
   textAlign(CENTER)
    
  
    fill(0, 102, 153);
    rect(140,y,120,30);
  
   fill(225,225,225);
   text("Space Game",200,100);
   text("Play",200,173);
   text("Instruções",200,223)
   text("Créditos",200,273)
  
  
   if(keyIsPressed == false){
    controle=false  
  }
   if(controle == false){
    if(keyIsDown(UP_ARROW) && (y<= 250 && y> 150)){
      y-=50
      controle = true;
    }
    if(keyIsDown(ENTER) && y == 150){
      tela=2
      controle = true
    } else if(keyIsDown(ENTER) && y == 200){
      tela=3
      controle= true
    } else if(keyIsDown(ENTER) && y==250){
      tela=4
      controle= true
    }  
    if(keyIsDown(DOWN_ARROW)&&(y < 250 && y >= 150)){
      y+=50
      controle = true
    }
  }  
}
  
//  Play

   else if(tela == 2){
      {
    background(200)
    
    
  }
    background(100)
   BarraDoJogo();
   DoTiro();
   Inimigos();
   CriaInimigos()
   PersonagemAparece()

      fill(255,255,255)
      text('pressione ESC para voltar',400,400)
      fill(105,200,100);
     
      
     if(keyIsDown(ESCAPE)){tela=1}

  }

//Intruções
  else if(tela==3){
    background(0);
    textSize(15)
    fill(204,102,0);
    rect(10,10,400,200)
    fill(300,300,300)
    text("Habilidade:EF15CI01",100,25)
    text('pressione ESC para voltar',400,400)
    text("Finalidade, Resumo do Jogo e Intruções:", 200, 60)
    text("Este jogo está sendo desenvolvido para ajudar no",200,95)           
    text("raciocínio lógico de crianças do Ensino Fundamental.",200,115)
    text("O jogo consiste em naves desviarem de asteroides",200,135)
    text("ou destruilos, o manuseamento é simples e prático,",200,155)
    text("basta a criança ultilizar as setas do teclado. ",200 ,175)
  if(keyIsDown(ESCAPE)){tela=1}
}

//Créditos
  else if(tela ==4){
    background(0);
   
    fill(225,255,255)
    text('pressione ESC para voltar',400,400)
    fill(204,102,0)
    rect(145,90,450,80)
    rect(145,190,450,90)
    fill(300,300,300);
    text("Cauã César Henrique Gomes da Silva", 365,120);
    text("Progamador",365,150);
    text("Felipe Coelho", 365, 220);
    text("Educador/Orientador",365,255);
    
    
    if(keyIsDown(ESCAPE)){tela=1}
    
  }
  
}