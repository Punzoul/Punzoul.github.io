function setup() {
  createCanvas(600,600);
}
function draw() {
 
background(204);
//back hair
fill(0);
beginShape();
vertex(300, 300);//back hair
vertex(360, 360);//back hair
vertex(370, 370);//back hair
vertex(375, 380);//back hair
vertex(415, 460);//back hair
vertex(465, 480);//back hair
vertex(490, 460);//back hair
vertex(500, 420);//back hair
vertex(490, 410);//back hair
vertex(480, 400);//back hair
vertex(460, 365);//back hair
vertex(475, 340);//back hair
vertex(490, 320);//back hair
vertex(420, 330);//back hair
vertex(360, 320);//back hair
vertex(300, 300);//back hair
endShape();

//body
fill(193,66,66);
rect(170,350,230,270);

//head
fill(245, 213, 183);
ellipse(280,245,250,280);

//left eye
fill(0);
ellipse(220,243,45,45);
fill(225);
ellipse(210,240,20,20);

//right eye
fill(0);
ellipse(340,244,45,45);
fill(225);
ellipse(350,240,20,20);

//glasses
noFill();
ellipse(220,243,100,100);
ellipse(340,244,100,100);

//left side hair
fill(0);
beginShape();
vertex(230, 180);
vertex(240, 110);
vertex(220, 100);
vertex(140, 170);
vertex(150, 200);
vertex(130, 230);
vertex(170, 210);
vertex(230, 180);
endShape();

//top strand
fill(0);
beginShape();
vertex(230, 180);
vertex(240, 70);
vertex(245, 75);
vertex(260, 60);
vertex(270, 70);
vertex(280, 73);
vertex(230, 180);
endShape();

//hair bans
fill(0,0,0);
beginShape();
vertex(230, 180);
vertex(260, 90);
vertex(280, 70);
vertex(350, 90);
vertex(370, 100);
vertex(400, 130);
vertex(450, 200);
vertex(430, 244);
vertex(350, 200);
vertex(230,180);
endShape();
}
