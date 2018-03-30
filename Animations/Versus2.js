let vs = document.getElementById("vs");
let north = document.getElementsByClassName("north")[0];
let south = document.getElementsByClassName("south")[0];

let teams = {
    north: [
        "Newcastle-United",
        "Liverpool",
        "Everton",
        "Manchester-United",
        "Manchester-City",
        "Huddersfield-Town",
        "Burnley",
        "Stoke-City",
        "Leichester-City",
        "West-Bromwich-Albion"
    ],
    south: [
        "Chelsea",
        "Tottenham-Hotspurs",
        "Arsenal",
        "West-Ham-United",
        "Crystal-Palace",
        "Bournemouth",
        "Southampton",
        "Brighton-And-Hove-Albion",
        "Watford",
        "Swansea-City"
    ]
}

let count = 0;
let t = 0.5;

let width = 250;
let height = 250;
let vsSize = 100;

let _top = 30;
let left = 20;
let right = 27;

function setup() {
    frameRate(60);
    north.className += " " + teams.north[count];
    south.className += " " + teams.south[count];
}

function draw() {
    if (frameCount % (t*60) == 0 && count < 10) {
        count++;
        north.className += " " + teams.north[count];
        south.className += " " + teams.south[count];
    }

/*
    if (width >= 50 && height >= 50 && vsSize >= 50) {
        width -= 0.1;
        height -= 0.1;
        vsSize -= 0.1;

        north.style.width = width + "px";
        north.style.height = height + "px";
        south.style.width = width + "px";
        south.style.height = height + "px";
        vs.style.fontSize = vsSize + "px";

        _top += 0.01;
        left += 0.01;
        right += 0.01;

        north.style.top = _top + "%";
        south.style.top = _top + "%";
        north.style.left = left + "%";
        south.style.right = right + "%";

    }
*/

}
