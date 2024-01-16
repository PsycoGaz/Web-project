const Questions = [
    {
      q: "What does HTML stand for?",
      a: [
        { text: "Hyper Text Markup Language", isCorrect: true },
        { text: "Hyperlinks and Text Markup Language", isCorrect: false },
        { text: "Home Tool Markup Language", isCorrect: false },
        { text: "Hyperlinking Text Markup Language", isCorrect: false }
      ]
    },
    {
      q: "Which HTML tag is used to define an unordered list?",
      a: [
        { text: "<ul>", isCorrect: true },
        { text: "<ol>", isCorrect: false },
        { text: "<li>", isCorrect: false },
        { text: "<u>", isCorrect: false }
      ]
    },
    {
      q: "Which property is used in CSS to change the text color of an element?",
      a: [
        { text: "text-color", isCorrect: false },
        { text: "color", isCorrect: true },
        { text: "font-color", isCorrect: false },
        { text: "text-style", isCorrect: false }
      ]
    },
    {
      q: "What is the purpose of the 'src' attribute in the <script> tag?",
      a: [
        { text: "To specify the script's location", isCorrect: true },
        { text: "To define the script's style", isCorrect: false },
        { text: "To name the script", isCorrect: false },
        { text: "To describe the script's functionality", isCorrect: false }
      ]
    },
    {
      q: "Which JavaScript method is used to add a new item to the end of an array?",
      a: [
        { text: "push()", isCorrect: true },
        { text: "addToEnd()", isCorrect: false },
        { text: "append()", isCorrect: false },
        { text: "add()", isCorrect: false }
      ]
    },
    {
      q: "How do you write a comment in CSS?",
      a: [
        { text: "// This is a comment", isCorrect: false },
        { text: "<!-- This is a comment -->", isCorrect: false },
        { text: "/* This is a comment */", isCorrect: true },
        { text: "# This is a comment", isCorrect: false }
      ]
    },
    {
      q: "Which of the following is NOT a valid JavaScript variable name?",
      a: [
        { text: "2names", isCorrect: true },
        { text: "_first_and_last_names", isCorrect: false },
        { text: "FirstAndLast", isCorrect: false },
        { text: "None of the above", isCorrect: false }
      ]
    },
    {
      q: "Which of the following is NOT a valid CSS length unit?",
      a: [
        { text: "px", isCorrect: false },
        { text: "cm", isCorrect: false },
        { text: "em", isCorrect: false },
        { text: "vm", isCorrect: true }
      ]
    },
    {
      q: "Which of the following is NOT a valid HTML tag?",
      a: [
        { text: "<a>", isCorrect: false },
        { text: "<p>", isCorrect: false },
        { text: "<div>", isCorrect: false },
        { text: "<src>", isCorrect: true }
      ]
    },
    {
      q: "Which of the following is NOT a valid JavaScript data type?",
      a: [
        { text: "string", isCorrect: false },
        { text: "boolean", isCorrect: false },
        { text: "number", isCorrect: false },
        { text: "object", isCorrect: true }
      ]
    }
  ];

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}