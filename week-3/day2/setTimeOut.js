// pesan tertunda

function sayHello() {
    setTimeout(() => {
        console.log("Hello, world!");
    }, 3000);
}
sayHello();

//hitung mundur 5 detik
let countdown = 5;

function hitungMundur() {
    console.log(count);
    count--;

    if (count >= 1) {
        setTimeout(hitungMundur, 1000);
    }
}
setTimeout(hitungMundur, 1000);

//simulasi loading
console.log("Loading...");
setTimeout(() => {
    console.log("Data berhasil dimuat!");
}, 2000);

//pesan bertahap
console.log("Mulai proses...");
setTimeout(() => {
    console.log("Proses tahap 1 selesai."); 
    setTimeout(() => {
        console.log("Proses tahap 2 selesai.");
    }, 2000);
}, 2000);

// simulasi alarm
setTimeout(() => {
    console.log("Alarm! Waktunya bangun!");
}, 5000);