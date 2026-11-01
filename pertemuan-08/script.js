// Mengambil formulir dan tempat pesan
const form = document.getElementById("kenalanForm");
const pesanSukses = document.getElementById("pesanSukses");

// Menjalankan fungsi saat formulir dikirim
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengambil data dari formulir
  const nama = document.getElementById("nama").value.trim();
  const kegiatan = document.getElementById("kegiatan").value.trim();
  const email = document.getElementById("email").value.trim();
  const hobi = document.getElementById("hobi").value.trim();

  // Memeriksa pilihan gender
  const pilihanGender = document.querySelector(
    'input[name="gender"]:checked'
  );

  // Memeriksa apakah semua data sudah diisi
  if (
    nama === "" ||
    kegiatan === "" ||
    email === "" ||
    !pilihanGender ||
    hobi === ""
  ) {
    pesanSukses.textContent = "Silakan lengkapi semua kolom!";
    pesanSukses.style.color = "#c0392b";
    return;
  }

  // Menampilkan pesan jika berhasil
  pesanSukses.textContent =
    "Terima kasih, " + nama +
    "! Formulir kamu berhasil diisi. Senang berkenalan denganmu! 💗";

  pesanSukses.style.color = "#39804b";

  // Mengosongkan formulir
  form.reset();
});