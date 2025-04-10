const canvas = document.getElementById("lotf");
const ctx = canvas.getContext("2d");

//ctx.font = "48px serif";
//ctx.fillText("Hello world!", 10, 50);

const game = new Game();

function update() {
  game.update();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(ctx);
}
