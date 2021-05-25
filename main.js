canvas = document.getElementById("CarRacingGame");
ctx = canvas.getContext("2d");
car_1_height = 266;
car_1_width = 400;
car_1_img = "tunedsupra2.jpg";
car_1_x = 10;
car_1_y = 10;
car_2_height = 225;
car_2_width = 400;
car_2_img = "silviaS16.jpg";
car_2_x = 10;
car_2_y = 600;
background_1 = "somethingy.gif";
background_2 = "goszilla gtr >=).jpeg";
window.onload = add();
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_2;

    car_1imgTag = new Image();
    car_1imgTag.onload = uploadCar1;
    car_1imgTag.src = car_1_img;

    car_2imgTag = new Image();      
    car_2imgTag.onload = uploadCar2;
    car_2imgTag.src = car_2_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    console.log('in uploadCar1');
    console.log(car_1_x + "this is car 1 x");
    ctx.drawImage(car_1imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}
function uploadCar2() {
    console.log('in uploadCar2');
    console.log(car_2_x + "this is car 2 y");
    ctx.drawImage(car_2imgTag, car_2_y, car_2_x, car_2_width, car_2_height);
}
canvas.addEventListener("keydown", keydown_event);
function keydown_event(){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keyPressed == 38){
        car_1up();
        console.log("up arrow pressed");
    }
    if(keyPressed == 40){
        car_1down();
        console.log("down arrow pressed");
    }
    if(keypressed == 37){
        car_1left();
        console.log("left arrow pressed");
    }
    if(keyPressed == 39){
        car_1right();
        console.log("right arrow pressed");
    }
    if(keypressed == 87){
        car_2up();
        console.log("w key pressed");
    }
    if(keypressed == 65){
        car_2left();
        console.log("a key pressed");
    }
    if(keypressed == 83){
        car_2down();
        console.log("s key pressed");
    }
    if(keypressed == 68){
        car_2right();
        console.log("d key pressed");
    }
}