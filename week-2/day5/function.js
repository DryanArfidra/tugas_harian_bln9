let siswa = require("./data.js");

function tambahSiswa(nama, kelas, nilai) {
  let idBaru = siswa.length > 0 ? siswa[siswa.length - 1].id + 1 : 1;
  siswa.push({ id: idBaru, nama, kelas,  nilai });
}
function tampilkanSiswa() {
  console.log("Daftar Siswa:");
  siswa.forEach((item) => {
    console.log(`ID: ${item.id}, Nama: ${item.nama}, Kelas: ${item.kelas}, Nilai: ${item.nilai}`);
  });
}
function tampilkanSiswa(id, nama, kelas, nilai) {
  let index = siswa.findIndex((item) => item.id === id);
  if (index !== -1) {
    siswa[index] = { id, nama, kelas, nilai };
    console.log(`Data siswa dengan ID ${id} berhasil diupdate.`);
  } else {
    console.log(`Siswa dengan ID ${id} tidak ditemukan.`);
  }
}

function hapusSiswa(id) {
  siswa = siswa.filter((item) => item.id !== id);
}

function cariSiswa(nama) {
  return siswa.filter((item) => item.nama.toLowerCase().includes(nama.toLowerCase()));
}

function rataRataNIlai() {
  let totalNilai = siswa.reduce((total, item) => total + item.nilai, 0);
  return siswa.length > 0 ? totalNilai / siswa.length : 0;
}
module.exports = { tamnahSiswa, tampilkanSiswa, hapusSiswa, cariSiswa, rataRataNIlai };