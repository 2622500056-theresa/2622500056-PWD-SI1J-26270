# pertemuan-08

# Isi folder pertemuan-08

- index.php : versi PHP, form dikirim pakai POST
- indexGet.php : versi PHP, form dikirim pakai GET
- style.css : tampilan
- script.js : pindah menu, cek isian form, dan tab resep
- foto-profil.jpeg : foto buat halaman Profile

# Yang ada di website

Layout-nya ngikutin gambar di soal: header di atas, navigasi di kiri, konten di kanan, footer di bawah. Header ada logo dan nama website. Menu navigasi pakai tag list.

- Beranda: cerita baking aku, kartu tiga jenis kue, tabel rekap, dan emoji yang gerak-gerak.
- Profile: biodata sama foto.
- Pendaftaran: form nama, email, jenis kelamin (pria, wanita, rahasia), dan pesan. Di index.php datanya lewat POST, di indexGet.php lewat GET jadi kelihatan di URL. Isiannya dicek dua kali, di browser (JavaScript) dan di server (PHP).
- Catatan Resep: menu tambahan, ada tab Pastry, Donat, Cookie.
- Footer: ©2622500056_Theresa Alpansi_SI1J_UTS Pemrograman Web Dasar

# Yang kerjain
- Baca soal dan lihat website contoh, lalu menentukan tema sendiri agar tidak sama persis.
- Pilih topik baking karena itu hobi yang saya lakukan sekarang.
- Bikin style.css, warnanya cream, coklat, sama pink. Layout pakai CSS Grid, ditambah animasi dan tampilan untuk layar HP.
- Bikin script.js buat pindah halaman tanpa reload, cek form, dan tab resep.
- Menulis cerita di Beranda pakai bahasa sehari-hari, lalu ngedit beberapa kalimat.
- Isi biodata dan pasang foto di Profile.
- Upload ke GitHub satu-satu (git add, git commit, git push), lalu aktifin GitHub Pages dan cek hasilnya.
- Benerin foto profil yang tidak muncul.
- Mencoba menjalanin PHP di Laragon dan mencari penyebab halaman putih.

# Kendala

1. Foto profil tidak muncul karena kesalahan kode.

2. Perubahan belum masuk ke website. Statusnya masih modified dan website belum berubah, harus add, commit, push dulu per file, lalu tunggu 1-2 menit.

3. Tampilan lama masih muncul. Walaupun udah push, kadang yang tampil masih versi lama karena cache. Solusinya tunggu deploy selesai, terus refresh keras pakai Ctrl + Shift + R.

4. Halaman putih di localhost. Pas buka localhost/PWD/2622500056-PWD-SI1J-26270/pertemuan-08/ yang muncul hanya layar kosong. Dugaan awalnya ada error PHP yang tidak ditampilin, atau versi PHP di Laragon kurang baru, atau  cuma buka folder tanpa nulis index.php. Saya cek dengan nambahin ini_set('display_errors', 1); di atas index.php, buka pakai nama file lengkap, ngecek versi PHP, dan lihat error.log Apache. 

# Yang dipakai
CSS, JavaScript, PHP, Laragon (Apache + PHP), Git dan GitHub Pages.
