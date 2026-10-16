# pertemuan-05

P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien
Deskripsi
Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM, event listener, interaksi
navigasi, dan validasi formulir sisi klien.

#Fitur dan Pengembangan

- Penyiapan baseline P5: Menyalin index.html, style.css, dan folder img/ (beserta foto-profil.jpg) dari artefak P4 ke folder pertemuan-05/. Struktur halaman, navigasi, formulir, dan styling responsif dari P4 tetap dipertahankan.

- Penyiapan script.js dan penghubungan ke HTML: Membuat berkas script.js di folder yang sama, lalu menghubungkannya di index.html dengan <script src="script.js"></script> sebelum penutup </body>. Kode pengujian sementara console.log dipakai dulu untuk memastikan script sudah termuat, lalu dihapus setelah berhasil.

- Interaksi navigasi responsif: Mengakses elemen navToggle dan navMenu lewat getElementById, memasang addEventListener("click") pada tombol hamburger, lalu memakai classList.toggle("nav-open") supaya menu bisa dibuka dan ditutup di tampilan mobile.

- Validasi formulir sisi klien: Menangani event submit pada formulir (contactForm). Membaca nilai input dengan .value, memeriksa kelengkapan data, format email, rentang semester, pilihan radio button jenis pesan, minimal satu checkbox minat, serta textarea. Memakai event.preventDefault() agar formulir tidak langsung terkirim.

- Umpan balik validasi: Menampilkan pesan di elemen formFeedback lewat textContent saat validasi gagal atau berhasil. Event input dipakai untuk menghapus pesan umpan balik begitu pengguna mulai mengubah data lagi. Event reset juga membersihkan umpan balik.

#Pengujian

- Baseline dan struktur berkas: Membuka pertemuan-05/index.html di browser. Halaman tampil normal, navigasi, formulir, footer, dan foto profil muncul sesuai hasil P4. Belum ada perilaku JavaScript interaktif.

- Hubungan script.js: Setelah menambahkan script dan memuat ulang halaman, membuka Console di DevTools. Pesan pengujian muncul, artinya script sudah termuat dengan benar. Setelah kode pengujian dihapus, tidak muncul error baru.

- Navigasi responsif: Mengecilkan jendela browser sampai tampilan mobile, lalu mengklik tombol hamburger. Menu terbuka dan tertutup dengan benar. Class nav-open bertambah dan hilang sesuai klik.

- Validasi formulir: Mengisi formulir dengan data kosong, email tidak valid, semester di luar rentang, belum memilih radio/checkbox, lalu menekan submit. Pesan kesalahan muncul di formFeedback. Setelah semua data diisi dengan benar, muncul pesan berhasil. Saat data diubah lagi, pesan umpan balik hilang otomatis.

- Debugging: Beberapa kali memakai console.log dan memeriksa elemen lewat Console untuk memastikan getElementById dan querySelector mengembalikan elemen yang benar. Tidak ada error yang tersisa setelah perbaikan kecil pada selector dan penempatan event listener.

#Riwayat Pengembangan

- Siapkan baseline P5 dari artefak P4: Menyalin berkas HTML, CSS, dan gambar. README mulai dibuat. Struktur dan tampilan sudah diverifikasi.

- Hubungkan JavaScript eksternal ke HTML: Membuat script.js, menghubungkannya di index.html, menguji lewat Console, lalu menghapus kode pengujian sementara.

- Tambahkan event listener pada tombol navigasi: Memasang penanganan click dan classList.toggle untuk hamburger menu. Sudah diuji di tampilan mobile.

- Tambahkan penanganan event submit dan validasi formulir: Menambahkan logika validasi untuk semua field formulir beserta preventDefault. Umpan balik ditampilkan sesuai hasil validasi.

- Tambahkan penanganan event input dan reset: Membersihkan pesan umpan balik saat pengguna mengubah input atau mereset formulir. Pengujian ulang seluruh alur validasi sudah dilakukan.