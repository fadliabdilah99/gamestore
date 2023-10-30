const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 400);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = "Total:" +0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
  let count = 10;
    const countdown = setInterval(() => {
      document.getElementById("countdown").textContent = count;
      count--;
      if (count < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").textContent = "Waktu habis";
      }
    }, 1000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = "Total:" +skor;
}

tikus.forEach(t => {
  t.addEventListener('click', pukul);
});

function refreshPage(){
  location.reload();
} 

var myButton = document.querySelector('.mulai');
myButton.addEventListener('click', hilangkanTombol);
function hilangkanTombol() {
   myButton.style.display = 'none';
   Game.style.display = 'block';
   Keterangan.style.display = 'block'
   Keterangan.style.display = 'flex'
}
var Game = document.getElementById('game')
var Keterangan = document.getElementById('keterangan')
Game.style.display = 'none'
Keterangan.style.display = 'none'
