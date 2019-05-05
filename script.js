// var xqanak = 40;
// var yqanak = 40;
// var matrix = [];
// var side = 20;
// var grassArr = [];
// var greaterArr = [];
// var GishatichArr = [];


// function setup() {
//     for (var y = 0; y < yqanak; y++) {
//         matrix[y] = [x];
//         for (var x = 0; x < xqanak; x++) {
//             if (x + y < 54) {
//                 matrix[y][x] = Math.round(random(0, 3));
//             }
//             else {
//                 matrix[y][x] = 5;

//             }
//         }
//     }
//     for (var y = 0; y < matrix.length; ++y) {
//         for (var x = 0; x < matrix[y].length; ++x) {
//             if (matrix[y][x] == 1) {
//                 var gr = new Grass(x, y, 1);
//                 grassArr.push(gr);
//             }
//             else if (matrix[y][x] == 2) {
//                 var greater = new GrassEater(x, y, 2);
//                 greaterArr.push(greater);
//             }
//             else if (matrix[y][x] == 3) {
//                 var gish = new Gishatich(x, y, 3);
//                 GishatichArr.push(gish);
//             }
//             else if (matrix[y][x] == 8) {

//             }
//         }
//     }

//     frameRate(1);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');

//     var gr = new Grass(1, 2);
//     var emptyCells = gr.chooseCell(0);

//     var greater = new GrassEater(1, 2, 2);
//     var emptyCells = greater.chooseCell(1);

//     var gish = new Gishatich(1, 2, 3);
//     var emptyCells = gish.chooseCell(2);
// }

// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             if (matrix[y][x] == 2) {
//                 fill("yellow");
//                 rect(x * side, y * side, side, side);
//             }
//             if (matrix[y][x] == 3) {
//                 fill("red");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }
//     for (var i in greaterArr) {
//         greaterArr[i].move();
//     }
//     for (var i in GishatichArr) {
//         GishatichArr[i].move();
//     }

// }

