function back(){
    window.location="home.html";
}
img="";
status="";
function preload(){
img=loadImage("medicine.jpg");
}
function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("Dog",40,70);
noFill();
stroke("#FF0000");
rect(30,60,400,300);

fill("#FF0000");
text("Cat",320,120);
noFill();
stroke("#FF0000")
rect(300,100,300,300)
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: detecting objects";
}
function modelLoaded(){
    console.log("The model has been loaded. Thank you for your patience:)");
    status=true;
    objectDetector.detect(img, gettheresults);
}
function gettheresults(error, results){
if (error) {
    console.error();(error);
}
else {
console.log(results);
}
}