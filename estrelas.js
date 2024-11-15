class Estrela {
constructor() {
this.x = Math.random() * window.innerWidth;
this.y = Math.random() * window.innerHeight;
this.velocidade = Math.random() * 2 + 1;
this.tamanho = 5;
this.cor = 'black';
}

atualizar() {
this.y += this.velocidade;

if (this.y > window.innerHeight) {
this.y = 0;
this.x = Math.random() * window.innerWidth;
}
}

desenhar(ctx) {
ctx.fillStyle = this.cor;
ctx.beginPath();
ctx.arc(this.x, this.y, this.tamanho, 0, 2 * Math.PI);
ctx.fill();
}
}

class Animacao {
constructor() {
this.estrelas = [];
this.canvas = document.getElementById('canvas');
this.ctx = this.canvas.getContext('2d');

window.addEventListener('resize', () => {
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
});

this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;

for (let i = 0; i < 100; i++) {
this.estrelas.push(new Estrela());
}

this.animar();
}

animar() {
requestAnimationFrame(() => {
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

for (let i = 0; i < this.estrelas.length; i++) {
this.estrelas[i].atualizar();
this.estrelas[i].desenhar(this.ctx);
}

this.animar();
});
}
}

new Animacao();