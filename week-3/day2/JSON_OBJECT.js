// Konversi Objek pengguna ke JSON
let pengguna = {
    nama: "Budi",
    umur: 25,
    email: "budi@example.com"
};

let jsonPengguna = JSON.stringify(pengguna);
console.log("Objek ke JSON:" + jsonPengguna);

// Konversi JSON ke Objek
let orang = {
    "nama": "Siti",
    "umur": 30,
};
let jsonOrang = JSON.parse(orang);
console.log("JSON ke Objek:"+ jsonOrang);

//simpan draft produk"
const produk = [
    { "id": 1, "nama": "Laptop", "harga": 10000000 },
    { "id": 2, "nama": "Smartphone", "harga": 5000000 },
    { "id": 3, "nama": "Tablet", "harga": 3000000 }
];

let jsonProduk = JSON.parse(produk);
console.log("Data Produk:"+ jsonProduk);
 
// filter dari JSON
const jsonSiswa = `[
    {"nama": "Andi", "nilai": 85},
    {"nama": "Budi", "nilai": 90},
    {"nama": "Citra", "nilai": 78},
    {"nama": "Dewi", "nilai": 92}
]`;
let siswa = JSON.parse(jsonSiswa);
let siswaLulus = siswa.filter(s => s.nilai >= 80);
console.log("Siswa yang lulus:"+ siswaLulus);

// gabungkan JSON
const jsonPengguna1 = `{"nama": "Eka", "umur": 28}`;
const jsonAlamat = `{"kota": "Jakarta", "negara": "Indonesia"}`;

const pengguna1 = JSON.parse(jsonPengguna1);
const alamat = JSON.parse(jsonAlamat);

const profilLengkap = { ...pengguna1, ...alamat };
console.log("Profil Lengkap:"+ profilLengkap);