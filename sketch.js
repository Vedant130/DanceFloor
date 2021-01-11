var canvas;
var music;
var s1, s2,s3,s4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    s1 = createSprite(100,600,200,20);
    s1.shapeColor=("blue");

    s2 = createSprite(300,600,200,20);
    s2.shapeColor=("orange");

    s3 = createSprite(500,600,200,20);
    s3.shapeColor=("red");

    s4 = createSprite(700,600,200,20);
    s4.shapeColor=("green");

    ball = createSprite(random(20,750),20,30,30);
    ball.velocityX = 6;
    ball.velocityY = 5;
    ball.shapeColor=("white");
}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(s1) && ball.bounceOff(s1)) {
        ball.shapeColor=("blue");
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(ball.isTouching(s2) && ball.bounceOff(s2)) {
        ball.shapeColor=("orange");
    }

    if(ball.isTouching(s3) && ball.bounceOff(s3)) {
        ball.shapeColor=("red");
    }

    if(ball.isTouching(s4) && ball.bounceOff(s4)) {
        ball.shapeColor=("green");
        music.play();
    }

    drawSprites();


    //add condition to check if box touching surface and make it box
}
