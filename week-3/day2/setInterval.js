// jam digital
const jamdigital = setInterval(() => {
    const sekarang = new Date();
    console.log(sekarang.toLocaleTimeString());
}, 1000);

// hitung mundur 
let hitung = 10;

const hitungMundur = setInterval(() => {
    console.log(hitung);
    hitung--;

    if (hitung < 0) {
        clearInterval(hitungMundur);
        console.log("Waktu habis!");
    }   
}, 1000);

// nontifikasi berkala
const notifikasi = setInterval(() => {
    console.log("Jangan lupa istirahat sejenak!");
}, 6000);

// simulasi loading 
let loading = "Loading";
let titikCount = 0;

const simulasiloading = setInterval(() => {
    console.log(loading);
    loading += ".";
    titikCount++;

    if (titikCount >= 5) {
        clearInterval(simulasiloading);
        console.log("Loading selesai!");
    }
}, 1000);

// counter naik
let counter = 0;
const counterNaik = setInterval(() => {
    console.log(counter);
    counter++;

    if (counter >= 10) {
        clearInterval(counterNaik);
        console.log("Counter berhenti pada 10");
    }
}, 2000);
 
