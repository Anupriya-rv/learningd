let currentStep = 0;
let steps = [];

const lessons = {
    science: [
        "Photosynthesis is how plants make food.",
        "Plants use sunlight, water, and carbon dioxide.",
        "Plants produce glucose and oxygen."
    ],
    math: [
        "Addition means combining numbers.",
        "2 + 3 = 5",
        "Practice simple addition daily."
    ],
    english: [
        "A noun is a naming word.",
        "Examples: book, car, teacher.",
        "Nouns can be common or proper."
    ]
};

function loadSubject() {
    const subject = document.getElementById("subjectSelect").value;
    steps = lessons[subject];
    currentStep = 0;
    showStep();
}

function showStep() {
    const contentDiv = document.getElementById("lessonContent");
    contentDiv.innerHTML = `<p><b>Step ${currentStep + 1}:</b> ${steps[currentStep]}</p>`;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

function increaseText() {
    document.body.style.fontSize = "20px";
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

window.onload = loadSubject;
