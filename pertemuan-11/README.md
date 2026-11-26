# Pertemuan 11 - Analisis Kebutuhan Data dan Dasar MySQL Satu Tabel

- Mata kuliah: Pemrograman Web Dasar 
- Nama: Theresa Alpansi
- NIM: 2622500056 | Kelas: SI1J
- Alamat uji: `http://localhost/PWD/2622500056-PWD-SI1J-26270/pertemuan-11/`

# Gambaran Singkat

Pada pertemuan ini, halaman profil dari P10 saya sambungkan ke MySQL lewat MySQLi. Data kontak dibaca dari tabel `tbl_kontak_2622500056` memakai `SELECT` (operasi READ), lalu ditampilkan di halaman web.

# Struktur Berkas

pertemuan-11/
├── index.php        (diubah di P11)
├── fungsi.php
├── koneksi.php      (baru di P11)
├── script.js
├── style.css
├── README.md
├── db_pwd_2622500056.sql
└── img/
    └── foto-profil.jpeg


# B. Persiapan

Baseline, seluruh berkas `pertemuan-10` disalin ke `pertemuan-11`. Profil, navigasi, dan formulir Kontak tampil sama seperti di P10.

Lingkungan, Laragon dijalankan lewat Start All, dan layanan Apache serta MySQL aktif. Folder proyek berada di Local Disk (C:) dan dapat dibuka lewat alamat uji di atas.

Basis data. Database `db_pwd_2622500056` berisi tabel `tbl_kontak_2622500056` dengan 9 kolom: id, nama, email, semester, tanggal, jenis_pesan, minat, prodi, dan pesan.

# D. Koneksi PHP ke MySQL

- `koneksi.php` dibuat satu folder dengan `index.php`.
- Parameter: host `localhost`, user `root`, password kosong, database `db_pwd_2622500056`.
- Isi berkas: `mysqli_report(MYSQLI_REPORT_OFF)`, `mysqli_connect()`, dan pengecekan `if (!$koneksi)` yang memanggil `die("Koneksi ke basis data gagal.")`.
- **Uji berhasil:** lewat berkas sementara `uji_koneksi.php`, halaman menampilkan "Koneksi ke basis data berhasil." Berkas ini sudah dihapus.
- **Uji gagal:** database diubah sementara menjadi db_tidak_tersedia.
 Hasil: tampil Warning "Unknown database" dan pesan "Koneksi ke basis data gagal."
 $database dikembalikan ke db_pwd_2622500051; pesan berhasil muncul kembali.

## E. Integrasi ke Halaman Utama

- `index.php` memuat `fungsi.php` dan `koneksi.php` dengan `require_once()`.
- `session_start()` dinonaktifkan (dikomentari) karena data kini berasal dari database.
- Hasil uji: halaman utama terbuka tanpa pesan galat koneksi.

## F. Operasi READ

- Kueri: `SELECT * FROM tbl_kontak_2622500056`, dijalankan dengan `mysqli_query()`.
- Jika kueri gagal, program berhenti dengan pesan "Kueri SELECT gagal dijalankan."
- Setiap baris hasil diambil dengan `mysqli_fetch_assoc()` di dalam `while`, lalu dikumpulkan ke larik `$dataKontak`.
- **Uji kueri gagal:** nama tabel sementara saya ubah menjadi `tbl_tabel_tidak_tersedia`, dan pesan kegagalan muncul. Nama tabel lalu dikembalikan.
- **Pemeriksaan `var_dump()`:** isi `$dataKontak` berjumlah [isi jumlah] elemen, sesuai dengan data di phpMyAdmin, dengan indeks sesuai nama kolom. Setelah itu `var_dump()` dijadikan komentar lagi.

## G. Menampilkan Data

- Bagian hasil kontak versi session diganti dengan data dari `$dataKontak`, ditampilkan menggunakan `foreach` di dalam `<article id="hasilKontak">`.
- Semua nilai dibersihkan dengan `bersihkan()` (`htmlspecialchars()`), dan kolom pesan memakai `nl2br()` agar baris baru tetap terbaca.
- Bila tidak ada data, `if (count($dataKontak) > 0)` ... `else` menampilkan "Belum ada data kontak yang tersimpan."
- **Uji data ada:** semua data tampil sesuai isi tabel.
- **Uji data kosong:** tabel dikosongkan lewat phpMyAdmin, dan pesan "Belum ada data kontak yang tersimpan." muncul. Data kemudian dimasukkan kembali.

## H. Ekspor Basis Data

Database `db_pwd_2622500056` diekspor dari phpMyAdmin (metode Quick, format SQL) dan hasilnya disimpan sebagai `pertemuan-11/db_pwd_2622500056.sql`. Berkas tersebut berisi perintah `CREATE TABLE` dan `INSERT INTO`.

## Galat yang Ditemukan dan Perbaikannya

- Foto profil tampil terlalu besar dan berada di luar kotak "Selamat Datang". Penyebabnya, tag `<img>` berada di luar `<section id="home">` sehingga aturan CSS `#home img` tidak berlaku. Perbaikannya, tag `<img>` dipindahkan ke dalam `<section id="home">`.
- [tambahkan galat lain jika ada]

## Catatan

P11 hanya mencakup operasi READ. Formulir Kontak belum menyimpan data ke database, jadi data yang dikirim lewat formulir tidak muncul di daftar. Penyimpanan data (`INSERT`) dibahas di pertemuan berikutnya.

## Riwayat Commit

| Tahap | Pesan commit |
|---|---|
| B.1 | menyalin artefak pertemuan-10 ke pertemuan-11 sebagai baseline |
| B.2 | menyiapkan direktori dan lingkungan pengembangan pertemuan-11 |
| B.3 | memeriksa kesiapan basis data dan tabel kontak P11 |
| D | mengimplementasikan koneksi PHP-MySQL menggunakan MySQLi |
| E | mengintegrasikan berkas koneksi pada index P11 |
| F | menambahkan pemeriksaan kegagalan kueri SELECT |
| G | Menampilkan data kontak dari basis data |
| H | Menambahkan ekspor basis data praktikum |
