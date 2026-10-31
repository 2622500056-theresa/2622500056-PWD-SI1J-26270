# pertemuan-07 Pemrosesan Formulir dengan PHP

## 1. Tujuan Praktik

Pada pertemuan 7 ini, saya mempelajari cara menggunakan PHP untuk memproses formulir HTML. Saya juga belajar menggunakan metode GET dan POST, melakukan validasi data, serta menampilkan hasil input dari pengguna.

Selain itu, saya mempelajari cara menjalankan program melalui localhost, memperbaiki kesalahan pada kode, dan menggunakan Git untuk menyimpan perkembangan proyek.

## 2. Persiapan Proyek

Pada tahap awal, saya menyiapkan folder proyek P7 sebagai pengembangan dari proyek P6. Saya menggunakan salinan proyek agar file P6 yang asli tetap aman dan tidak berubah.

Di dalam proyek P7 terdapat beberapa file, yaitu `index.php`, `indexGet.php`, `style.css`, `script.js`, dan folder gambar. Setiap file memiliki fungsi masing-masing untuk menjalankan halaman web, memproses formulir, dan mengatur tampilannya.

**Catatan:** Proyek P6 asli perlu dicocokkan kembali dengan proyek P7 ini karena file P6 belum tersedia saat proyek disiapkan.

## 3. Membuat Formulir HTML

Setelah menyiapkan folder proyek, saya membuat formulir yang berisi beberapa input, seperti nama lengkap, email, semester, tanggal kunjungan, jenis pesan, pilihan minat, program studi, dan pesan.

Saya menggunakan beberapa jenis input agar pengguna bisa mengisi data sesuai kebutuhan. Pada bagian pilihan minat, saya menggunakan checkbox sehingga pengguna dapat memilih lebih dari satu pilihan.

## 4. Memproses Formulir dengan PHP

Selanjutnya, saya menggunakan PHP untuk menerima dan memproses data yang dikirim dari formulir HTML.

Saya menggunakan metode GET pada file `indexGet.php` untuk menampilkan contoh pengiriman data melalui URL. Sementara itu, metode POST digunakan pada file `index.php` untuk mengirim data formulir tanpa menampilkan seluruh isian pada URL.

Setelah data diterima, PHP memeriksa isian tersebut sebelum menampilkan hasilnya di halaman web.

## 5. Menambahkan Validasi Formulir

Pada tahap ini, saya menambahkan validasi agar data yang dikirim sesuai dengan ketentuan.

Validasi yang diterapkan meliputi:
1. Nama harus diisi dan terdiri dari 3 sampai 50 karakter.
2. Email harus menggunakan format yang benar.
3. Semester harus berupa bilangan bulat dari 1 sampai 14.
4. Tanggal kunjungan harus diisi dengan tanggal yang valid.
5. Jenis pesan harus dipilih.
6. Program studi harus dipilih.
7. Pengguna harus memilih minimal satu topik minat.
8. Pesan harus diisi dan tidak boleh lebih dari 1.000 karakter.

Jika terdapat data yang tidak sesuai, PHP akan menampilkan pesan kesalahan. Dengan begitu, pengguna bisa mengetahui bagian mana yang perlu diperbaiki.

## 6. Menggunakan Session dan PRG

Saya juga menerapkan session untuk menyimpan sementara data formulir dan pesan validasi. Dengan cara ini, isian pengguna tetap bisa ditampilkan setelah halaman dialihkan.

Selain itu, saya menggunakan pola Post-Redirect-Get (PRG). Setelah formulir dikirim menggunakan POST, PHP mengarahkan pengguna kembali ke halaman utama.

Tujuannya adalah mengurangi risiko formulir terkirim ulang ketika pengguna memuat ulang halaman.

## 7. Menjalankan Program melalui Localhost

Untuk menjalankan program, folder proyek perlu ditempatkan di dalam direktori web server, misalnya folder `www` pada Laragon.

Setelah itu, web server dijalankan dan proyek dibuka melalui browser menggunakan alamat localhost.

Pada tahap pengujian, halaman utama dan halaman GET perlu diperiksa untuk memastikan formulir dapat ditampilkan dan diproses dengan benar.

## 8. Pengujian dan Perbaikan Kode

Pengujian dilakukan untuk memeriksa apakah setiap bagian program berjalan sesuai fungsinya.

Beberapa skenario yang perlu diperiksa adalah pengiriman data yang benar, pengisian formulir yang kosong, format email yang salah, semester di luar batas, dan formulir tanpa pilihan minat.

Saya juga perlu memeriksa apakah masukan berupa kode HTML ditampilkan sebagai teks biasa, bukan dijalankan sebagai HTML.

Pemeriksaan sintaks PHP dilakukan menggunakan perintah berikut:

```bash
php -l index.php
php -l indexGet.php
```

Hasil pengujian yang sudah dilakukan pada lingkungan kerja menunjukkan bahwa pemeriksaan sintaks PHP, pengiriman GET dan POST, validasi data, serta pengalihan PRG berjalan sesuai skenario yang diuji.

Namun, pengujian melalui Laragon dan browser pada komputer saya sendiri masih perlu dilakukan. Oleh karena itu, hasil pengujian localhost tersebut belum dapat dinyatakan berhasil sebelum benar-benar diperiksa.

## 9. Mengelola Proyek dengan Git dan GitHub

Selama pengerjaan, Git digunakan untuk menyimpan perubahan kode secara bertahap. Sebelum melakukan commit, saya perlu memeriksa perubahan menggunakan perintah `git status` dan `git diff`.

Setelah satu tahap pengerjaan selesai dan pengujian terkait berhasil, perubahan dapat disimpan menggunakan commit.

Contoh perintah yang digunakan:

```bash
git status
git diff
git add .
git diff --cached
git commit -m "menambahkan pemrosesan formulir P7"
git push
```

Setelah itu, perubahan dikirim ke GitHub agar proyek tersimpan di repositori daring. Proses push harus diperiksa kembali untuk memastikan perubahan benar-benar berhasil dikirim.

## 10. Kesimpulan

Dari praktik P7 ini, saya mempelajari cara menghubungkan formulir HTML dengan PHP untuk menerima dan memeriksa data yang dimasukkan pengguna.

Saya juga mempelajari penggunaan GET, POST, session, validasi formulir, dan pola PRG. Selain itu, saya memahami pentingnya melakukan pengujian sebelum menyatakan program berhasil serta menggunakan Git untuk mencatat perkembangan kode.

Sebelum proyek dikumpulkan, saya perlu mencocokkan hasil P7 dengan proyek P6 asli, menyelesaikan pengujian melalui localhost, memperbarui dokumentasi berdasarkan hasil yang benar-benar diperoleh, dan memastikan perubahan sudah dikirim ke GitHub.
