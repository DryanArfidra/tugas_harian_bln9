import { startGame,  } from "./game.js";

console.log(startGame());

const tebakan = [50, 75, 62, 68, 70];
tebakan.forEach((num) => {
    console.log(`Hasil tebakan: ${guessNumber(num)}`);
}
);
