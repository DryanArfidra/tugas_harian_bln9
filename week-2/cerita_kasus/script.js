// Buat sebuah array objek bernama menuyang berisi minimal 5 makanan.
// Tiap objek punya properti:
const menu = [
    { nama: "Nasi Goreng",kategori: "Makanan", harga: 20000,  },
    { nama: "Nasi Bakar", kategori: "Makanan", harga: 35000, },
    { nama: "Es Teh", kategori: "Minuman", harga: 10000,  },
    { nama: "Sate Ayam", kategori: "Makanan", harga: 12000,  },
    { nama: "Tahu Crispy", kategori: "Makanan", harga: 15000,  },
        ];

// GunakanforEach untuk menampilkan semua menu dengan format:
menu.forEach(function(item){
    console.log(`nama: ${item.nama}, kategori: ${item.kategori}, harga: ${item.harga}`);
})

// Gunakanfilter untuk mencari semua makanan/minuman dengan harga di bawah Rp30.000.
 let filterMenu = menu.filter(function(item){
    return item.harga <= 30000;
});
console.log(filterMenu);

// Gunakan map untuk membuat array baru yang hanya berisi nama-nama menu.
let mapMenu = menu.map(function(item){
    return item.nama;
});
console.log(mapMenu);

// Gunakan reduce untuk menghitung total harga semua menu.
let bayar = menu.reduce(function(total, item){
    return total + item.harga;
}, 0);
console.log(bayar);

// Gunakanfind untuk mencari satu menu dengan nama tertentu (misal: "Es Teh").
let findMenu = menu.find(function(item){
    return item.nama === "Es Teh";
});
console.log(findMenu);

// Gunakan destructuring array untuk mengambil 2 makanan pertama dari menuke variabel makanan1dan makanan2.
let [makanan1, makanan2, minuman1, makanan3, makanan4] = menu;
console.log(makanan1, minuman1);

// Gunakan destrukturisasi objek untuk mengambil nama dan harga dari salah satu menu (misal menu[0]).
let {nama, harga} = menu[0];
console.log(nama, harga);