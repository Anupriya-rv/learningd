let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function checkAnswer(answer) {
    const feedback = document.getElementById("feedback");

    if (answer === true) {
        feedback.innerHTML = "Great job! 🌟 You are correct!";
    } else {
        feedback.innerHTML = "Nice try! Plants need sunlight. Keep learning 💛";
    }
}

function increaseText() {
    document.body.style.fontSize = "20px";
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}
