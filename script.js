
function login() {
    let name = document.getElementById("student").value;

    if (name == "") {
        document.getElementById("message").innerHTML =
            "Please enter your name";
    } else {
        document.getElementById("message").innerHTML =
            "Welcome " + name;
        document.getElementById("login").style.display = "none";
        document.getElementById("exam").style.display = "block";
    }
}

function calculateResult() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value == "JavaScript") {
        score++;
    }

    if (q2 && q2.value == "p") {
        score++;
    }

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / 2";
}
