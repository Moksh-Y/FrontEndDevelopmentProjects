function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    circle(20, 20, 40);
    circle(620, 460, 40);
    circle(620, 20, 40);
    circle(20, 460, 40);
    rect(20, 20, 600, 20);
    rect(600, 20, 20, 440);
    rect(20, 20, 20, 440);
    rect(20, 440, 600, 20);
}

function draw() {
    image(video, 50, 50, 540, 380);
    tint(tint_color);
}

function take_snapshot() {
    save('Moksh.png');
}

function Apply_filter() {
    tint_color = document.getElementById("filter_color").value;
}