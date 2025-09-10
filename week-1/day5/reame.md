1.Apa fungsi utama JavaScript dalam sebuah website?
a. Membuat struktur halaman
b. Menambahkan gaya/tampilan
c. Membuat website interaktif
d. Menghubungkan ke database
jawaban : c

2.Manakah yang termasuk framework JavaScript?
a. React
b. jQuery
c. Lodash
d. Bootstrap

jawaban : a

3.Sebutkan 2 keunggulan JavaScript.

1.Formulir yang langsung memberi tahu jika ada kesalahan input
2.Lebih efisien dalam belajar dan pengembangan proyek
Ini sangat cocok untuk kamu yang sedang mendalami staging environment dan workflow profesional


4.Sebutkan 2 kelemahan JavaScript.

1.Jika pengguna menonaktifkan JavaScript, fitur interaktif tidak akan berfungsi.
2.Kode bisa dengan mudah dilihat dan dimodifikasi oleh pengguna yang paham developer tools.

5.Apa perbedaan let dan const dalam mendeklarasikan variabel?

let = nilai bisa di ubah 
const = nilai tidak bisa di ubah

6.Tipe data apa yang cocok digunakan untuk menyimpan:

Nama lengkap siswa          = const
Status login (true/false)   = let 

7.Membandingkan nilai dan tipe data secara ketat

==  Membandingkan nilai setelah konversi tipe otomatis
=== Membandingkan nilai dan tipe data secara ketat

8.Manakah dari pop-up berikut yang digunakan untuk meminta input teks dari user?
a. alert()
b. prompt()
c. confirm()
d. console.log()

jawaban : b

9.Apa itu hoisting dalam JavaScript? Jelaskan dengan singkat.
- Deklarasi variabel (var, let, const) dan fungsi akan diproses terlebih dahulu oleh JavaScript sebelum eksekusi kode dimulai.

- Namun, hanya deklarasi yang diangkat—inisialisasi nilainya tidak ikut diangkat.

10.Apa yang dimaksud dengan closure? Berikan contoh sederhana dalam 1 kalimat.

Closure itu kayak kotak rahasia.
Ada fungsi kecil yang bisa ingat isi kotak, walau fungsi besarnya sudah selesai dipakai.

function buatCelengan() {
  let saldo = 0; // uang di dalam celengan

  function isiCelengan(jumlah) {
    saldo += jumlah; 
    console.log("Saldo sekarang: " + saldo);
  }

  return isiCelengan;
}

let celenganA = buatCelengan();
celenganA(5000); 
celenganA(2000); 