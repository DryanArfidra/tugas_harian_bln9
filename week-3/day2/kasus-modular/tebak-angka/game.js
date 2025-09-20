let targetNumber;
let attempts = 0;
let maxAttempts = 5;

export function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    console.log("Game dimulai! Tebak angka antara 1-100.");
}

export function guessNumber(guess) {
    attempts++; 

    if (guess === targetNumber) {
        return `benar! Kamu menebak angka ${targetNumber} dengan ${attempts} percobaan.`;
    } else if (attempts >= maxAttempts) {
        return `Game over! Angka yang benar adalah ${targetNumber}.`;
    }
}
const hint = guess < targetNumber ? "terlalu rendah" : "terlalu tinggi";
    return `Salah, tebakanmu ${hint}. Percobaan ke-${attempts} dari ${maxAttempts}.`;
