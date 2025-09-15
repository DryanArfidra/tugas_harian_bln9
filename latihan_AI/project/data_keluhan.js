let dataKeluhan = [
  { id: 1, nama: "Budi", isi: "Barang rusak", status: "pending" },
  { id: 2, nama: "Siti", isi: "Pengiriman lama", status: "pending" }
];

dataKeluhan.forEach(keluhan => {
    keluhan.tanggal = new Date().toLocaleDateString();
})

dataKeluhan.forEach(keluhan => {
    if (keluhan.id === 1) {
        keluhan.status = "selesai";
    }else {
        keluhan.status = "proses";
    }
})
console.log(dataKeluhan);
dataKeluhan.forEach(keluhan => {
    console.log(`${keluhan.nama} mengeluh: ${keluhan.isi} pada tanggal ${keluhan.tanggal} dengan status ${keluhan.status}`);
})