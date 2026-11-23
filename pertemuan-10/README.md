# Pertemuan 10 - Analisis Kebutuhan Data dan Dasar MySQL Satu Tabel


# Cara Menjalankan
1. Jalankan Laragon dan klik Start All, pastikan Apache dan MySQL aktif.
2. Buka http://localhost/phpmyadmin/ (username root, password kosong).
3. Untuk memulihkan basis data, impor berkas `db_pwd_2622500056.sql`.
4. Buka aplikasi di browser: ... (isi alamat yang kamu pakai, misalnya http://localhost/.../pertemuan-10/index.php)

# Analisis Kebutuhan Data
Formulir Kontak memiliki 8 data: nama, email, semester, tanggal, jenis_pesan,
minat[], prodi, dan pesan. Informasi profil (NIM, nama mahasiswa) tidak
termasuk data formulir Kontak.

Field minat berupa checkbox yang dapat dipilih lebih dari satu. Karena
P10 memakai satu tabel, pilihan disimpan dalam satu kolom sebagai teks
dipisah koma, contohnya `HTML, CSS`. Ini penyederhanaan untuk
pembelajaran, bukan bentuk normalisasi basis data yang ideal.

# Rancangan Tabel
- Basis data: `db_pwd_2622500056`
- Tabel: `tbl_kontak_2622500056`

| No | Atribut | Tipe Data | Ketentuan |
|---|---|---|---|
| 1 | id | INT | PRIMARY KEY, AUTO_INCREMENT |
| 2 | nama | VARCHAR(50) | - |
| 3 | email | VARCHAR(255) | - |
| 4 | semester | TINYINT | - |
| 5 | tanggal | DATE | - |
| 6 | jenis_pesan | VARCHAR(20) | - |
| 7 | minat | VARCHAR(50) | - |
| 8 | prodi | VARCHAR(2) | - |
| 9 | pesan | VARCHAR(300) | - |

# Hasil Pengujian Aktual
(Isi hanya yang sudah kamu cek sendiri.)

| Tahap | Hasil |
|---|---|
| phpMyAdmin dapat dibuka | ... |
| Basis data dan tabel dibuat | ... |
| Struktur tabel (tab Structure / DESCRIBE) | ... |
| Data awal (tab Browse) | ... baris data tersimpan |
| Ekspor SQL (Quick, format SQL) | ... |
| Pemeriksaan berkas SQL | ... |
| Aplikasi dibuka di localhost | ... |
| Formulir Kontak | ... |

# Temuan dan Perbaikan
- Saat membuat basis data, muncul error #1007 (database exists) karena
  `db_pwd_2622500056` sudah pernah dibuat. Diatasi dengan memakai basis data
  yang sudah ada dan menjalankan SQL tanpa baris `CREATE DATABASE`.
- Saat insert data, kolom id sempat diisi NIM sehingga muncul error nilai
  melebihi batas INT (2147483647). Diperbaiki dengan mengosongkan kolom id
  karena nilainya dibuat otomatis oleh AUTO_INCREMENT.
- ... (tambahkan temuan lain yang kamu alami)

# Kendala
- ... (tulis kendala nyata yang kamu hadapi dan cara mengatasinya,
  atau hapus bagian ini kalau tidak ada)

# Catatan
P10 hanya membahas pembuatan tabel dan ekspor SQL. Integrasi PHP dengan
MySQL belum dibahas, sehingga formulir belum menyimpan data ke basis data.
Pengambilan dan penyimpanan data lewat PHP dibahas di pertemuan berikutnya.