// AMBIL FORM
const form = document.getElementById("contactForm");

// EVENT KETIKA FORM DIKIRIM
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Supaya tidak reload halaman

  // AMBIL NILAI INPUT
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // VALIDASI
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  // JIKA LOLOS VALIDASI
  alert("Terima kasih, pesan berhasil dikirim!");

  // RESET FORM
  form.reset();
});

// TAHUN OTOMATIS FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

