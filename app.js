document.addEventListener('DOMContentLoaded', (event) => {
    startProgram();
});

function startProgram() {
    try {
        printSlowly("Sveiks Artūr! Vai Tev jau dirsa putās?", () => {
            promptUser("Apstiprini ar “Y”/“N”", "y", () => {
                printSlowly("Prieks dzirdēt, ka esi jau daļēji sagatavojies savam Ārchi Bacheloru! Turpmākajā ziņā būs uzrādīta informācija par laiku un lokāciju, kurā norisnāsies Tava pēdējā balīte kā brīvam vīrietim.", () => {
                    promptUser("Apstiprini ar “OK”", "ok", () => {
                        let eventDate = new Date(2024, 5, 15, 7, 0, 0); // Month is 0-based
                        let timeLeft = calculateTimeLeft(eventDate);
                        printSlowly(`Pickup point: Pie Tava poģa. Time: 07:00 (Atlikušais laiks: ${timeLeft}). Drescode: Balts krekls, melni fancy šorti, bet lai nav žēl sasmērēt.`, () => {
                            promptUser("Apstiprini ar “OK”", "ok", () => {
                                printSlowly("Par ēdienu, dzērienu un aktivitātēm būsim parūpējušies mēs! No Tevis sagaidām izpildītu savu pirmo uzdevumu – savākt izdzīvošanas somu, lai Tu vispār būtu spējīgs šo dienu izdzīvot.", () => {
                                    promptUser("Apstiprini ar “OK”", "ok", () => {
                                        printSlowly("! IEVĒRO - neko no sarakstā esošajām mantām Tu nedrīksti pirkt: viss ir jāatrod, jāsamaina vai jānozog", () => {
                                            promptUser("Apstiprini ar “OK”", "ok", () => {
                                                printSlowly("Enjoy", () => {
                                                    setTimeout(() => {
                                                        window.location.href = "https://docs.google.com/spreadsheets/d/1j5WrP7EPJCp1cmDUqReDPdJppHPThLmkMUS7lTwKsac/edit#gid=0";
                                                    }, 800);
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    } catch (error) {
        console.error(error);
    }
}

function printSlowly(text, callback) {
    let index = 0;
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "";
    function printNextChar() {
        if (index < text.length) {
            outputDiv.innerHTML += text.charAt(index);
            index++;
            setTimeout(printNextChar, 15);
        } else {
            outputDiv.innerHTML += "<br>";
            callback();
        }
    }
    printNextChar();
}

function promptUser(message, expectedResponse, callback) {
    let inputContainer = document.getElementById('inputContainer');
    let userInput = document.getElementById('userInput');
    let outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML += message + "<br>";
    inputContainer.style.display = "block";
    userInput.value = "";
    userInput.focus();

    function handleInput() {
        if (userInput.value.trim().toLowerCase() === expectedResponse) {
            inputContainer.style.display = "none";
            callback();
        } else {
            outputDiv.innerHTML += "Izlasi vēlreiz un spied “" + expectedResponse.toUpperCase() + "”<br>";
            userInput.value = "";
            userInput.focus();
        }
    }

    userInput.onkeypress = function(event) {
        if (event.key === "Enter") {
            handleInput();
        }
    };

    userInput.nextElementSibling.onclick = handleInput;
}

function calculateTimeLeft(eventDate) {
    let now = new Date();
    let timeDifference = eventDate - now;
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return `${days} dienas ${hours} stundas un ${minutes} minūtes`;
}