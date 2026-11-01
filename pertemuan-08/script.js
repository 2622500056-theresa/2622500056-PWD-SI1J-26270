// ===== NAVIGASI ANTAR HALAMAN =====
const linkNav = document.querySelectorAll(".nav a");
const halaman = document.querySelectorAll(".page");

function tampilkanHalaman(id) {
  halaman.forEach(function (h) {
    h.classList.toggle("active", h.id === id);
  });
  linkNav.forEach(function (a) {
    a.classList.toggle("active", a.dataset.page === id);
  });
}

linkNav.forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    tampilkanHalaman(a.dataset.page);
    history.replaceState(null, "", "#" + a.dataset.page);
  });
});

// buka halaman sesuai hash di URL (kalau ada)
const hashAwal = location.hash.replace("#", "");
if (hashAwal && document.getElementById(hashAwal)) {
  tampilkanHalaman(hashAwal);
}

// ===== FOTO PROFIL (kalau file foto belum ada, tampilkan emoji) =====
const foto = document.getElementById("fotoProfil");
foto.addEventListener("error", function () {
  foto.parentElement.textContent = "👩‍🍳";
});

// ===== FORM PENDAFTARAN =====
const form = document.getElementById("formDaftar");
const kotakHasil = document.getElementById("hasil");

function setError(idError, pesan) {
  document.getElementById(idError).textContent = pesan;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  setError("errNama", "");
  setError("errEmail", "");
  setError("errGender", "");
  setError("errPesan", "");

  if (nama.length < 3) {
    setError("errNama", "Nama minimal 3 huruf ya.");
    valid = false;
  }
  if (!polaEmail.test(email)) {
    setError("errEmail", "Format email belum bener nih.");
    valid = false;
  }
  if (!gender) {
    setError("errGender", "Pilih salah satu dulu ya.");
    valid = false;
  }
  if (pesan.length < 5) {
    setError("errPesan", "Pesannya jangan terlalu singkat, minimal 5 karakter.");
    valid = false;
  }
  if (!valid) return;

  kotakHasil.hidden = false;
  kotakHasil.innerHTML =
    "<b>Makasih, " + escapeHtml(nama) + "! 🎉</b><br>" +
    "Data kamu udah masuk:<br>" +
    "Email: " + escapeHtml(email) + "<br>" +
    "Jenis kelamin: " + gender.value + "<br>" +
    "Pesan: " + escapeHtml(pesan);
  form.reset();
});

form.addEventListener("reset", function () {
  kotakHasil.hidden = true;
  ["errNama", "errEmail", "errGender", "errPesan"].forEach(function (id) {
    setError(id, "");
  });
});

// biar input user nggak dianggap kode HTML
function escapeHtml(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}

// ===== TAB CATATAN RESEP =====
const dataResep = {
  pastry: {
    judul: "🥐 Pastry Instan",
    isi: [
      "Keluarin pastry dari freezer 10-15 menit biar gampang dibentuk.",
      "Oles kuning telur supaya warnanya cantik dan mengkilap.",
      "Oven di suhu sedang sampai kecokelatan, jangan sering buka pintu oven.",
      "Bisa diisi cokelat, keju, atau selai sesuai selera."
    ]
  },
  donat: {
    judul: "🍩 Donat",
    isi: [
      "Uleni adonan sampai kalis, jangan buru-buru.",
      "Diamkan adonan sampai mengembang dua kali lipat.",
      "Goreng dengan api kecil-sedang supaya matang sampai dalam.",
      "Beri topping saat donat sudah agak dingin biar nggak meleleh."
    ]
  },
  cookie: {
    judul: "🍪 Cookie",
    isi: [
      "Mentega harus lembut tapi jangan sampai cair.",
      "Jangan terlalu lama ngaduk adonan, nanti cookie jadi keras.",
      "Beri jarak antar adonan di loyang karena bakal melebar.",
      "Angkat saat pinggirannya cokelat, bagian tengah akan mengeras setelah dingin."
    ]
  }
};

const tombolTab = document.querySelectorAll(".tab-btn");
const isiResep = document.getElementById("isiResep");

function tampilkanResep(kunci) {
  const r = dataResep[kunci];
  let html = "<h3>" + r.judul + "</h3><ul>";
  r.isi.forEach(function (baris) {
    html += "<li>" + baris + "</li>";
  });
  html += "</ul>";
  isiResep.innerHTML = html;

  tombolTab.forEach(function (b) {
    b.classList.toggle("active", b.dataset.resep === kunci);
  });
}

tombolTab.forEach(function (b) {
  b.addEventListener("click", function () {
    tampilkanResep(b.dataset.resep);
  });
});

tampilkanResep("pastry");