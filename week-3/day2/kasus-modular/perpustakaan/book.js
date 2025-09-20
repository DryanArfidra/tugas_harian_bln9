let daftarBuku = [];

export function tambahBuku(judul, penulis) {
    daftarBuku.push({ judul, penulis });
}

export function cariBuku(judul) {
    return daftarBuku.find(buku => buku.judul === judul);
}

export function hapusBuku(judul) {
    daftarBuku = daftarBuku.filter(buku => buku.judul !== judul);
}