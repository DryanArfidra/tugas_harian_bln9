let daftarNama = [];

export function tambahNama(nama) {
    daftarNama.push(nama);
}

export function hapusNama(nama) {
    daftarNama = daftarNama.filter(n => n !== nama);
}

export function tampilkanNama() {
    return [...daftarNama];
}