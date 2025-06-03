
const motivationTexts = [
  "Мозг очищается. Память возвращается.",
  "Ты не куришь. Ты перехватываешь контроль.",
  "Никотин — баг. А ты — патч.",
  "Каждый день — апдейт. Каждая сигарета — откат.",
  "Не сигарета тебя держит. Это ты её отпускаешь."
];

function getDay() {
  return new Date().getDate();
}

function updateMotivation() {
  const today = getDay();
  document.getElementById("motivationText").innerText = motivationTexts[today % motivationTexts.length];
}

function incrementDays() {
  let days = parseInt(localStorage.getItem("days") || "0");
  days += 1;
  localStorage.setItem("days", days);
  document.getElementById("daysCounter").innerText = days;
}

function resetDays() {
  localStorage.setItem("days", 0);
  document.getElementById("daysCounter").innerText = 0;
  alert("Сбой обнаружен. Но система учится. Возвращайся к перепрошивке.");
}

function toggleGuide() {
  const guide = document.getElementById("guide");
  guide.classList.toggle("hidden");
}

function loadProgress() {
  const days = parseInt(localStorage.getItem("days") || "0");
  document.getElementById("daysCounter").innerText = days;
  updateMotivation();
}

window.onload = loadProgress;
