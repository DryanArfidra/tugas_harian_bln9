// kalkulasi dengan callback
function kalkulasi(angka1,angka2, callback) {
    let hasil = angka1 + angka2;
    callback(hasil);
}
kalkulasi(5, 10, (hasil) => {
    console.log("Hasil penjumlahan:", hasil);
});

// sapa dengan callback
function sapa(nama, callback) {
    let ucapan = `Halo, ${nama}!`;
    callback(ucapan);
}  
sapa("Andi", (pesan) => {
    console.log(pesan);
});

// filter angka dengan callback
function filterAngka(arr, callback) {
    let hasil = arr.filter((a) => a > 5);
    callback(hasil);
}
filterAngka([1, 3, 6, 8, 2, 10], (hasil) => {
    console.log("Angka yang lebih besar dari 5:", hasil);
});

// ubah array dengan callback
function ubahArray(arr, callback) {
    let hasil = arr.map((a) => a * 2);
    callback(hasil);
}   
ubahArray([1, 2, 3, 4, 5], (hasil) => {
    console.log("Array setelah diubah:", hasil);
});
// validasi input
function validasi(data, callback) {
    if (data) {
        callback(true);
    } else {
        callback(false);
    }
}
validasi("Test", (isValid) => {
    console.log("Apakah data valid?", isValid);
});
validasi("", (isValid) => {
    console.log("Apakah data valid?", isValid);
}); 