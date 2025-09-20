import { tambahBuku, cariBuku, hapusBuku } from "./book.js";

tambahBuku("hujan", "pelangi")
tambahBuku("laskar pelangi", "andika")

console.log(cariBuku("laskar pelangi"));

hapusBuku("pelangi")
console.log(cariBuku("hujan"));