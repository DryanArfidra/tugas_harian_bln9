import { biodata } from "./jsModularisasi/bioadata.js";
console.log(biodata)

import { tambah, kurang, kali, bagi } from "./jsModularisasi/math.js";

console.log(tambah(20, 5))
console.log(kurang(30, 10))
console.log(kali(6, 7))
console.log(bagi(50, 2))

import { produk } from "./jsModularisasi/produk.js";
produk.forEach(a => {
console.log(`produk ${a.nama} harga ${a.harga}`)
})

console.log("----- setelah di format -----")

import { formatRupiah } from "./jsModularisasi/helper.js";

produk.forEach(a => {
    console.log(`produk ${a.nama} harga ${formatRupiah(a.harga)}`)
})

import {tasks, nextId, addTask, getAllTask, deleteTask } from "./jsModularisasi/taskService.js";
addTask("belajar javascript");
addTask("belajar react");
addTask("belajar nodejs"); 
console.log(tasks);

console.log(getAllTask());
deleteTask(1);
console.log(getAllTask());

import { users, login, register } from "./jsModularisasi/auth.js";

register("dryanz", "12345");
login("dryanz", "12345");
login("budi", "54321");
login("susi", "12345");

import { getPosts } from "./jsModularisasi/postService.js";

const tampilPosts = await getPosts();
tampilPosts.slice(0, 5).forEach(p => console.log(p));

import { nilai, rataRata, nilaiTertinggi, nilaiTerendah } from "./jsModularisasi/nilai.js";
console.log("Daftar Nilai: ", nilai);
console.log("Rata-rata: ", rataRata());
console.log("Nilai Tertinggi: ", nilaiTertinggi());
console.log("Nilai Terendah: ", nilaiTerendah());

