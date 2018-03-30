let x = 1;
let y = 1;
let z = 0;

let r = 255;
let g = 255;
let b = 0;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);

    y -= 0.01;

    r -= 0.5;
    g -= 0.5;

    rotateY(radians(45));
    rotateZ(radians(45));

    directionalLight(r, g, b, x, y, z);
    ambientMaterial(255);
    box(100, 100, 100);

}
