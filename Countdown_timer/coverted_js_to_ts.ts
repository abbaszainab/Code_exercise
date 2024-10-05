const hourInput = document.querySelector<HTMLInputElement>(".hour");
const minInput = document.querySelector<HTMLInputElement>(".min");
const secInput = document.querySelector<HTMLInputElement>(".sec");

const startButton = document.querySelector<HTMLButtonElement>(".start");
const stopButton = document.querySelector<HTMLButtonElement>(".stop");
const resetButton = document.querySelector<HTMLButtonElement>(".reset");

let timerId: number | null = null; // Change to number | null

function updateTimer(): void {
    if (hourInput && minInput && secInput) {
        if (secInput.value === '0' && minInput.value === '0' && hourInput.value === '0') return;

        if (secInput.value !== '0') {
            secInput.value = (parseInt(secInput.value) - 1).toString();
        } else if (minInput.value !== '0') {
            secInput.value = '59';
            minInput.value = (parseInt(minInput.value) - 1).toString();
        } else if (hourInput.value !== '0') {
            secInput.value = '59';
            minInput.value = '59';
            hourInput.value = (parseInt(hourInput.value) - 1).toString();
        }
    }
}

function stopTimer(): void {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null; // Reset timerId
    }
}

startButton?.addEventListener('click', () => {
    stopTimer(); // Stop any existing timer
    timerId = setInterval(updateTimer, 1000) as unknown as number; // Cast to number
});

resetButton?.addEventListener('click', () => {
    if (hourInput && minInput && secInput) {
        hourInput.value = '0';
        minInput.value = '0';
        secInput.value = '0';
        stopTimer();
    }
});
