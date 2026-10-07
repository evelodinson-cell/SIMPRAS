const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const message = document.getElementById("loginMessage");
const forgotBtn = document.getElementById("forgotBtn");

toggle.addEventListener("click", () => {
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  toggle.textContent = visible ? "Tampilkan" : "Sembunyikan";
});

forgotBtn.addEventListener("click", () => {
  message.textContent = "Fitur pemulihan password akan aktif setelah database Supabase terhubung.";
  message.style.color = "#2563eb";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "Database login belum dihubungkan. Tahap berikutnya adalah menghubungkan SIMPRAS ke Supabase.";
  message.style.color = "#d97706";
});
