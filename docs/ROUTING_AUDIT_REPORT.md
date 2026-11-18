# LAPORAN AUDIT ROUTING & KONSISTENSI ROUTE-VIEW
**Website SDjNusantara**  
**Tanggal:** 18 November 2026  
**Framework:** SvelteKit + Vite  
**Status:** ALL TESTS PASSED (100% Verified)

---

## 1. RINGKASAN EKSEKUTIF
Audit routing menyeluruh dilakukan menyusul temuan bug di mana URL browser menampilkan `/layanan/beasiswa#beasiswa-chevening`, namun konten halaman yang dirender adalah halaman **Kontak** (`/kontak`).

Hasil investigasi mendalam mengungkap akar masalah:
1. **Asynchronous History Collision pada Modal Consultation Action**:
   Pada komponen `DetailModal.svelte`, tombol "Konsultasi Persiapan →" memiliki atribut `href="/kontak"` dan event handler `onclick={onClose}`. Ketika diklik, SvelteKit memulai navigasi sisi klien menuju `/kontak`. Namun secara bersamaan, fungsi `closeModal()` pada komponen induk (`ScholarshipSearchSection.svelte`) mengeksekusi `history.replaceState(null, '', cleanUrl)`. Karena `cleanUrl` dihitung berdasarkan URL aktif saat modal dibuka (`/layanan/beasiswa`), pemanggilan `replaceState` tersebut menimpa URL bar peramban kembali ke `/layanan/beasiswa#beasiswa-chevening` tepat saat SvelteKit selesai merender tampilan DOM `/kontak`. Akibatnya, URL bar dan tampilan halaman menjadi desinkron.
2. **Missing Element Target Anchor**:
   Kartu beasiswa pada `/layanan/beasiswa` tidak memiliki atribut ID elemen spesifik (seperti `id="beasiswa-{id}"`), sehingga navigasi peramban dengan hash `#beasiswa-chevening` tidak memiliki target scroll DOM yang valid.
3. **Broken & Phantom Internal Links**:
   Ditemukan link usang yang mengarah ke `/layanan/pendidikan#beasiswa` (anchor tidak ada di halaman pendidikan), `/layanan/pendidikan/beasiswa` (halaman 404), `/konsultasi` (redirect tanpa target jelas), dan slug program usang.

Seluruh akar masalah telah diperbaiki secara tuntas. Regression testing dilakukan menggunakan pengujian HTTP end-to-end (27 route) dan headless browser testing pada skenario real user interaction dengan hasil **100% PASSED**.

---

## 2. INVENTARIS ROUTE & STATUS (27 ROUTES)

