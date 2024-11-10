const centerX = 200; // Posisi tengah jam (diubah untuk menyesuaikan dengan canvas)
const centerY = 200; // Posisi tengah jam (diubah untuk menyesuaikan dengan canvas)

const lengthHour = 86; // Panjang jarum jam
const widthHour = 10; // Tebal jarum jam

const lengthMinute = 120; // Panjang jarum menit
const widthMinute = 6; // Tebal jarum menit

const lengthSecond = 133; // Panjang jarum detik
const widthSecond = 1; // Tebal jarum detik

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

setInterval(function () {
  const date = new Date();
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Hapus gambar sebelumnya

  // Hitung jam, menit dan detik
  const hour =
    date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
  const minute = date.getMinutes() + date.getSeconds() / 60;

  drawHour(hour); // Gambar jarum jam
  drawMinute(minute); // Gambar jarum menit
  drawSecond(date.getSeconds()); // Gambar jarum detik
  drawMinuteMarkers(); // Gambar titik untuk menit

  // Gambar bulatan di tengah jam
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
  ctx.fill();
}, 1000);

function drawHour(value) {
  const angle = ((value - 6) * Math.PI) / 12;
  const lx = Math.cos(angle) * lengthHour;
  const ly = Math.sin(angle) * lengthHour;

  // Garis putih sebagai border
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + lx, centerY + ly);
  ctx.lineWidth = widthHour + 2; // Lebih tebal dari garis hitam
  ctx.strokeStyle = "#FFFFFF"; // Warna putih
  ctx.lineCap = "round"; // Ujung garis melengkung
  ctx.stroke();

  // Garis hitam utama
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + lx, centerY + ly);
  ctx.lineWidth = widthHour;
  ctx.strokeStyle = "#000000"; // Warna hitam
  ctx.lineCap = "round"; // Ujung garis melengkung
  ctx.stroke();
}

function drawMinute(value) {
  const angle = ((value - 15) * Math.PI) / 30;
  const lx = Math.cos(angle) * lengthMinute;
  const ly = Math.sin(angle) * lengthMinute;

  // Garis putih sebagai border
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + lx, centerY + ly);
  ctx.lineWidth = widthMinute + 2; // Lebih tebal dari garis hitam
  ctx.strokeStyle = "#FFFFFF"; // Warna putih
  ctx.lineCap = "round"; // Ujung garis melengkung
  ctx.stroke();

  // Garis hitam utama
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + lx, centerY + ly);
  ctx.lineWidth = widthMinute;
  ctx.strokeStyle = "#000000"; // Warna hitam
  ctx.lineCap = "round"; // Ujung garis melengkung
  ctx.stroke();
}

function drawSecond(value) {
  const angle = ((value - 15) * Math.PI) / 30;
  const lx = Math.cos(angle) * lengthSecond;
  const ly = Math.sin(angle) * lengthSecond;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + lx, centerY + ly);
  ctx.lineWidth = widthSecond;
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
}
function updateFooterMessage() {
  const footer = document.querySelector("footer");
  const body = document.querySelector("body");
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let message = "";
  let backgroundImage = "";

  if (hours >= 0 && hours < 6) {
    message = "Kok kamu begadang??, tidurrr sanaaa!!! 😡🌙";
    backgroundImage = "url('img/img1.jpg')";
  } else if (hours >= 6 && hours < 10) {
    message = "Morninggg byyy, Waktunya kamu baca Webtoon 😏 📖";
    backgroundImage = "url('img/img2.jpg')";
  } else if (hours >= 10 && hours < 12) {
    message = "Kamu walau lagi malas jangan lupa makannn 🍚";
    backgroundImage = "url('img/img3.jpeg')";
  } else if (hours >= 12 && hours < 15) {
    message = "Bobo siang dulu sih enakk nihh 😋 🛌";
    backgroundImage = "url('img/img4.jpeg')";
  } else if (hours >= 15 && hours < 18) {
    message = "Waktunya mewek buat nonton drakor 🎬";
    backgroundImage = "url('img/img5.jpg')";
  } else if (hours >= 18 && hours < 21) {
    message = "Waktunya nyantuiiii 🌅";
    backgroundImage = "url('img/img6.jpg')";
  } else if (hours >= 21 && hours < 24) {
    message = "Scroll twitter dikit mah enak nih 😎";
    backgroundImage = "url('img/img7.jpg')";
  }

  footer.textContent = message;
  body.style.backgroundImage = backgroundImage;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
}

// Update setiap detik agar selalu sesuai dengan waktu
setInterval(updateFooterMessage, 1000);
updateFooterMessage();
