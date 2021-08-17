import anime from './anime.es.js';

window.human = false;

var canvasEl = document.querySelector('.animated');
var ctx = canvasEl.getContext('2d');
var pointerX = 0;
var pointerY = 0;
var tap =
  'ontouchstart' in window || navigator.msMaxTouchPoints
    ? 'touchstart'
    : 'mousedown';

function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerWidth * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerWidth + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function createCircle(x, y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#ffba08';
  p.radius = 0.1;
  p.alpha = 1;
  p.lineWidth = 6;
  p.draw = function () {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };
  return p;
}

function renderCircle(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateCircle(x, y) {
  var circle = createCircle(x, y);
  anime.timeline().add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(1200, 1800),
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderCircle,
    offset: 0,
  });
}

var render = anime({
  duration: Infinity,
  update: function () {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  },
});

document.addEventListener(
  tap,
  function (e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateCircle(pointerX, pointerY);
  },
  false,
);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateCircle(
    anime.random(centerX - 100, centerX + 100),
    anime.random(centerY - 100, centerY + 100),
  );
  anime({ duration: 200 }).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