| No | Path URL | Komponen Halaman | Status HTTP | Status View | Keterangan |
|---|---|---|---|---|---|
| 1 | `/` | `src/routes/+page.svelte` | 200 OK | PASS | Halaman Beranda Utama |
| 2 | `/tentang-kami` | `src/routes/tentang-kami/+page.svelte` | 200 OK | PASS | Profil Perusahaan, Visi Misi, Tim |
| 3 | `/layanan` | `src/routes/layanan/+page.svelte` | 200 OK | PASS | Hub Layanan Utama & Program |
| 4 | `/layanan/pendidikan` | `src/routes/layanan/pendidikan/+page.svelte` | 200 OK | PASS | Layanan Pendidikan & Konsultasi |
| 5 | `/layanan/beasiswa` | `src/routes/layanan/beasiswa/+page.svelte` | 200 OK | PASS | Direktori Pencarian & Filter Beasiswa |
| 6 | `/beasiswa` | `src/routes/beasiswa/+page.svelte` | 200 OK | PASS | Alias Direktori Beasiswa |
| 7 | `/kemitraan` | `src/routes/kemitraan/+page.svelte` | 200 OK | PASS | Layanan & Alur Kemitraan Institusi |
| 8 | `/kontak` | `src/routes/kontak/+page.svelte` | 200 OK | PASS | Formulir Kontak, Lokasi & WhatsApp |
| 9 | `/artikel` | `src/routes/artikel/+page.svelte` | 200 OK | PASS | Direktori Artikel & Perspektif |
| 10 | `/perspektif` | `src/routes/perspektif/+page.server.ts` | 301 Redirect | PASS | Redirect permanen ke `/artikel` |
| 11 | `/kebijakan-privasi` | `src/routes/kebijakan-privasi/+page.svelte` | 200 OK | PASS | Dokumen Kebijakan Privasi |
| 12 | `/syarat-ketentuan` | `src/routes/syarat-ketentuan/+page.svelte` | 200 OK | PASS | Dokumen Syarat & Ketentuan |
| 13 | `/layanan/hukum` | `src/routes/layanan/hukum/+page.ts` | 307 Redirect | PASS | Modul "Segera Hadir" (redirect ke `/layanan`) |
| 14 | `/layanan/pendidikan/program/scholarship-academy` | `src/routes/layanan/pendidikan/program/[slug]/+page.svelte` | 200 OK | PASS | Detail Program Scholarship Academy |
| 15 | `/layanan/pendidikan/program/talent-mapping-assessment` | `src/routes/layanan/pendidikan/program/[slug]/+page.svelte` | 200 OK | PASS | Detail Program Talent Mapping |
| 16 | `/layanan/pendidikan/program/executive-skill-accelerator` | `src/routes/layanan/pendidikan/program/[slug]/+page.svelte` | 200 OK | PASS | Detail Program Executive Skill |
| 17 | `/layanan/pendidikan/program/institutional-capacity-building` | `src/routes/layanan/pendidikan/program/[slug]/+page.svelte` | 200 OK | PASS | Detail Program Capacity Building |
| 18 | `/layanan/beasiswa/beasiswa-lpdp` | `src/routes/layanan/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Halaman Detail Beasiswa LPDP |
| 19 | `/layanan/beasiswa/beasiswa-chevening` | `src/routes/layanan/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Halaman Detail Beasiswa Chevening |
| 20 | `/layanan/beasiswa/beasiswa-australia-awards` | `src/routes/layanan/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Halaman Detail Australia Awards |
| 21 | `/layanan/beasiswa/beasiswa-pendidikan-indonesia-bpi` | `src/routes/layanan/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Halaman Detail Beasiswa BPI |
| 22 | `/beasiswa/beasiswa-chevening` | `src/routes/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Alias Detail Beasiswa Chevening |
| 23 | `/layanan/pendidikan/beasiswa/beasiswa-chevening` | `src/routes/layanan/pendidikan/beasiswa/[slug]/+page.svelte` | 200 OK | PASS | Alias Detail Beasiswa Chevening |
| 24 | `/artikel/peluang-beasiswa-pascasarjana-2025` | `src/routes/artikel/[slug]/+page.svelte` | 200 OK | PASS | Detail Artikel Peluang Beasiswa |
| 25 | `/perspektif/peluang-beasiswa-pascasarjana-2025` | `src/routes/perspektif/[slug]/+page.server.ts` | 301 Redirect | PASS | Redirect permanen ke artikel detail |
| 26 | `/artikel/transformasi-digital-pendidikan-tinggi` | `src/routes/artikel/[slug]/+page.svelte` | 200 OK | PASS | Detail Artikel Transformasi Digital |
| 27 | `/artikel/penguatan-tata-kelola-institusi-pendidikan` | `src/routes/artikel/[slug]/+page.svelte` | 200 OK | PASS | Detail Artikel Tata Kelola |

---

## 3. PEMETAAN LINK NAVIGASI & TARGET URL

### A. Navbar Header Utama
- Beranda: `/`
- Tentang Kami: `/tentang-kami`
- Layanan (Dropdown):
  - Semua Layanan: `/layanan`
  - Konsultasi Pendidikan: `/layanan/pendidikan`
  - Informasi Beasiswa: `/layanan/beasiswa`
- Kemitraan: `/kemitraan`
- Perspektif / Artikel: `/artikel`
- Kontak: `/kontak`

### B. Quick Link & CTA Lintas Halaman
- CTA "Konsultasi Persiapan →" di Modal Beasiswa: `/kontak`
- Back Button di Detail Beasiswa: `/layanan/beasiswa`
- CTA "Temukan Semua Beasiswa": `/layanan/beasiswa`
- Kategori Beasiswa Filter Link: `/layanan/beasiswa?kategori=pemerintah`, `/layanan/beasiswa?kategori=internasional`, `/layanan/beasiswa?kategori=swasta`
- Panduan Persiapan Beasiswa: `/layanan/beasiswa#panduan`
- Program Pendidikan: `/layanan/pendidikan#program`

---

## 4. PEMETAAN ANCHOR & TARGET ID ELEMEN

| Halaman | Anchor URL | Target ID Elemen | Komponen / File |
|---|---|---|---|
| `/layanan/beasiswa` | `#beasiswa-{id}` | `<div class="sch-card" id="beasiswa-{sch.id}">` | `ScholarshipSearchSection.svelte` |
| `/layanan/beasiswa` | `#panduan` | `<section id="panduan">` | `ScholarshipPrepGuide.svelte` |
| `/layanan/pendidikan` | `#program` | `<section id="program">` | `ProgramEducation.svelte` |
| `/layanan/pendidikan` | `#program-pendidikan`| `<span id="program-pendidikan"></span>` | `ProgramEducation.svelte` |
| `/layanan` | `#talent-management` | `<div id="talent-management">` | `ServicesZigzag.svelte` & `+page.svelte` |
| `/layanan` | `#scholarship-academy`| `<div id="scholarship-academy">` | `ServicesZigzag.svelte` & `+page.svelte` |
| `/layanan` | `#skills-development` | `<div id="skills-development">` | `ServicesZigzag.svelte` & `+page.svelte` |
| `/layanan` | `#institutional-partnership`| `<div id="institutional-partnership">` | `ServicesZigzag.svelte` & `+page.svelte` |
| `/kontak` | `#chat` | `<span id="chat"></span>` & Global click listener | `kontak/+page.svelte` & `ChatWidget.svelte` |

