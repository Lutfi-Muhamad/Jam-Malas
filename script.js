function updateClock() {
  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");
  const clockElement = document.getElementById("clock");
  const messageElement = document.getElementById("message");

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Menghitung posisi jarum jam, menit, dan detik
  const hoursRotation = (hours % 12) * 30 + minutes / 2;
  const minutesRotation = minutes * 6;
  const secondsRotation = seconds * 6;

  // Mengatur rotasi jarum pada jam analog
  hourHand.style.transform = `rotate(${hoursRotation}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
  secondHand.style.transform = `rotate(${secondsRotation}deg)`;

  setInterval(updateClock, 1000);
}
