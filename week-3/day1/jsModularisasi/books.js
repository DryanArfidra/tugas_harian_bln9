export const daftarBuku = [];
export let Id = 1;

export function addBook(Book) {
  const buku = {
    id: Id++,
    judul: judul
  };
  daftarBuku.push(buku);
  return buku;
}

export function getAllBook() {
  return daftarBuku;
}

export function findBookByTitle(title) {
    return daftarBuku.filter(buku => buku.judul.toLowerCase().includes(title.toLowerCase()));

}
