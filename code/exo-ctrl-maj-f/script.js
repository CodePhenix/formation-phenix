const unlock-button = document.querySelector("#unlock-button");

const container = document.querySelector("#mainContainer");

let mainContainer = "temp";

unlock-button.addEventListener("click", HANDLE-UNLOCK)

// Ancienne version (ne pas toucher) :
/*
function handle-unlock-old() {
    const Result_Div = document.querySelector("#Result");
    const congrats-Card = document.createElement("p");
    congrats-Card.innerText = "Bravo !";
    Result_Div.appendChild(congrats-Card);
}
*/

function greetingsCongrats() {

    const extra = document.createElement("p");
    extra.textContent = "Bienvenue ici !";
    container.appendChild(extra); 

}

const unlockButtonCopy = document.querySelector("#unlock-buton");

function handleUnunnlock() {

    const tempTitle = document.querySelector("h2");
    tempTitle.innerText = "Toujours débloqué !";

    unlockButtonCopy.style.display = "none";

    const duplicateResultBlock = document.querySelector("#new-result");
    duplicateResultBlock.innerText = "Encore bravo !";

    showPictureFunction();
}

function createDebugNote() {
    const note = document.createElement("div");
    note.classList.add("debug-note");
    note.textContent = "Note de debug inutile.";
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
}

function logRandomNumbers() {
    const n1 = generateRandomNumber();
    const n2 = generateRandomNumber();
    const n3 = generateRandomNumber();
    console.log("Debug numbers:", n1, n2, n3);
}

const uselessObject = {
    info: "objet inutile",
    count: 42,
    list: ["A", "B", "C"],
    nested: {
        value: "encore plus inutile"
    },
    print() {
        console.log("Je suis un objet inutile !");
    }
};

function showPicture() {

    const image = document.createElement("img");

    image.classList.add("show-img");

    image.src="fireworks.png";

    image.alt="a picture of colourful fireworks",

    container.appendChild(image);    

}

function unusedLoop() {
    let sum = 0;
    for (let i = 0; i < 50; i++) {
        sum += i;
    }
    return sum;
}

function makeInvisibleCopy() {
    const temp = document.createElement("span");
    temp.textContent = "Copie invisible inutile";
    temp.style.display = "none";
}

const success-Message-Container = document.querySelector("#Result");

function generateFakeMessages() {
    const messages = [
        "Message inutile A",
        "Message inutile B",
        "Message inutile C",
        "Message inutile D"
    ];
    return messages;
}

function fakeInitializer() {
    const data = generateFakeMessages();
    data.forEach(m => console.log("Init:", m));
}

const temporaryList = [];
for (let i = 0; i < 10; i++) {
    temporaryList.push("Item " + i);
}

function logTemporaryList() {
    console.log("Temporary list:", temporaryList);
}

class UtilityHelper {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Bonjour depuis UtilityHelper (${this.name}) !`);
    }

    computeSomething(x, y) {
        return (x + y) * 2;
    }
}

const helperInstance = new UtilityHelper("HelperAlpha");

function simulateProcess() {
    const result = helperInstance.computeSomething(5, 8);
    console.log("Process simulation output:", result);
}

function generateUnusedElements() {
    for (let i = 0; i < 5; i++) {
        const el = document.createElement("p");
        el.textContent = "Élément inutile nº " + (i + 1);
        handle-unlock();
    }
}

// Useless ? :
// const moreUselessData = {
//     status: "idle",
//     counter: 0,
//     increment() {
//         this.counter++;
//     }
// };

function spamConsole() {
    console.log("Spam 1");
    console.log("Spam 2");
    console.log("Spam 3");
}

function prepareFakeEnvironment() {
    const env = {
        version: "0.0.0",
        mode: "fake",
        author: "Personne"
    };
    console.log("Fake environment ready:", env);
}

function simulateLoading() {
    let load = 0;
    while (load < 3) {
        console.log("Loading chunk", load);
        load++;
    }
}

function HANDLE-UNLOCK() {

    const title = document.querySelector("h1");
    title.textContent = "Interface débloquée !";

    unlock-button.style.display = "none";

    success-message-container.textContent = "Bravo, félicitations !";

    document.body.classList.add("unlocked");

    showPicture();

    if (mainContainer === "temp") {
        console.log("C'est la première fois que l'on débloque !");

        mainContainer = "used";
    }

}

class SilentLogger {
    log(message) {
        
    }
}

const silent = new SilentLogger();

function callSilentLogger() {
    silent.log("Ceci ne s'affichera jamais");
}


function showPictureFunction() {
    const fakeImg = document.createElement("date");
    fakeImg.classList.add("show-img-date");
    mainBody.appendChild(fake_img);
}

function FinalGreetings() {

    const lastPara = document.createElement("p");
    lastPara.textContent = "Dernier message !";

    //bodyContainer.appendChild(lastPara);
}
// Not sure to keep it :
/*if (bodyContainer === "temp") {
    console.log("Encore un test de condition !");
}*/