---

## 5. ANALISIS AKAR MASALAH (ROOT CAUSES) & PERBAIKAN

### Masalah 1: URL Browser Tidak Sinkron Saat Klik Konsultasi dari Modal Beasiswa
- **Penyebab**: `DetailModal.svelte` menjalankan `onClose` bersamaan dengan `<a>` klik menuju `/kontak`. `onClose` memanggil `history.replaceState` di `ScholarshipSearchSection.svelte` dengan URL `/layanan/beasiswa`. `replaceState` menimpa URL bar saat browser sedang berpindah ke `/kontak`.
- **Perbaikan**:
  1. Hapus pemanggilan `onClose` pada link anchor CTA di `DetailModal.svelte`. Navigasi router SvelteKit menangani transisi halaman secara otomatis dan menutup modal saat rute berpindah.
  2. Hapus manipulasi `history.replaceState` sembarangan pada `openModal()` dan batasi `closeModal()` agar hanya mengosongkan hash jika hash diawali dengan ID modal terkait.

### Masalah 2: Anchor Hash `#beasiswa-chevening` Tidak Menggulir ke Kartu
- **Penyebab**: Kartu beasiswa hanya memiliki class `.sch-card` tanpa atribut `id="beasiswa-{sch.id}"`.
- **Perbaikan**: Tambahkan atribut `id="beasiswa-{sch.id}"` ke setiap kartu beasiswa di `ScholarshipSearchSection.svelte`.

### Masalah 3: Dead Links Menuju `/layanan/pendidikan#beasiswa` dan `/layanan/pendidikan/beasiswa`
- **Penyebab**: Beberapa komponen dan knowledge base AI chatbot masih memuat link warisan sebelum restrukturisasi direktori beasiswa ke `/layanan/beasiswa`.
- **Perbaikan**:
  - `src/lib/components/sections/home/ScholarshipPrepSection.svelte`: Ubah link ke `/layanan/beasiswa`.
  - `src/lib/data/knowledge/` (`pendidikan.js`, `beasiswa.js`, `faq.js`): Ubah semua referensi beasiswa ke `/layanan/beasiswa`.
  - `src/routes/layanan/pendidikan/beasiswa/[slug]/+page.svelte`: Ubah tombol kembali ke `/layanan/beasiswa`.
  - `src/lib/components/sections/program/ProgramFeaturedCard.svelte`: Ubah slug usang ke `/layanan/pendidikan/program/scholarship-academy`.

### Masalah 4: Route `/perspektif` Menghasilkan Status 404
- **Penyebab**: Folder route utama artikel adalah `/artikel`, namun beberapa referensi masih menggunakan nama `/perspektif`.
- **Perbaikan**: Dibuat server routes `src/routes/perspektif/+page.server.ts` dan `src/routes/perspektif/[slug]/+page.server.ts` yang memberikan status HTTP 301 Permanent Redirect ke `/artikel` dan `/artikel/[slug]`.

---

## 6. HASIL PENGUJIAN REGRESI (REGRESSION TESTING)

### Skenario 1: Direct URL Navigation
- Akses langsung `http://localhost:5173/layanan/beasiswa#beasiswa-chevening`
- Hasil: Halaman Layanan Beasiswa berhasil dirender dengan konten beasiswa lengkap. Kartu `#beasiswa-chevening` ditemukan di DOM dan discroll ke viewport. Modal tidak memblokir akses konten.
- Status: **PASS**

### Skenario 2: Modal CTA Navigation to Contact
- Buka modal Chevening Scholarship lalu klik tombol "Konsultasi Persiapan →"
- Hasil: Browser bernavigasi ke `http://localhost:5173/kontak`. URL bar menampilkan `/kontak`, dan konten halaman yang tampil adalah halaman Kontak secara konsisten. Tidak terjadi bentrokan URL bar.
- Status: **PASS**

### Skenario 3: Browser Back & Forward Navigation
- Dari `/kontak`, tekan Browser Back Button
- Hasil: Browser kembali ke `/layanan/beasiswa#beasiswa-chevening` dengan konten beasiswa yang sesuai dan utuh.
- Status: **PASS**

### Skenario 4: Route Refresh & Direct URL Access
- Refresh halaman pada setiap 27 route yang diaudit.
- Hasil: Tidak ada konten yang tertukar atau redirect yang keliru. 27 route sukses dirender sesuai komponen halaman masing-masing.
- Status: **PASS**

---

## 7. KESIMPULAN
Seluruh routing website SDjNusantara telah diaudit, disinkronkan, dan diverifikasi secara komprehensif. Masalah desinkronisasi antara URL bar dan konten tampilan telah diselesaikan hingga ke akar penyebabnya tanpa menimbulkan regresi pada fitur lainnya.

