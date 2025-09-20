// 📌 Soal 1 – Ambil Data Berantai

// Buatlah tiga function getUser(), getPost(), dan getComment() yang masing-masing mengembalikan Promise dengan setTimeout.

// getUser() → setelah 1 detik kembalikan "User ditemukan".

// getPost() → setelah 1 detik kembalikan "Post ditemukan".

// getComment() → setelah 1 detik kembalikan "Komentar ditemukan".

// Gunakan Promise chaining agar outputnya muncul berurutan:

// User ditemukan
// Post ditemukan
// Komentar ditemukan

// Jawaban:

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User ditemukan");
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Posts ditemukan");
        }, 1000);
    });
}

function getComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comments ditemukan");
        }, 1000);
    });
}

// 📌 Soal 2 – Kalkulasi Matematika

// Buatlah dua function yang mengembalikan Promise:

// tambah(x, y) → hasil penjumlahan

// kali(x, y) → hasil perkalian

// Gunakan chaining untuk menghitung langkah berikut:

// Tambah 5 + 7

// Kali hasilnya dengan 3

// Tampilkan hasil akhir di console

function tambah(x, y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x + y);
        }, 1000);
    }); 
}

function kali(x, y) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * y);
        }, 1000);
    });
}
tambah(5, 7)
    .then((hasil) => {
        console.log("Hasil tambah:", hasil);
        return kali(hasil, 3);
    })
    .then((hasil) => {
        console.log("Hasil kali:", hasil);
    })

// 📌 Soal 3 – Validasi Input

// Buatlah dua function yang mengembalikan Promise:

// cekNama(nama) → resolve "Nama valid" jika tidak kosong, reject jika kosong.

// cekEmail(email) → resolve "Email valid" jika ada tanda "@", reject jika tidak ada.

// Gunakan Promise chaining untuk memvalidasi:

// Nama = "Danz"

// Email = "danz@example.com"

// Tampilkan hasil validasi di console. Jika ada error, tangani dengan .catch().

function cekNama(nama) {
    return new promise ((resolve, reject) => {
        setTimeout(() => {
            if (nama) {
                resolve("Nama valid");
            } else {
                reject("Nama tidak boleh kosong");
            }
        }, 1000);
    });
}

function cekEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("@")) {
                resolve("Email valid");
            } else {
                reject("Email harus mengandung '@'");
            }
        }, 1000);
    });
}
cekNama("Danz")
    .then((hasil) => {
        console.log(hasil);
        return cekEmail("danz@example.com");
    })
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });

// 📌 Soal 4 – Simulasi Belanja Online

// Buatlah tiga function berbasis Promise dengan setTimeout:

// login() → kembalikan "Login berhasil" setelah 1 detik.

// pilihBarang() → kembalikan "Barang dipilih" setelah 1 detik.

// bayar() → kembalikan "Pembayaran sukses" setelah 1 detik.

// Gunakan Promise chaining agar console menampilkan urutan proses belanja.

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login berhasil");
        }, 1000);
    });
}

function pilihBarang() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Barang dipilih");
        }, 1000);
    });
}

function bayar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pembayaran sukses");
        }, 1000);
    });
}

login()
    .then((hasil) => {
        console.log(hasil);
        return pilihBarang();
    })
    .then((hasil) => {
        console.log(hasil);
        return bayar();
    })
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });

// 📌 Soal 5 – Progress Loading

// Buatlah function progress(step) yang mengembalikan Promise dengan setTimeout, hasilnya berupa string:

// "Progress: <step>%"


// Gunakan chaining untuk menampilkan:

// Progress: 25%
// Progress: 50%
// Progress: 75%
// Progress: 100%
// Selesai!


// 👉 Semua soal di atas wajib menggunakan Promise dan Chaining (.then()), bukan async/await.
function progress(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Progress: ${step}%`);
        }, 1000);   
    });
}
progress(25)
    .then((hasil) => {
        console.log(hasil);     
        return progress(50);
    })
    .then((hasil) => {
        console.log(hasil);
        return progress(75);
    })
    .then((hasil) => {
        console.log(hasil); 
        return progress(100);
    })
    .then((hasil) => {
        console.log(hasil); 
        console.log("Selesai!");
     })