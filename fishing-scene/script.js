let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;

// Sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 500, 600);

// Sky Scrapper

const grad = ctx.createLinearGradient(250, 50, 90, 500);

// grad.addColorStop(0, "Grey");
// grad.addColorStop(0, "black");

ctx.fillStyle = "grey";
ctx.beginPath();
ctx.fillRect(250, 50, 90, 500);

// Sky Scrapper 2

ctx.fillStyle = "grey";
ctx.beginPath();
ctx.fillRect(100, 100, 90, 500);

// Sky scrapper 3
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.fillRect(10, 70, 70, 500);

//Sky Scrapper 3

let cloud = document.getElementById("cloud-img");
ctx.drawImage(cloud, 150, 100, 85, 60);
ctx.drawImage(cloud, 50, 25, 100, 70);
ctx.drawImage(cloud, 300, 0, 85, 60);

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(185, 50, 20, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(205, 500, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "lightblue";
ctx.beginPath();
ctx.fillRect(165, 483, 88, 5);

ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(240, 490, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "grey";
ctx.beginPath();
ctx.arc(240, 490, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(170, 490, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "grey";
ctx.beginPath();
ctx.arc(170, 490, 5, 0, 2 * Math.PI);
ctx.fill();
