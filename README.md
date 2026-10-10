# SIPPRAS
**Sistem Informasi Pengelolaan Peminjaman Sarana dan Prasarana Sekolah**

Versi frontend statis untuk GitHub Pages, dikembangkan dari proyek SIMPRAS yang sudah ada. Tidak memerlukan proses build atau Supabase.

## Akun demo
- Admin Sarpras: `admin` / `adminsarpras`
- OSIS: `osis` / `osis123`
- Pramuka: `pramuka` / `pramuka123`
- PMR: `pmr` / `pmr123`

## Fitur
- Login dengan peran Admin Sarpras dan akun organisasi (OSIS, Pramuka, PMR), ganti akun, dan logout.
- Dashboard ringkasan data dan pengajuan.
- CRUD sarana/prasarana, kondisi, status, jumlah, lokasi, dan deskripsi.
- Arsip perubahan/penghapusan dengan alasan, snapshot sebelum/sesudah, detail arsip, dan pemulihan data yang dihapus.
- Form pengajuan peminjaman, pemeriksaan jadwal bentrok, keputusan Admin, notifikasi, riwayat, dan jadwal yang disetujui.
- Laporan rekap, grafik ringkasan, cetak/simpan PDF melalui browser, dan ekspor CSV.
- Profil Organisasi: nama organisasi dikunci sesuai akun; Ketua Organisasi, No. HP Ketua, Pembina Organisasi, dan No. HP Pembina dapat diedit.
- Profil Akun terpisah dari Profil Organisasi.
- Desain responsif untuk ponsel dan desktop.

## Menjalankan
Buka `index.html` atau unggah seluruh isi ZIP ke repository GitHub Pages.

## Catatan data dan keamanan
Aplikasi ini memakai `localStorage` pada browser. Data hanya tersimpan pada browser/perangkat yang digunakan dan tidak otomatis tersinkron ke perangkat lain. Karena ini demo frontend, login dan kata sandi tidak memberikan keamanan setara server/backend. Untuk penggunaan resmi lintas perangkat, gunakan backend/database dan autentikasi server. Jangan gunakan kata sandi penting atau data sensitif nyata.

Aplikasi mempertahankan kunci data lama `simpras_db` agar data SIMPRAS yang tersimpan pada browser yang sama dapat tetap terbaca. Sesi login baru memakai `sippras_session` dan membersihkan sesi SIMPRAS lama saat login.
