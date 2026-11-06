
// SCHNEEFALL
const snow = document.getElementById("snow");

function createSnowflake() {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = "❄";

    flake.style.left = Math.random() * 100 + "%";
    flake.style.fontSize = (10 + Math.random() * 18) + "px";
    flake.style.opacity = 0.3 + Math.random() * 0.7;
    flake.style.animationDuration = (5 + Math.random() * 7) + "s";

    snow.appendChild(flake);

    setTimeout(() => flake.remove(), 12000);
}

setInterval(createSnowflake, 250);


// QUIZ
const questions = [
    {
        question: "In welchem Jahr erschien der erste Film?",
        answers: ["1985", "1990", "2001"],
        correct: 1
    },
    {
        question: "Wie heisst Kevins älterer Bruder?",
        answers: ["Buzz", "Harry", "Marv"],
        correct: 0
    },
    {
        question: "Wie heisst Kevins Mutter?",
        answers: ["Kate", "Anna", "Megan"],
        correct: 0
    },
    {
        question: "Wo lebt die Familie?",
        answers: ["New York", "Winnetka bei Chicago", "London"],
        correct: 1
    },
    {
        question: "Wie heissen die beiden Einbrecher?",
        answers: ["Tom und Jerry", "Harry und Marv", "Max und Leo"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    const buttons = document.querySelectorAll(".answers button");

    buttons.forEach((button, index) => {
        button.textContent = q.answers[index];
        button.disabled = false;
    });

    document.getElementById("result").textContent = "";
    answered = false;
}

function answer(index) {
    if (answered) return;

    answered = true;

    if (index === questions[currentQuestion].correct) {
        score++;
        document.getElementById("result").textContent =
            "Richtig! ⭐ Sehr gut!";
    } else {
        document.getElementById("result").textContent =
            "Leider falsch! ❄";
    }

    document.getElementById("score").textContent =
        "Punkte: " + score + " / " + (currentQuestion + 1);

    document.querySelectorAll(".answers button").forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    if (currentQuestion === questions.length - 1) {
        document.getElementById("question").textContent =
            "Quiz beendet! Du hast " + score + " von 5 Punkten erreicht. 🎄";

        document.querySelector(".answers").style.display = "none";
        document.querySelector(".next-button").textContent = "Nochmal spielen ↻";

        document.querySelector(".next-button").onclick = restartQuiz;
        return;
    }

    currentQuestion++;
    showQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.querySelector(".answers").style.display = "grid";
    document.querySelector(".next-button").textContent = "Nächste Frage →";
    document.querySelector(".next-button").onclick = nextQuestion;

    document.getElementById("score").textContent = "Punkte: 0";
    showQuestion();
}

showQuestion();


// WEIHNACHTSGEHEIMNIS
let clicks = 0;

document.getElementById("secretButton").addEventListener("click", function() {
    clicks++;

    const secretText = document.getElementById("secretText");

    if (clicks < 5) {
        secretText.textContent = "Noch " + (5 - clicks) + " Klicks bis zum Geheimnis ... 🎁";
    } else {
        secretText.textContent =
            "🎄 HO HO HO! Du hast das geheime Weihnachts-Easter-Egg gefunden! ⭐";
        clicks = 0;
    }
});
