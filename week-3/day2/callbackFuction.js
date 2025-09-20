// Hitung Luas
// Panggil fungsi hitung(angka, callback) dengan callback anonim untuk kuadratkan angka.
function hitung(angka, callback) {
    let hasil = angka * angka;
    callback(hasil);
};
hitung(5, (hasil) => {
    console.log("Hasil kuadrat:", hasil);
});

// Tampilkan Pesan
// Fungsi tampilkanPesan(callback), memanggil dengan callback anonim console.log("Halo").
function tampilkanPesan(callback) {
    callback();
}
tampilkanPesan(() => {
    console.log("Halo");
});

// Operasi Array
// Gunakan forEach dengan callback anonim untuk menampilkan setiap elemen array.
let arr = [1, 2, 3, 4, 5];
arr.forEach((elemen) => {
    console.log("Elemen array:", elemen);
});

// Filter Data
// Gunakan filter dengan callback anonim untuk mengambil angka genap.
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let genap = angka.filter((a) => a % 2 === 0);
console.log("Angka genap:", genap);

// Map Data
// Gunakan map dengan callback anonim untuk mengubah semua angka menjadi kuadrat.
let kuadrat = angka.map((a) => a * a);
console.log("Angka kuadrat:", kuadrat);