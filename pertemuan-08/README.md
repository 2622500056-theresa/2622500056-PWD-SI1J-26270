# Dapur Manis Theresa

Project UTS Pemrograman Web Dasar, topik Blog Pribadi. Isinya cerita tentang kegiatan baking saya: pastry instan, donat, sama cookie.

Theresa Alpansi | NIM 2622500056 | SI1J | Sistem Informasi semester 1
GitHub: [2622500056-theresa](https://github.com/2622500056-theresa)

## Link

- Versi HTML (GitHub Pages): https://2622500056-theresa.github.io/2622500056-PWD-SI1J-26270/pertemuan-08/index.html
- Versi PHP, dibuka lewat Laragon (GitHub Pages tidak bisa jalanin PHP):
  - http://localhost/PWD/2622500056-PWD-SI1J-26270/pertemuan-08/index.php
  - http://localhost/PWD/2622500056-PWD-SI1J-26270/pertemuan-08/indexGet.php

## Isi folder pertemuan-08

- `index.html` : versi awal, form diproses pakai JavaScript
- `index.php` : versi PHP, form dikirim pakai POST
- `indexGet.php` : versi PHP, form dikirim pakai GET
- `style.css` : tampilan
- `script.js` : pindah menu, cek isian form, dan tab resep
- `foto-profil.jpeg` : foto buat halaman Profile

## Yang ada di website

Layout-nya ngikutin gambar di soal: header di atas, navigasi di kiri, konten di kanan, footer di bawah. Header ada logo dan nama website. Menu navigasi pakai tag list.

- Beranda: cerita baking saya, kartu tiga jenis kue, tabel rekap, dan emoji yang gerak-gerak.
- Profile: biodata sama foto.
- Pendaftaran: form nama, email, jenis kelamin (pria, wanita, rahasia), dan pesan. Di `index.php` datanya lewat POST, di `indexGet.php` lewat GET jadi kelihatan di URL. Isiannya dicek dua kali, di browser (JavaScript) dan di server (PHP).
- Catatan Resep: menu tambahan, ada tab Pastry, Donat, Cookie.
- Footer: ©2622500056_Theresa Alpansi_SI1J_UTS Pemrograman Web Dasar

## Yang saya kerjain

1. Baca soal dan lihat website contoh, terus nentuin tema sendiri biar tidak sama persis.
2. Pilih topik baking karena itu hobi saya.
3. Bikin kerangka halaman di `index.html` sesuai gambar layout.
4. Bikin `style.css`, warnanya krem, cokelat, sama pink. Layout pakai CSS Grid, ditambah animasi dan tampilan buat layar HP.
5. Bikin `script.js` buat pindah halaman tanpa reload, cek form, dan tab resep.
6. Nulis cerita di Beranda pakai bahasa sehari-hari, terus ngedit beberapa kalimat biar sesuai gaya saya.
7. Isi biodata dan pasang foto di Profile.
8. Upload ke GitHub satu-satu (`git add`, `git commit`, `git push`), lalu aktifin GitHub Pages dan cek hasilnya.
9. Benerin foto profil yang tidak muncul.
10. Mengubah `index.html` jadi `index.php` (POST) dan `indexGet.php` (GET), dan mengubah `script.js` biar form dikirim ke PHP setelah isiannya benar.
11. Coba jalanin PHP di Laragon dan nyari penyebab halaman putih.

## Kendala

1. Foto profil tidak muncul. Yang tampil cuma emoji. Ternyata `foto-profil.jpeg` belum ada di folder `pertemuan-08`, jadi tidak ikut ke-push. Kelihatan dari `git status` yang cuma nunjukin `index.html` berubah. Saya copy fotonya ke folder itu dengan nama yang persis sama kayak di kode, terus `git add`, `commit`, `push`. Nama file di GitHub Pages juga peka huruf besar-kecil, jadi harus sama persis.

2. Emoji pengganti nutupin masalah. Di `script.js` ada kode yang ngeganti foto jadi emoji kalau gambarnya gagal dimuat, jadi susah ketahuan kenapa fotonya hilang. Kode itu saya hapus.

3. Perubahan belum masuk ke website. Abis edit `index.html`, statusnya masih `modified` dan website belum berubah. Harus `add`, `commit`, `push` dulu per file, terus tunggu 1-2 menit.

4. Tampilan lama masih muncul. Walaupun udah push, kadang yang tampil masih versi lama karena cache. Solusinya tunggu deploy selesai, terus refresh keras pakai `Ctrl + Shift + R`.

5. GitHub Pages tidak bisa PHP. Setelah jadi `.php`, versi online tidak bisa dipakai karena GitHub Pages cuma nampilin file statis. Jadi PHP-nya saya jalanin di Laragon, dan `index.html` tetap saya simpan biar ada versi online.

6. Halaman putih di localhost. Pas buka `localhost/PWD/2622500056-PWD-SI1J-26270/pertemuan-08/` yang muncul cuma layar kosong. Dugaan awalnya ada error PHP yang tidak ditampilin, atau versi PHP di Laragon kurang baru, atau saya cuma buka folder tanpa nulis `index.php`. Saya cek dengan nambahin `ini_set('display_errors', 1);` di atas `index.php`, buka pakai nama file lengkap, ngecek versi PHP, dan lihat `error.log` Apache.

## Yang dipakai

HTML, CSS, JavaScript, PHP, Laragon (Apache + PHP), Git dan GitHub Pages.
