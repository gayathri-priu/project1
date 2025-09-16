const affirmations = [
  "Gayathri, you are doing amazing things!",
  "You are strong, smart, and unstoppable.",
  "Every step you take is progress.",
  "You radiate confidence and positivity.",
  "Your potential is limitless.",
  "You deserve all the success and happiness.",
  "Breathe in courage, breathe out fear.",
  "You are becoming the best version of yourself.",
];

function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("affirmation").textContent = random;
}

function speakAffirmation() {
  const text = document.getElementById("affirmation").textContent;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
