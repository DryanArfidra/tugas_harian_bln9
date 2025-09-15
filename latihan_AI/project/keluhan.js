let keluhan = [
    
];

function tambahKeluhan(keluhanBaru) {
    keluhan.push(keluhanBaru);
    console.log(keluhanBaru +" Keluhan berhasil ditambahkan.");
}

function hapusKeluhan(keluhanLama) {
    keluhan = keluhan.find(item => item !== keluhanLama);
    console.log(keluhanLama + " Keluhan berhasil dihapus.");
}

function tampilkanKeluhan() {
    console.log("Daftar Keluhan:");
    keluhan.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

export { tambahKeluhan, hapusKeluhan, tampilkanKeluhan };