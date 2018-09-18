function LoadScripts() {

    //Declarations
    var memory
    var memory2
    var plus
    var minus
    var times
    var division
    var firstDigit
    var end
    var btn0 = document.querySelector("#btn0");
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var btn3 = document.querySelector("#btn3");
    var btn4 = document.querySelector("#btn4");
    var btn5 = document.querySelector("#btn5");
    var btn6 = document.querySelector("#btn6");
    var btn7 = document.querySelector("#btn7");
    var btn8 = document.querySelector("#btn8");
    var btn9 = document.querySelector("#btn9");
    var btnDecimal = document.querySelector("#btnDecimal");
    var btnPlus = document.querySelector("#btnPlus");
    var btnMinus = document.querySelector("#btnMinus");
    var btnTimes = document.querySelector("#btnTimes");
    var btnDivision = document.querySelector("#btnDivision");
    var btnEqual = document.querySelector("#btnEqual");
    var btnAC = document.querySelector("#btnAC");
    var btnPercent = document.querySelector("#btnPercent");
    var btnSignal = document.querySelector("#btnSignal");


    //Buttons
    btn1.addEventListener("click", PrintNumber);
    btn2.addEventListener("click", PrintNumber);
    btn3.addEventListener("click", PrintNumber);
    btn4.addEventListener("click", PrintNumber);
    btn5.addEventListener("click", PrintNumber);
    btn6.addEventListener("click", PrintNumber);
    btn7.addEventListener("click", PrintNumber);
    btn8.addEventListener("click", PrintNumber);
    btn9.addEventListener("click", PrintNumber);
    btn0.addEventListener("click", PrintNumber);
    btnDecimal.addEventListener("click", PrintNumber);
    btnPlus.addEventListener("click", Plus)
    btnMinus.addEventListener("click", Minus)
    btnTimes.addEventListener("click", Times)
    btnDivision.addEventListener("click", Division)
    btnEqual.addEventListener("click", Equal)
    btnAC.addEventListener("click", AC)
    btnPercent.addEventListener("click", Percent)
    btnSignal.addEventListener("click", ChangeSignal)


    //Input Function
    function PrintNumber(e) {

        var print = e.target.value;

        if (firstDigit) { ClearFirst() }
        if (end) { ClearOp() }
        if (document.querySelector("#screen").textContent === "0" && print !== ".") { document.querySelector("#screen").textContent = "" }
        document.querySelector("#screen").textContent += print
        InputRestriction()
    }


    //Operation Functions
    function Plus() {
        ClearOp();
        memory = Number(document.querySelector("#screen").textContent)
        if (memory !== 0) {
            plus = true
            firstDigit = true
            document.querySelector("#screenAux").textContent = "+"
        }
    }

    function Minus() {
        ClearOp();
        memory = Number(document.querySelector("#screen").textContent)
        if (memory !== 0) {

            minus = true
            firstDigit = true
            document.querySelector("#screenAux").textContent = "-"
        }
    }

    function Times() {
        ClearOp();
        memory = Number(document.querySelector("#screen").textContent)
        if (memory !== 0) {

            times = true
            firstDigit = true
            document.querySelector("#screenAux").textContent = "×"
        }
    }

    function Division() {
        ClearOp();
        memory = Number(document.querySelector("#screen").textContent)
        if (memory !== 0) {

            division = true
            firstDigit = true
            document.querySelector("#screenAux").textContent = "÷"
        }
    }

    function Equal() {
        let result

        if (ActiveOperation()) {
            if (!end) {
                memory2 = Number(document.querySelector("#screen").textContent)
                document.querySelector("#screenAux").innerHTML += "<br>="
                end = true
            }

            if (plus) { result = memory + memory2 }
            if (minus) { result = memory - memory2 }
            if (times) { result = memory * memory2 }
            if (division) { result = memory / memory2 }

            memory = result
            firstDigit = true
            document.querySelector("#screen").textContent = result
            InputRestriction()
        }
    }
    //Function Equal called inside operation buttons
    function Equal2() {
        let result

        if (ActiveOperation()) {

            if (!end) {
                memory2 = Number(document.querySelector("#screen").textContent)
                document.querySelector("#screenAux").innerHTML += "<br>="
                end = true
            }

            if (plus) { result = memory + memory2 }
            if (minus) { result = memory - memory2 }
            if (times) { result = memory * memory2 }
            if (division) { result = memory / memory2 }

            memory = result
            firstDigit = true
            document.querySelector("#screen").textContent = result
            InputRestriction()
        }
    }

    function AC() {
        ClearOp()
        document.querySelector("#screen").textContent = "0"
    }

    function Percent() {
        memory2 = Number(document.querySelector("#screen").textContent)
        let percent = (memory * memory2) / 100
        document.querySelector("#screen").textContent = percent
    }

    function ChangeSignal() {
        let number = document.querySelector("#screen")
        if (number.textContent !== "0") {
            if (number.textContent.substr(0, 1) === "-") { number.textContent = number.textContent.substr(1) }
            else { number.textContent = "-" + number.textContent }
        }
    }


    //Other Functions
    function ActiveOperation() {
        if (plus || minus || times || division) { return true }
        else { return false }
    }

    function ClearFirst() {
        document.querySelector("#screen").textContent = "0"
        firstDigit = false
    }

    function ClearOp() {
        plus = false
        minus = false
        times = false
        division = false
        firstDigit = false
        end = false
        memory = null
        memory2 = null
        document.querySelector("#screenAux").textContent = ""
    }

    function InputRestriction() {
        document.querySelector("#screen").textContent = document.querySelector("#screen").textContent.substr(0, 12)
    }
}