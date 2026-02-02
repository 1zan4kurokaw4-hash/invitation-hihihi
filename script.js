const messages = [
    "Sure ka?",
    "Like really sure??",
    "Sigurado kana gud?",
    "Hermosa, please😣...",
    "Pag isipan mo please!",
    "Pag dumiri ka ma sad talaga ako nyan...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, di nak mamirit🙄...",
    "Balit joke la, sigi na please!🥺"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}