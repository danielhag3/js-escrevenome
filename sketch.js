function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
   backgroud(220);
  }
   function draw() {
       backgroud("white");
     
     rect(0, 10, 100, 150);
  }
  function draw()  {
   backgroud("white");
    
    fill("red");
    rect(0, 10, 100, 150); 
  }
  function draw() {
    backgroud(220);
    
    stoke("blue");
    fill("red");
    rect (mouseX, mouseY, 100, 150)
  }
  function draw() {
   backgroud(220);
    
    stoke("blue");
    fill("red");
    
    console.log(mouseIsPressed);
    rect(mouseX, mouseY, 100, 150);
  }
  function draw() {
    // cria uma tela de 400px de largura por 400px de altura 
    createCanvas(400, 400);
  }
   function setup() {
     createCanvas(400, 400);
     background("white");
   }
  
   function draw() {
    stroke("blue");
    fill("red");
     
     
     if (mouseIsPressed)  {
       rect(mouseX, mouseY, 20, 35);
     }
  }