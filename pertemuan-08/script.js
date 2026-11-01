const form = document.getElementById("formBaking");
const hasil = document.getElementById("hasilForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const hobi = document.getElementById("hobi").value;
  const cerita = document.getElementById("cerita").value.trim();

  if (nama === "" || hobi === "" || cerita === "") {
    hasil.textContent = "Yuk, isi semua kolom terlebih dahulu!";
    return;
  }

  hasil.textContent = "Terima kasih, " + nama +
    "! Kamu suka " + hobi +
    ". Senang bisa membaca ceritamu!";

  form.reset();
});