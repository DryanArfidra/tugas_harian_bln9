import { tambahKeluhan, hapusKeluhan, tampilkanKeluhan } from  "./project/keluhan.js";

tambahKeluhan("barang rusak");
tambahKeluhan("pengiriman terlambat");

tambahKeluhan();
hapusKeluhan("barang rusak");

tampilkanKeluhan();