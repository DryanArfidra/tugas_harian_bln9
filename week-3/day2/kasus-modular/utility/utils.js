export function cekGanjilGenap(num) {
    return num % 2 === 0 ? "genap" : "ganjil";
}

export function balikString(str) {
    return str.spilt('').reverse().join('');
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}