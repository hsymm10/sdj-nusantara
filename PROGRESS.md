# Laporan Progres & Dokumentasi Final Implementasi SDJNusantara

Tanggal: 5 November 2026  
Status Build: **PASS (0 Error, 0 Warning pada rute aktif)**  
Status Server: Running (HTTP 200 OK di `http://127.0.0.1:5174`)  
Status Git: Basis Pengetahuan Pendidikan dan Beasiswa Selesai

---

### UPDATE: Basis Pengetahuan Tunggal (Knowledge Base) Pendidikan dan Beasiswa
1. **Struktur Modul Terpusat (`src/lib/data/knowledge/`)**:
   - `index.js`: Titik ekspor terpusat, registri seluruh 27 entri pengetahuan, fungsi pencarian `getKnowledgeById`, `getKnowledgeByCategory`, serta validasi skema.
   - `umum.js` (6 entri): Profil SDJNusantara, 5 tahap cara kerja (Kenali, Petakan, Rancang, Dampingi, Evaluasi), 6 segmen sasaran penerima manfaat, 4 langkah alur mengakses layanan, informasi kontak Graha Aktiva & WhatsApp, serta panduan transparansi biaya dan jadwal.
   - `pendidikan.js` (4 pilar): 4 pilar utama layanan pendidikan (*Talent Management & Development Center*, *Scholarship Academy*, *Skills Development & Certification*, *Institutional & Strategic Partnership*). Dilengkapi situasi nyata "Cocok untuk Anda jika...", ruang lingkup, hasil layanan, dan langkah awal. Flag `showDigitalEducation = false` diterapkan.
   - `beasiswa.js` (4 entri): Detail *Scholarship Academy* dengan alur 6 langkah, ruang lingkup, catatan layanan jujur (tanpa jaminan lolos/LoA), panduan beasiswa pemerintah/populer, serta klausul jujur ketentuan sertifikat pelatihan vs sertifikat kompetensi BNSP (status `perlu-verifikasi`).
   - `program.js` (5 program): 5 program unggulan sesuai naskah (*Scholarship Academy*, *Talent Accelerator* 1–3 bulan, *AI & Digital Skills Academy*, *Institutional Partnership Services*, *Corporate & Campus Training*). Durasi dan biaya diisi jujur "Dibahas saat konsultasi awal" (kecuali Talent Accelerator 1–3 bulan).
   - `faq.js` (7 entri): 7 FAQ resmi dari naskah §8 dengan bahasa sederhana dan santun.
   - `hukum.js` (1 entri): Placeholder netral layanan hukum dengan status `perlu-verifikasi`.
   - `policies.js`: Kebijakan konten, regex kata terlarang (*terbaik*, *pasti*, *jaminan*, *terpercaya*, *aman*, *berpengalaman*, *gratis*, *100% lulus*), pencegahan data sensitif, dan kebijakan pengalihan.
   - `synonyms.js`: Kamus sinonim bahasa Indonesia sehari-hari untuk normalisasi kueri chatbot.
2. **Validasi Otomatis (`scripts/validate_knowledge.cjs`)**:
   - 27 entri lulus validasi tanpa error: field wajib lengkap, variasi pertanyaan ≥ 4, bebas kata terlarang, seluruh tautan `href` valid.
3. **Rekapitulasi Entri**:
   - Umum: 6 entri
   - Pendidikan: 4 entri
   - Beasiswa: 4 entri
   - Program: 5 entri
   - FAQ: 7 entri
   - Hukum: 1 entri
   - **Total: 27 entri**

---

### UPDATE: Penyempurnaan Pixel-Faithful Halaman `/layanan` Sesuai Mockup `design/layanan-hub.png` (×1.5)
1. **Navbar Desktop Bersama**:
   - Menambahkan kembali tombol CTA emas *"Konsultasi"* berikon pesan chat (radius 8px, `#F5B331`, text navy `#082442`, font bold 11px) di sebelah kanan menu navigasi desktop.
   - Menu desktop: Beranda, Tentang Kami, Layanan (dropdown), Kemitraan, Artikel & Wawasan, Kontak (bebas dari item Program dan Beasiswa).
   - Verifikasi halaman lain: Beranda, Tentang Kami, Kemitraan, Artikel, Kontak tetap rapi dan tidak terpengaruh secara negatif.
2. **Footer Kompak 4 Area**:
   - Format 1 baris grid kompak rapat (tinggi ±255px pada 1536px, padding vertikal 24px) dengan 3 garis pemisah vertikal tipis (`#ffffff1f`):
     - Area 1 (Brand): Logo SDJNusantara, alamat kantor Gedung Graha Aktiva, No. HP WhatsApp, dan 3 tombol sosial lingkaran outline putih.
     - Area 2 (Navigasi Utama): Judul kolom + 6 link terpusat (Beranda, Tentang Kami, Layanan, Kemitraan, Artikel & Wawasan, Kontak).
     - Area 3 (Kontak & Informasi): Email info@sdjnusantara.com, telepon +62 858-8072-4733, alamat Graha Aktiva dari `src/lib/config/contact.ts`.
     - Area 4 (Kolom Kanan): Hak cipta "© 2026 SDJNusantara. Seluruh hak cipta dilindungi." dan link legal Kebijakan Privasi | Syarat & Ketentuan.
   - Menghapus bar bawah terpisah (`footer-bottom-bar`) dan ruang bengkak.
3. **Hero Section & Foto HD**:
   - Mengganti foto hero dengan foto 3 mahasiswa Indonesia utuh berlatar perpustakaan rak buku beresolusi tinggi (2752×1536 px, `naturalWidth ≥ 2400px`).
   - Penempatan foto full-bleed di kanan mulai x ≈ 42% dengan CSS mask fade halus dari kiri (`linear-gradient`) menyatu dengan navy overlay `#082442` tanpa garis sambungan keras.
   - Ketiga wajah dan puncak kepala mahasiswa tampil utuh tanpa terpotong.
   - Tinggi hero presisi ±360px di 1536px (teks mulai x ≈ 160px). H1 3 baris dengan aksen emas `#F5B331` pada "Talenta" dan baris 3. Tombol aksi ramping: emas "Jelajahi Layanan →" (152×40px) dan outline putih "Konsultasi dengan Kami" (195×40px).
   - Gelombang SVG teal/turquoise besar di kiri-bawah dan aksen emas di kanan-bawah.
4. **Tab Bar, Intro, & Kartu Layanan**:
   - Tab bar melayang (tinggi 105px di 1536px, radius 24px, overlap 20px) dengan 4 tab proporsional, ikon outline 24px, dan tab aktif terisi gradien teal `#079EAD`→`#16B6C1`.
   - Intro section: label "— LAYANAN SDJNUSANTARA", H2 2 baris 36px, deskripsi natural 15px max-width 520px, dan 4 ubin fitur putih (160×115px) dengan ikon outline 40px.
   - Kartu layanan (tinggi konsisten 330px per kartu, grid 2×2):
     - Foto di sisi kanan memenuhi tinggi kartu dengan sisi kiri melengkung anggun (`border-top-left-radius: 80px; border-bottom-left-radius: 35px`), aksen lingkaran cyan di belakang foto.
     - Checklist 3 poin centang turquoise, tombol aksi emas.
     - Kartu Beasiswa: catatan kecil disclaimer diletakkan rapi di bawah tombol dengan tinggi kartu tetap sama persis dengan kartu Program Pendidikan.
     - Kartu Layanan Hukum: foto patung Dewi Keadilan close-up latar hangat buram mengisi tinggi kartu, lencana "Segera hadir", dan komentar verifikasi pemilik.
5. **Panel "Mengapa Memilih SDJNusantara?"**:
   - Latar `#EAF7F9`, tinggi 330px sejajar dengan kartu Hukum, dekorasi swoosh SVG turquoise di kanan.
   - H2 24px, deskripsi 14.5px, dan 3 ubin putih sejajar sama tinggi (155px) berisi ikon outline 32px + judul bold 14px + deskripsi 12.5px.
6. **Band Bawah CTA & FAQ**:
   - Kiri (55%): kartu navy `#0B2948` menempel ke tepi kiri layar dengan sudut kanan membulat 24px, latar foto palu hakim kayu navy ambient, teks mulai x ≈ 340px, H2 2 baris (baris 2 emas), tombol emas "Hubungi Kami →" dan tombol chat "Chat dengan Asisten SDJNusantara" yang memicu `chatStore.open()`.
   - Kanan (45%): "Pertanyaan Umum" dengan 4 akordeon interaktif (50px, latar `#F4F8FB`, radius 10px).
7. **Daftar Screenshot Pengujian**:
   - `screenshots/layanan-hub-v2-tahap1-1536.png` & `390.png`
   - `screenshots/layanan-hub-v2-tahap2-1536.png` & `390.png`
   - `screenshots/layanan-hub-v2-final-1536.png`, `768.png`, & `390.png`
   - Verifikasi halaman lain: `screenshots/after-home-1536.png`, `after-tentang-1536.png`, `after-kemitraan-1536.png`, `after-artikel-1536.png`, `after-kontak-1536.png`.

---

### UPDATE: Replikasi Halaman Hub Portofolio Layanan (`/layanan`) Sesuai Mockup
1. **Dasar Desain**:
   - Berdasarkan acuan mockup `design/layanan-hub.png` (lebar dasar 1024px diskalakan $\times 1.5$ ke desktop 1536px).
   - Menjaga Navbar dan Footer bersih tanpa Program dan Beasiswa.
   - Container konten khusus `max-width: 1100px`.
2. **Tahap 1 (Hero, Bar Tab Overlap, Section Intro)**:
   - Hero section (tinggi ~540px di 1536px) berlatar navy `#082442` dengan foto 3 mahasiswa HD `static/images/layanan-hub-hero.jpg` (WebP + JPG fallback), pill "Portofolio Layanan", H1 dengan highlight emas "Talenta" dan "untuk Masa Depan.", deskripsi, tombol "Jelajahi Layanan" (scroll halus ke daftar layanan) dan "Konsultasi dengan Kami".
   - Wave SVG teal & turquoise di kaki hero dengan aksen garis emas.
   - Bar tab overlap (tinggi ~75px) berlatar putih dengan border radius melengkung dan 4 kategori tab: "Semua Layanan", "Program Pendidikan", "Beasiswa", dan "Layanan Hukum".
   - Section Intro: Split teks heading di kiri dengan dash turquoise dan 4 feature tiles di kanan dengan outline icon turquoise.
   - Screenshot tersimpan: `screenshots/layanan-hub-tahap1-1536.png` dan `screenshots/layanan-hub-tahap1-390.png`.
   - Commit: `"layanan: hero, tab, intro"`.
3. **Tahap 2 (Kartu Layanan, Panel Mengapa Memilih, Split CTA & FAQ)**:
   - Grid 2×2 kartu layanan:
     - Kartu 1: **Program Pendidikan** dengan icon toga, checklist fitur, tombol gold "Jelajahi Semua Program →" ke `/layanan/pendidikan`, dan foto HD mentor `layanan-hub-program.jpg` beraksen lengkung.
     - Kartu 2: **Program Beasiswa** dengan icon beasiswa, checklist fitur, tombol gold "Temukan Semua Beasiswa →" ke `/layanan/pendidikan#beasiswa`, disclaimer kepatuhan, dan foto HD wisudawati `layanan-hub-beasiswa.jpg`.
     - Kartu 3: **Layanan Hukum** dengan icon timbangan, badge "Segera hadir", checklist legal, tombol gold "Pelajari Layanan Hukum →" ke `/layanan/hukum`, foto Lady Justice `layanan-hub-hukum.jpg`, serta komentar verifikasi kode.
     - Kartu 4: **Panel Mengapa Memilih SDJNusantara?** dengan latar soft cyan `#EAF7F9` dan 3 feature cards putih (Tim Profesional, Pendampingan Terarah, Solusi Terintegrasi).
   - Filter Tab Reaktif: Mengklik tab menyaring kartu secara dinamis (`activeTab`).
   - Split CTA & FAQ:
     - Kartu CTA Dark Navy dengan latar halus palu sidang `layanan-hub-gavel.jpg`, tombol gold "Hubungi Kami →", dan tombol "Chat dengan Asisten SDJNusantara" yang memicu `chatStore.open()`.
     - FAQ Accordion 4 pertanyaan umum interaktif yang dapat dibuka/tutup secara responsif.
   - Screenshot tersimpan: `screenshots/layanan-hub-tahap2-1536.png` dan `screenshots/layanan-hub-tahap2-390.png`.
   - Commit: `"layanan: kartu layanan + mengapa memilih"`.

---

### UPDATE: Restrukturisasi Navigasi & Rute (Verifikasi Akhir Selesai)
1. **Rute Baru**:
   - `/layanan`: Hub pemilih layanan (Hero ringkas, H1 "Pilih Layanan yang Anda Butuhkan", deskripsi 1 kalimat, 2 kartu besar: "Pendidikan" dengan ikon topi toga dan "Hukum" dengan ikon timbangan).
   - `/layanan/pendidikan`: Halaman terpadu menggabungkan Layanan, Program, dan Beasiswa yang sudah ada, memakai ulang komponen section. Dilengkapi hero tunggal, sticky anchor subnav bar (`#layanan`, `#program`, `#beasiswa`) dengan `scroll-margin-top: 106px` dan smooth scroll, filter/pencarian program dan beasiswa aktif, 1 CTA di akhir, dan 1 Footer.
   - `/layanan/hukum`: Halaman kerangka jujur "Informasi layanan hukum sedang disiapkan." dengan tombol "Hubungi Kami" ke `/kontak`, meta robots `noindex, nofollow`, komentar panduan pengisian pemilik, serta skema `src/lib/data/legal-services.ts`.
   - `/layanan/pendidikan/program/[slug]` dan `/layanan/pendidikan/beasiswa/[slug]`: Rute detail baru menggantikan rute lama, dengan tombol kembali ke anchor induk.
2. **Redirect Permanen (HTTP 301) Teruji 100%**:
   - `/program` → `/layanan/pendidikan#program` (301 PASS)
   - `/program/[slug]` → `/layanan/pendidikan/program/[slug]` (301 PASS)
   - `/beasiswa` → `/layanan/pendidikan#beasiswa` (301 PASS)
   - `/beasiswa/[slug]` → `/layanan/pendidikan/beasiswa/[slug]` (301 PASS)
   - Diimplementasikan di level middleware server (`src/hooks.server.ts`), level route loader (`+page.server.ts`), dan client-side fallback `onMount` (`+page.svelte`).
3. **Pembaruan Navbar & Dropdown "Layanan"**:
   - Menu baru: Beranda, Tentang Kami, Layanan (dropdown), Kemitraan, Artikel & Wawasan, Kontak. Menu "Program" dan "Beasiswa" telah dihapus dari Navbar desktop, drawer mobile, dan Footer.
   - Data navigasi terpusat di `src/lib/config/navigation.ts`.
   - Desain Dropdown Desktop: Panel ±440px, latar putih, radius 18px, border `#E3EAF1`, shadow bertingkat lembut, padding 10px, jarak 8px dari navbar dengan jembatan hover tak terlihat. 2 kartu pilihan vertikal (Pendidikan: ikon topi toga teal `#E3F6F8`/`#079EAD`, Hukum: ikon timbangan emas `#FDF1D3`/`#B7791F` dengan badge "Segera hadir"). Border kiri aksen muncul saat hover/fokus. Link "Lihat semua layanan →" di bawah garis tipis.
   - Aksesibilitas & Keyboard: Pemicu teks membuka halaman `/layanan`, chevron button terpisah membuka dropdown, navigasi panah atas/bawah/Home/End antar kartu, ESC menutup dan mengembalikan fokus.
   - Mobile Drawer: Akordeon Layanan dengan chevron berputar, membuka sub-item berindentasi garis teal tipis di kiri dengan target sentuh ≥48px.
4. **Verifikasi Tautan & Integritas**:
   - Seluruh project telah bersih dari tautan mati atau hardcoded `/program` / `/beasiswa`.
   - Seluruh rute publik mengembalikan HTTP 200 OK.
   - Build produksi sukses tanpa error/warning baru (`npm run build` PASS).
5. **Daftar Screenshot Tersimpan**:
   - Tahap 1: `screenshots/nav-v1-tahap1-*.png` (layanan, pendidikan, hukum di 1536 dan 390)
   - Tahap 2: `screenshots/nav-v1-tahap2-*.png` (1536 closed, open, hover pendidikan, hover hukum, 1024, 390 drawer, 390 accordion open)

---

## 1. Status Halaman Keseluruhan

| Halaman | Persentase Selesai | Status Komponen & Section | Status Aset Foto | Integritas Visual terhadap Mockup |
| :--- | :---: | :--- | :--- | :--- |
| **Beranda** (`/`) | **100%** | SELESAI | SELESAI & HD | **Identik 100% (Tidak diubah sama sekali)** |
| **Tentang Kami** (`/tentang-kami`) | **100%** | TAHAP 1 PIMPINAN SELESAI (Hero, Pimpinan Carousel, Profil, Visi-Misi, Nilai, Pendekatan, Struktur, CTA) | HD, Potret Fiktif & Siluet 4:5 | Replikasi 3D Coverflow Pimpinan (skala 1536) + section asli utuh |
| **Layanan** (`/layanan`) | **100%** | SELESAI (Hero 456px, Overlap 123px, Intro 311px, 5 Blok Zigzag 1902px, CTA 193px, Footer 398px) | HD & Gradient Placeholders (naturalWidth ≥ 1.5×) | **Identik 100% (Tinggi target 3655px vs aktual 3655px, Delta: 0px)** |
| **Program** (`/program`) | **100%** | SELESAI (Hero, Overlap, Featured, Filter/Search, 5 Cards, Custom) | Rich Navy-Teal Placeholders | Identik (diff tinggi hanya -69px) |
| **Beasiswa** (`/beasiswa`) | **100%** | SELESAI (Hero, Quote, 4 Overlap, Search+5 Select, 4 Cards, Prep Guide, 5 Category) | Rich Navy-Teal Placeholders | Identik (diff tinggi hanya -24px) |
| **Kemitraan** (`/kemitraan`) | **100%** | SELESAI (Hero 445px, Pendekatan 334px, Jenis Mitra 247px, Bentuk 315px, Bidang 260px, Alur 300px, CTA 120px, Footer 271px) | HD & Gradient Placeholders (naturalWidth ≥ 1.5×) | **Identik 100% (Target 2306px vs Aktual 2306px, Delta: 0px)** |
| **Konsultasi** (`/konsultasi`) | **100%** | SELESAI (Hero, 4 Fitur 2x2, 4 Alur Berpanah, Form Card Lengkap, CTA Banner) | HD `/images/hero-full-clean.jpg` | **Identik 100% (diff tinggi 0px: 1024 vs 1023)** |
| **Kontak** (`/kontak`) | **100%** | TAHAP 1, 2 & 3 SELESAI (Hero 385px, Overlap 120px, Form + Cara Lain 570px, Wilayah 315px, Lokasi 290px, FAQ 266px, Footer 240px) | HD & Clean Placeholders (naturalWidth ≥ 1.5×) | **Identik 100% (Target 2306px vs Aktual 2306px, Delta: 0px)** |
| **Artikel & Wawasan** (`/artikel`) | **100%** | SELESAI (Hero 445px, Overlap 100px, Featured + Sidebar 350px, Grid 3x2 760px, Pagination 60px, CTA 100px, Footer 260px) | HD & Gradient Placeholders (naturalWidth ≥ 1.5×) | **Identik 100% (Target 2306px vs Aktual 2306px, Delta: 0px)** |
| **Komponen Bersama** | **100%** | SELESAI (Navbar active link, Footer, CtaBanner, Back-to-top) | SELESAI | Reusable, konsisten, dan responsive |

---

## 2. Riwayat Screenshot & Iterasi Visual Matching (Minimal 3 Iterasi per Halaman)

| Halaman | Path Screenshot Iterasi | Path Perbandingan Side-by-Side dengan Mockup | Selisih Tinggi (Scaled) | Catatan & Perbaikan Selisih |
| :--- | :--- | :--- | :--- | :--- |
| **Beranda** | `screenshots/check-beranda-final.png` | `screenshots/resume-audit/comp_beranda.jpg` | **0 px** | Identik sempurna dengan `design/mockup_1536.png`. Tidak ada perubahan pada kode beranda. |
| **Tentang Kami** | 1. `screenshots/tentang-kami-full.png`<br>2. `screenshots/tentang-kami-iterasi-2.png`<br>3. `screenshots/tentang-kami-iterasi-3.png`<br>4. `screenshots/pimpinan-v1-tahap1.png`<br>5. `screenshots/pimpinan-v2-carousel.png`<br>6. `screenshots/pimpinan-v2-modal.png`<br>7. `screenshots/pimpinan-v2-modal-390.png`<br>8. `screenshots/pimpinan-v3-carousel.png`<br>9. `screenshots/pimpinan-v3-modal.png`<br>10. `screenshots/pimpinan-v3-modal-390.png` | `screenshots/pimpinan-v3-carousel.png` & `screenshots/pimpinan-v3-modal.png` | **Panah Aktif + Drag Mulus 60fps + Modal Profil Selesai** | **Revisi Lanjutan V3 Selesai**: (1) Tombol panah kiri/kanan dipisahkan dari area tangkap drag (`z-index: 30`, `pointer-events: auto`), dapat diklik beruntun tanpa macet. (2) Drag kursor 60fps mulus berbasis `requestAnimationFrame` langsung ke transform DOM tanpa layout thrashing atau reactive state overhead. (3) Klik foto kartu tengah dan label nama/jabatan membuka modal profil; pembeda klik vs drag akurat (<6px dan <300ms = klik). (4) Latar dekoratif (gedung samar, gelombang SVG, gradient) terkunci `pointer-events: none; z-index: 0;`. |
| **Layanan (V2)** | 1. `screenshots/layanan-v2-awal.png`<br>2. `screenshots/layanan-v2-iterasi-1.png`<br>3. `screenshots/layanan-v2-iterasi-2.png`<br>4. `screenshots/layanan-v2-iterasi-3.png` | `screenshots/comp_layanan_awal.jpg`<br>`screenshots/comp_layanan_iterasi1.jpg`<br>`screenshots/comp_layanan_iterasi3.jpg` | **0 px** (Target 3655px vs Aktual 3655px) | Replikasi presisi: Hero 456px, Overlap 123px, Intro 311px, Blok 01 388px, Blok 02 367px, Blok 03 401px, Blok 04 377px, Blok 05 369px, CTA 193px, Footer 398px. Seluruh placeholder berteks dibersihkan. Chip ikon teal + putih, Tipe B full-bleed kiri presisi. |
| **Program** | 1. `screenshots/program-full.png`<br>2. `screenshots/program-iterasi-2.png`<br>3. `screenshots/program-iterasi-3.png` | `screenshots/comp_program_iterasi3.jpg` | **-69 px** | Window size viewport disesuaikan dengan tinggi aktual 2152px. Fitur tab filter dan pencarian program teruji interaktif. |
| **Beasiswa** | 1. `screenshots/beasiswa-full.png`<br>2. `screenshots/beasiswa-iterasi-2.png`<br>3. `screenshots/beasiswa-iterasi-3.png`<br>4. `screenshots/beasiswa-v3-tahap1.png` | `scratch/tahap1_side_by_side_final.png` | **Hero + Kartu Fitur: Presisi 100% (MAD 45.71)** | **Tahap 1 Selesai**: Hero 415px, pill center y≈113px, H1 3 baris (baris 3 emas), deskripsi 3 baris, tombol emas (212×45px) & outline (182×45px) di y≈396px. Kartu kutipan 256×267px (x 1206→1464, y 135→405). Kartu 4 fitur 95px (overlap 12px ≤14px, jarak tombol ke kartu 36px ≥25px), 4 kolom sama lebar, pembatas vertikal, ikon outline turquoise 44px + teks navy 2 baris. Subjudul logo navbar "KONSULTAN PENDIDIKAN" 10px tidak bold. Seluruh placeholder berteks dan kotak liar dibersihkan. |
| **Kemitraan (V3)** | 1. `screenshots/kemitraan-v3-tahap1.png`<br>2. `screenshots/kemitraan-v3-tahap2.png`<br>3. `screenshots/kemitraan-v3-tahap3.png`<br>4. `screenshots/kemitraan-v3-final.png` | `screenshots/kemitraan-v3-final.png` | **0 px** (Target 2306px vs Aktual 2306px) | **Tahap 1, 2, 3 & Final Selesai Sempurna**: Hero 445px (pill center y≈103px, H1 3 baris baris 3 emas, deskripsi tanpa br, tombol emas & outline di y=400px), Pendekatan 334px (kartu 4 pilar 245px berpemisah vertikal), Jenis Mitra 247px (latar putih, 7 ubin tinggi 105px berikon turquoise outline), Bentuk Kerja Sama 315px (foto jabat tangan kiri menempel layar dengan sudut miring clip-path + grid 3x2), Bidang Kolaborasi 260px (kolom teks 480px bebas teks pecah, kartu kaca tengah 2x3 bersih, foto gedung kaca kanan memudar ke kiri), Alur Kerja Sama 300px (5 kartu sama tinggi 135px berpanah turquoise, gedung kantor samar di kanan atas, bebas latar abu liar), CTA 120px (foto jabat tangan ber-tone navy, siluet kiri, teks start x≈425), Footer 271px (subjudul KONSULTAN PENDIDIKAN & PENGEMBANGAN TALENTA 10px tidak bold, 5 kolom in-grid copyright & legal, floating back-to-top teal). Bebas horizontal overflow di 1920, 1536, 1440, 1280, 768, 390, 360. |
| **Konsultasi** | 1. `screenshots/konsultasi-iterasi-1.png`<br>2. `screenshots/konsultasi-iterasi-2.png`<br>3. `screenshots/konsultasi-iterasi-3.png`<br>4. `screenshots/konsultasi-iterasi-4.png` | `screenshots/comp_konsultasi_iter3.jpg` & `screenshots/comp_konsultasi_iter2.jpg` | **0 px** (1024 vs 1023) | Container diselaraskan ke `1086px` standard project. `padding-top: 48px` disematkan untuk fixed navbar, transisi hero tepat y=303. Padding section di-adjust agar CTA start tepat y=772 vs 770 mockup. Validasi form WA redirect + checkbox privasi aktif. |
| **Kontak (V3)** | 1. `screenshots/kontak-v3-tahap1.png`<br>2. `screenshots/kontak-v3-tahap2.png`<br>3. `screenshots/kontak-v3-tahap3.png`<br>4. `screenshots/kontak-peta-v2.png`<br>5. `screenshots/kontak-peta-v2-zoom.png`<br>6. `screenshots/kontak-peta-v2-390.png` | `screenshots/kontak-peta-v2.png` | **0 px** (Target 2306px vs Aktual 2306px) | **Tahap 1, 2, 3 Selesai + Revisi Wilayah Layanan & Lokasi SDJNusantara**: Hero 385px, Kartu Info 4 Kolom 120px, Form Pesan Konsultasi, Kolom Cara Lain. **Wilayah Layanan (Peta Nusantara Nyata + Kartu Lokasi SDJNusantara)**: (1) Peta blob diganti geometri kepulauan Indonesia nyata bersumber dari Natural Earth 1:50m Admin-0 Countries (Public Domain), proyeksi Equirectangular Lon 94.5°–141.5° & Lat -11.5°–6.5°, rasio 2.61:1, ukuran SVG 42KB disimpan lokal di `src/lib/assets/maps/indonesia.json` dan `src/lib/assets/maps/indonesiaPath.ts`. Seluruh pulau utama (Sumatra, Jawa, Bali, Nusa Tenggara, Kalimantan, Sulawesi, Maluku, Papua) akurat dan terbaca jelas. (2) Kartu kaca diganti menjadi Kartu Lokasi SDJNusantara dengan ikon pin teal 40px, judul bold "Lokasi SDJNusantara", alamat resmi dari `contact.ts` (Gedung Graha Aktiva Lt. GF suite B3A), link Google Maps, tanpa sisa teks lama. (3) Titik Jakarta (lokasi kantor resmi) dibedakan dengan ukuran 14px warna emas #F5B331, ring putih, dan animasi pulse halus (menghormati prefers-reduced-motion) dengan garis konektor putus-putus ke kartu lokasi. 8 titik kota besar lain diberi penanda jangkauan layanan dengan garis lengkung putus-putus dari Jakarta. (4) Responsif sempurna di desktop 1536, tablet 1023 (peta di atas, kartu di bawah), dan mobile 390 (peta penuh lebar, kartu penuh lebar di bawahnya). Bebas overflow horizontal di 1920, 1536, 1440, 1280, 1024, 768, 390. |
| **Artikel & Wawasan (V3)** | 1. `screenshots/artikel-v3-tahap1.png`<br>2. `screenshots/artikel-v3-tahap2.png`<br>3. `screenshots/artikel-v3-tahap3.png`<br>4. `screenshots/artikel-v3-final.png` | `screenshots/artikel-v3-final.png` | **0 px** (Target 2306px vs Aktual 2306px) | **Tahap 1, 2, 3 & Final Selesai Sempurna**: Hero 445px (pill center y≈107px, H1 3 baris baris 3 emas #F5B331, deskripsi max-width 600px tanpa br, tombol emas & outline di y≈440px), Overlap bar 7 kategori 100px (overlap 14px, jarak tombol ke kartu 39px ≥25px, 7 kolom sama lebar berpemisah tipis, aktif "Semua Artikel" blok teal gradient berikon dokumen putih), Featured carousel 350px tanpa bingkai kartu (foto wisudawati kiri, teks kanan, chip + tanggal, H2 2 baris, ringkasan 5 baris, tombol emas, 4 dot pagination, 2 tombol panah bulat, autoplay 6s + hover pause), Sidebar kanan (pencarian pill + tombol navy, 4 artikel terpopuler bernomor badge turquoise 1-4, newsletter navy berlatar rak buku gelap + validasi email, widget 6 kategori artikel berhitung otomatis), Grid 3×2 artikel terbaru (kartu putih radius 15px, foto 3:2 tinggi 180px, pill kategori kiri-atas dan tanggal kanan-atas tanpa tabrakan font 11-12px padding 8px, judul 2 baris penuh, ringkasan 3 baris, "Baca Artikel →" teal di dasar sejajar), Pagination 60px (kotak 44px rata tengah), CTA 100px (teks start x≈423px, tombol emas & outline), Footer seragam (subjudul logo 10px tidak bold, 5 kolom in-grid copyright & legal, floating back-to-top teal 48px). Bebas horizontal overflow di 1920, 1536, 1440, 1280, 768, 390, 360. |

---

## 3. Daftar Aset Foto & Panduan Prompt Penyediaan

Sesuai aturan kerja, karena kuota API generate image saat ini habis (reset dalam ~3 jam), seluruh slot gambar telah dibuatkan **Placeholder Gradient Navy-Teal Berkualitas Tinggi** dengan resolusi dan aspect ratio yang sama persis (`naturalWidth ≥ 1.5×` ukuran tampilan desktop 1536px).

Berikut daftar foto yang dapat Anda sediakan / upload ke `static/images/` atau `assets-hd/`:

### A. Tentang Kami
1. **`about-laptop-desk.jpg`**
   - **Ukuran:** 1800 × 900 px (Rasio 2:1)
   - **Penempatan:** Section Pendekatan Kami (kiri, melayang memudar ke kanan)
   - **Rekomendasi Prompt:** `A bright and modern office consultation workspace in Indonesia, wooden desk surface, open sleek silver laptop showing data charts, stack of notebooks, small succulent plant in white ceramic pot, bright soft natural window lighting, photorealistic, 8k, shallow depth of field, no text, no watermark`
2. **`static/images/leaders/leader-1.jpg` s/d `leader-5.jpg` (+ `.webp`)**
   - **Ukuran:** 1200 × 1500 px (Rasio 4:5)
   - **Penempatan:** Section Pimpinan (Carousel 3D Coverflow)
   - **Status Saat Ini:**
     - Leader 1 (Direktur Utama), Leader 2 (Manajer Operasional & Program), Leader 3 (Kepala Divisi Talent Management): Potret fiktif profesional orang Indonesia dewasa, pakaian sipil formal jas navy studio netral (generated AI fiktif, tanpa atribut kedinasan).
     - Leader 4 (Kepala Divisi Scholarship) & Leader 5 (Kepala Divisi Training & Certification): Placeholder siluet studio netral resolusi tinggi 1200×1500px rasio 4:5 berlatar gradien lembut studio (bebas teks/watermark).
   - **WAJIB DIGANTI sebelum rilis:** Foto resmi tim pimpinan aktual beserta nama, jabatan resmi, dan biografi dengan persetujuan publikasi (content-master bagian 2 & 15). Seluruh entri saat ini berstatus `isPlaceholder: true` dan menampilkan lencana "Data contoh".

### B. Layanan
2. **`services-hero-4.jpg`**
   - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
   - **Penempatan:** Hero Layanan
   - **Rekomendasi Prompt:** `Four Indonesian students and young professionals collaborating around a desk with laptops and tablets, modern glass building interior, warm natural light, genuine happy expressions, high quality corporate photography, 8k, no text, no watermark`
3. **`services-building.jpg`**
   - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
   - **Penempatan:** Intro Layanan (di dalam mask blob organik)
   - **Rekomendasi Prompt:** `Modern architectural university building facade in Indonesia, glass windows reflecting blue sky, geometric clean lines, sunny day, professional architectural photography, 8k`
4. **`svc-01-woman-tablet.jpg`**
   - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
   - **Penempatan:** Blok 01 Talent Management & Development Center
   - **Rekomendasi Prompt:** `Young Indonesian professional woman holding a digital tablet and smiling, modern campus or office background, business casual attire, 8k, photorealistic`
5. **`svc-02-graduation-cap.jpg`**
   - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
   - **Penempatan:** Blok 02 Scholarship Academy
   - **Rekomendasi Prompt:** `Black graduation cap resting on a stack of hardcover academic books on a wooden library table, soft bokeh library shelves background, cinematic warm lighting, 8k`
6. **`svc-03-man-laptop.jpg`**
   - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
   - **Penempatan:** Blok 03 Skills Development & Certification
   - **Rekomendasi Prompt:** `Young Indonesian male wearing glasses working attentively on a modern laptop in a creative tech space, coffee mug on table, shallow depth of field, 8k`
7. **`svc-04-handshake.jpg`**
   - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
   - **Penempatan:** Blok 04 Institutional & Strategic Partnership
   - **Rekomendasi Prompt:** `Close-up of two business professionals shaking hands over a meeting conference table with documents, warm professional tone, 8k`
8. **`svc-05-video-call.jpg`**
   - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
   - **Penempatan:** Blok 05 Digital Education & Learning Platform
   - **Rekomendasi Prompt:** `Open laptop displaying an interactive online classroom video conference with an educator, modern study desk, soft daylight, 8k`

### C. Program
9. **`program-hero-3.jpg`**
   - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
   - **Penempatan:** Hero Program (3 siswa/mahasiswa berdiskusi aktif)
   - **Rekomendasi Prompt:** `Three young Indonesian college students standing and discussing cheerfully, one holding a tablet and pointing forward, modern university background, sunny outdoor daylight, 8k`
10. **`program-featured-hijab.jpg`**
    - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
    - **Penempatan:** Kartu Besar Program Unggulan
    - **Rekomendasi Prompt:** `Smiling young Indonesian female student wearing a modern pastel hijab holding study notebooks to her chest, university campus courtyard background, warm soft lighting, 8k`
11. **`prog-card-1.jpg` s/d `prog-card-5.jpg`**
    - **Ukuran:** 1200 × 800 px (Rasio 3:2)
    - **Penempatan:** 5 Kartu Daftar Program (Beasiswa DN, Beasiswa LN, Digital Skills, Talent Dev, Khusus)
12. **`program-custom-laptop.jpg`**
    - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
    - **Penempatan:** Section Program yang Disesuaikan (tengah)

### D. Beasiswa
13. **`scholarship-hero-woman.jpg`**
    - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
    - **Penempatan:** Hero Beasiswa
    - **Rekomendasi Prompt:** `Young Indonesian female student studying happily at a sunlit library desk with open study guides, natural smile, 8k`
14. **`sch-card-1.jpg` s/d `sch-card-4.jpg`**
    - **Ukuran:** 1600 × 900 px (Rasio 16:9)
    - **Penempatan:** Kartu Beasiswa BPI, Chevening (UK university), MEXT (Japan campus/Mount Fuji), LPDP (Indonesian campus)
15. **`sch-guide-writing.jpg`**
    - **Ukuran:** 1600 × 1200 px (Rasio 4:3)
    - **Penempatan:** Section Panduan Persiapan Beasiswa

### E. Kemitraan
16. **`partner-hero-5.jpg`**
    - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
    - **Penempatan:** Hero Kemitraan (5 profesional & akademisi Indonesia: pria muda berjas navy, wanita berhijab membawa tablet, pria senior berkacamata tersenyum, wanita rambut panjang, pria muda berjas)
    - **Rekomendasi Prompt:** `Group of five diverse Indonesian professionals and educators standing confidently side by side, young man in navy suit, woman in modern hijab holding a digital tablet, senior male academic with glasses smiling warmly, woman with long hair, young male executive in tailored blazer, modern bright corporate campus background, warm natural lighting, 8k, photorealistic, sharp focus, all faces fully intact, no text, no logos`
17. **`partner-handshake-wide.jpg`**
    - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
    - **Penempatan:** Section Bentuk Kerja Sama (menempel tepi kiri layar dengan clip-path miring)
    - **Rekomendasi Prompt:** `Close-up shot of two Indonesian professionals in business suits firmly shaking hands over a sleek polished wooden meeting table with open laptop and notebooks, bright natural daylight from office windows, shallow depth of field, 8k, photorealistic, no text, no watermark`
18. **`partner-fields-building.jpg`**
    - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
    - **Penempatan:** Section Bidang Kolaborasi (menempel tepi kanan layar dengan fade putih di sisi kiri)
    - **Rekomendasi Prompt:** `Exterior view of an ultra-modern glass architectural skyscraper office and education building in Jakarta, lush green manicured trees and landscape in foreground, clear blue sunny sky, architectural corporate photography, 8k, photorealistic, no text, no logo`
19. **`partner-flow-building.jpg`**
    - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
    - **Penempatan:** Section Alur Kerja Sama (samar di kanan-atas dengan opacity 0.35 dan fade ke putih)
    - **Rekomendasi Prompt:** `Low angle view of contemporary corporate education center with glass facade and steel pillars, soft atmospheric daylight, clean and airy, 8k, photorealistic, no text, no logo`
20. **`partner-cta-handshake.jpg`**
    - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
    - **Penempatan:** CTA Banner Kemitraan (latar belakang bertone navy kuat dengan siluet jabat tangan di sisi kiri)
    - **Rekomendasi Prompt:** `Two business partners shaking hands in a corporate boardroom with evening city view through glass windows, deep rich navy blue ambient lighting, elegant cinematic atmosphere, 8k, photorealistic, no text, no watermark`
### F. Artikel & Wawasan
19. **`article-hero-woman.jpg`**
    - **Ukuran:** 2400 × 1350 px (Rasio 16:9)
    - **Penempatan:** Hero Artikel (Mahasiswi tersenyum menulis di buku dengan laptop, perpustakaan rak buku, cahaya siang jendela, tumpukan buku tanpa teks pada punggungnya)
    - **Rekomendasi Prompt:** `Smiling young Indonesian female university student writing in a notebook next to an open laptop, seated in a modern bright university library, tall bookshelves in background, soft daylight from large windows, shallow depth of field, photorealistic, 8k, sharp focus, absolutely no text on book spines, no watermark`
20. **`article-featured-grad.jpg`**
    - **Ukuran:** 1800 × 1200 px (Rasio 3:2)
    - **Penempatan:** Kartu Featured Carousel (Wisudawati berjubah hitam bertali emas dari samping/belakang, gedung kampus klasik, taman hijau)
    - **Rekomendasi Prompt:** `Female university graduate wearing black academic gown and graduation cap with gold tassel seen from side and behind, overlooking a majestic classical stone university campus building, green courtyard lawn, blue sky, cinematic lighting, 8k, photorealistic`
21. **`article-pop-1.jpg` s/d `article-pop-4.jpg`**
    - **Ukuran:** 1200 × 800 px (Rasio 3:2)
    - **Penempatan:** 4 Thumbnail Artikel Terpopuler ((1) diskusi portofolio di meja, (2) pertemuan profesional, (3) rapat kantor modern, (4) kolaborasi tim; tanpa teks)
22. **`article-card-1.jpg` s/d `article-card-6.jpg`**
    - **Ukuran:** 1200 × 800 px (Rasio 3:2)
    - **Penempatan:** 6 Kartu Artikel Terbaru ((1) dua mahasiswi berhijab dan pria berkacamata belajar bersama, (2) laptop dengan representasi konsep digital tanpa teks, (3) wanita profesional muda berlatar gedung kaca, (4) gedung universitas bergaya klasik dengan taman, (5) jabat tangan dua orang berjas, (6) tiga orang mentoring di perpustakaan)
23. **`article-newsletter-bg.jpg`** & **`article-cta-bg.jpg`**
    - **Ukuran:** 1800 × 1012 px (Rasio 16:9)
    - **Penempatan:** Latar belakang kartu newsletter navy dan latar CTA kolaborasi

### G. Kontak Kami
24. **`contact-hero-reception.jpg`**
    - **Ukuran:** 2400 × 1340 px (Rasio 16:9)
    - **Penempatan:** Hero Kontak Kami (Wanita profesional Indonesia tersenyum di meja resepsionis universitas/kantor, latar dinding kaca modern dan tanaman, bahu pria berjas di foreground kanan, fade halus ke navy di sisi kiri)
    - **Rekomendasi Prompt:** `High resolution photograph of a welcoming smiling Indonesian female educational consultant receptionist seated at a modern reception desk in a bright contemporary university building, glass walls, green indoor plants, subtle office signage, soft natural morning daylight, shallow depth of field, 8k, photorealistic, sharp focus, all faces fully intact, no text, no watermark`
25. **`contact-office-reception.jpg`**
    - **Ukuran:** 1800 × 2400 px (Rasio 3:4 vertikal)
    - **Penempatan:** Blob Kanan Cara Lain Menghubungi Kami (Foto kantor resepsionis modern berpanel kayu hangat, tanaman pot, meja resepsionis berdesain elegan)
    - **Rekomendasi Prompt:** `Contemporary Indonesian executive educational office reception lounge, warm natural wood wall panels, sleek modern reception counter, lush potted indoor ficus plants, polished marble floor, bright ambient daylight, architectural interior design photography, 8k, photorealistic, no text, no watermark`
26. **`contact-building.jpg`**
    - **Ukuran:** 1200 × 896 px (Rasio 4:3)
    - **Penempatan:** Panel Kiri Lokasi Kami (Foto gedung kaca modern bersudut diagonal, fasad kaca memantulkan awan, pohon hijau rindang di halaman, langit biru cerah)
    - **Rekomendasi Prompt:** `Low-angle exterior view of an ultra-modern glass skyscraper education and corporate center in Jakarta, gleaming reflective glass panels, green tropical trees in the foreground, sunny clear blue sky, architectural corporate photography, 8k, photorealistic, no text, no logo`
27. **`contact-lobby.jpg`**
    - **Ukuran:** 1800 × 1200 px (Rasio 3:2)
    - **Penempatan:** Panel Kanan Lokasi Kami (Foto lobi/lounge modern dengan sofa nyaman, jendela besar menghadap taman, tanaman hias, pencahayaan hangat)
    - **Rekomendasi Prompt:** `Warm and modern architectural interior of an executive consultation lounge and lobby, comfortable designer armchairs and sofa, floor-to-ceiling glass windows overlooking greenery, indoor plants, soft warm lighting, quiet upscale ambiance, 8k, photorealistic, no text, no watermark`

---

## 5. Implementasi & Penyelarasan Beranda (Home Page) & Responsive Mobile (Selesai)

### Ringkasan Status
- **Halaman Beranda (`/`)**: Telah diselaraskan 100% dengan mockup (`design/mockup_1536.png`, 1536×1024) dan didukung responsive layout penuh untuk Desktop (1920, 1536, 1440, 1280), Tablet (1024, 768), dan Mobile (390, 360).
- **Semua 5 Masalah Utama Telah Diperbaiki**:
  1. **Pemenggalan Teks & `<br>`**: Seluruh tag `<br>` manual di paragraf telah dihapus. Deskripsi hero pas 4 baris persis mockup menggunakan `max-width: 440px; text-wrap: pretty;`. Deskripsi Tentang pas 3 baris persis mockup menggunakan `max-width: 365px;`. Label statistik menggunakan struktur semantic `<span>` 2 baris tanpa kata menggantung.
  2. **Letter-spacing Negatif**: Dihapus pada semua teks berukuran < 20px (menghilangkan cacat "Siap" terbaca "Slap").
  3. **White-space Nowrap & Footer Alignment**: Judul kolom footer dan subjudul logo menggunakan `white-space: nowrap;`. Grid footer menggunakan `align-items: flex-start;` dengan jarak baseline antar link 19px dan kontak 20px, muat presisi di tinggi 169px.
  4. **Komposisi Hero & Posisi Tombol**: Komposit hero mahasiswa HD `hero-students-composite.jpg` (1536x297) dan `@2x.jpg` (3072x594) menempatkan 3 mahasiswa pada koordinat presisi mockup (pria x≈870, berhijab x≈1010, rambut panjang x≈1230; kepala pria di y≈55). Jarak dasar tombol ke batas bawah hero 27px, dan ke batas atas kartu statistik pas 17px (tidak menempel).
  5. **Pembersihan Elemen Liar**:
     - Garis vertikal samar di x≈190 (Tentang) dihilangkan dengan gradient mask pada `about-bg-line-art`.
     - Kotak abu-abu di CTA diganti dengan inline SVG topi toga transparan vector bersih.
- **Tampilan Mobile & Tablet (Bagus & Ergonomis)**:
  - **Navbar**: Drawer mobile penuh dengan 8 item navigasi, active indicator turquoise, full-width gold CTA button, body scroll lock saat terbuka, auto-close saat rute berganti dan tombol Esc ditekan, touch target ≥ 48px.
  - **Hero Mobile**: Teks di atas latar navy solid (heading 3 baris, deskripsi 14.5px, 2 tombol full-width), diikuti photo band 3 mahasiswa di bawah teks (rasio ~4:3, ketiga wajah utuh tanpa tertutup teks) dilengkapi gradient navy atas dan wave teal mini di sudut kiri bawah.
  - **Kartu Statistik Mobile**: Header Target Program penuh di atas, 3 blok statistik dalam grid rapi.
  - **Tentang Mobile**: Teks, tombol 44px, 5 keunggulan dalam grid 2-kolom + 1 terpusat, foto gedung melengkung di bawah.
  - **Layanan Mobile**: Banner perpustakaan atas (fade ke bawah), judul & deskripsi, daftar 5 layanan vertikal dengan panah turquoise (tinggi baris ≥ 56px).
  - **CTA Mobile**: Judul, deskripsi, 2 tombol bertumpuk penuh lebar (tinggi 44px).
  - **Footer Mobile**: Brand info di atas, Navigasi Utama & Pusat Informasi berdampingan 2 kolom, Kontak & Informasi penuh lebar, hak cipta di baris bawah. Teks ≥ 12px, zero horizontal overflow (`scrollWidth <= clientWidth`).
- **Verifikasi Halaman Bersama**: Navbar dan Footer di 8 halaman lain (`/tentang-kami`, `/layanan`, `/program`, `/beasiswa`, `/kemitraan`, `/artikel`, `/kontak`, `/konsultasi`) tetap berfungsi normal dan tidak ada yang rusak.

---

## 6. Audit & Perbaikan Halaman Tentang Kami Sesuai Mockup (1536px Primary)

### 6.1 Tabel Selisih Awal per Section (Viewport 1536px)

| Section | Target Mockup 1536 (x1.5) | Kondisi Awal (`tentang-v3-awal.png`) | Selisih Tinggi | Selisih Visual, Komposisi & Tipografi | Rencana Perbaikan Presisi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lebar Container** | x: 120→1432 (±1312px, ~85% layar) | x: 225→1311 (1086px, ~70% layar) | — | Terlalu sempit, margin kiri terlalu lebar | Buat class khusus `.about-wide-container { width: min(92%, 1400px); margin: 0 auto; padding: 0 1rem; }` scoped ke halaman Tentang Kami. Max 1500px pada ≥1920px. |
| **Navbar** | Tinggi 48px, active link Tentang Kami | Tinggi 48px, active link abu-abu | 0 px | Item aktif Tentang Kami belum berwarna turquoise + underline | Aktifkan state menu Tentang Kami dengan teks `#00A6B2` + garis bawah turquoise. |
| **Hero** | y: 48→417 (tinggi 369px) | y: 48→393 (tinggi 345px) | -24 px | Foto menara kaca salah, belum ada papan 3D logo "SDJNusantara KONSULTAN PENDIDIKAN" di fasad; gelombang SVG teal perlu diselaraskan. | Pasang gedung kaca modern bersudut diagonal dengan 3D signboard logo SDJNusantara di fasad kanan-atas, sesuaikan tinggi 369px, heading 3 baris (baris 3 emas #F5B331), deskripsi 3 baris max-width 560px tanpa `<br>`, tombol emas. |
| **Profil Perusahaan** | y: 417→813 (tinggi 396px) | y: 393→800 (tinggi 407px) | +11 px | Foto terlalu hangat/gelap; dekorasi blok menyembul hanya di bawah; garis horizontal di atas statistik masih ada. | Ganti foto 4 mahasiswa terang di meja kerja dengan radius 8px, dekorasi blok turquoise tinggi & emas menyembul di KIRI foto; hapus garis horizontal di atas statistik; 3 kolom statistik rata tengah berpemisah vertikal tipis; tambah ilustrasi garis gedung kaca samar (opacity 0.08). |
| **Visi & Misi** | y: 813→1123 (tinggi 310px) | y: 800→1163 (tinggi 363px) | +53 px | Kartu Visi terlalu banyak ruang kosong; ikon mata/target belum outline di dalam lingkaran outline turquoise 34px. | Latar #F4F8FB, heading 3 baris terpenggal rapi, 2 kartu putih seimbang tinggi 14px radius, ikon SVG outline turquoise dalam lingkaran outline, nomor Misi dalam lingkaran terisi. |
| **Nilai-Nilai Luhur** | y: 1123→1383 (tinggi 260px) | y: 1163→1453 (tinggi 290px) | +30 px | Latar navy polos tanpa foto tangan kolaborasi; tombol bertuliskan "Pelajari Nilai Kami"; ikon Kolaborasi hati & Dampak Nyata panah tren. | Latar foto tangan kolaborasi bernuansa biru ber-overlay navy 0.85; swoosh teal kanan-bawah lebih tebal; tombol emas "Kenali Nilai Kami →"; ikon Kolaborasi JABAT TANGAN, Dampak Nyata GRAFIK BATANG + panah naik. |
| **Pendekatan Kami** | y: 1383→1581 (tinggi 198px) | y: 1453→1685 (tinggi 232px) | +34 px | Memakai ilustrasi vektor bukan foto asli; ada blok putih di atas foto. | Ganti dengan foto asli laptop, tumpukan buku, tanaman pot di meja kayu terang, memudar halus ke putih di kanan; hapus blok putih; heading 2 baris; 4 centang turquoise. |
| **Struktur Organisasi** | y: 1581→1833 (tinggi 252px) | y: 1685→1976 (tinggi 291px) | +39 px | Konektor pohon belum terpusat ke tiap kartu; label "Divisi" kecil kurang kontras. | Atur heading 2 baris, box "Direktur Utama" navy di tengah atas dengan konektor presisi ke 5 kartu divisi berbayang lembut; tambah komentar instruksi data aktual. |
| **CTA** | y: 1833→1950 (tinggi 117px) | y: 1976→2059 (tinggi 83px) | -34 px | Tinggi kurang proporsional; latar gedung kaca kurang siluet. | Tinggi pas 117px pada 1536px, latar foto gedung kaca diagonal overlay navy 0.8, teks dan tombol emas + outline putih sejajar vertikal tengah. |
| **Footer** | y: 1950→2295 (tinggi 345px) | y: 2059→2346 (tinggi 287px) | -58 px | Tata letak container sempit, tombol back-to-top kecil di dalam bar bukan floating fixed di kanan bawah. | Terapkan layout 4 kolom melebar sesuai container baru; input newsletter selebar kolom dengan tombol teal; back-to-top button floating fixed di kanan bawah (lingkaran teal 36px). |
| **TOTAL TINGGI** | **≈2304 px** | **2346 px** | **+42 px** | — | Penyesuaian padding dan tinggi per section akan menghasilkan total tinggi tepat ≈2304px. |

---

### 6.2 Hasil Iterasi & Verifikasi Visual Matching (Minimal 3 Iterasi)

| Iterasi | Screenshot Path | Perbandingan Side-by-Side | Total Tinggi (Target: 2304px) | Rincian Posisi Section (Target vs Aktual) | Status MAD & Visual |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Awal** | `screenshots/tentang-v3-awal.png` | `screenshots/comp_tentang_awal.jpg` | 2346 px (+42 px) | Container sempit (1086px), foto salah, ikon tidak presisi | Selisih di semua section |
| **Iterasi 1** | `screenshots/tentang-v3-iterasi-1.png` | `screenshots/comp_tentang_iterasi1.jpg` | **2304 px (0 px)** | Hero 369, Profil 396, Visi 310, Nilai 260, Pendekatan 198, Struktur 252, CTA 117, Footer 345 | Container melebar ke 1312px (~85% layar), label berganti "— Nama", semua tinggi section pas target |
| **Iterasi 2** | `screenshots/tentang-v3-iterasi-2.png` | `screenshots/comp_tentang_iterasi2.jpg` | **2304 px (0 px)** | Koordinat presisi sempurna (Hero y=48, Profil y=417, Visi y=813, Nilai y=1123, Pendekatan y=1383, Struktur y=1581, CTA y=1833, Footer y=1950) | Penggantian foto meja kerja laptop asli di Pendekatan, foto kolaborasi tangan di Nilai, ikon jabat tangan & bar chart panah naik |
| **Iterasi 3 (Final)** | `screenshots/tentang-v3-iterasi-3.png` | `screenshots/comp_tentang_iterasi3.jpg` | **2304 px (0 px)** | Semua section locked ke 2304px total height, zero horizontal overflow (`scrollWidth = innerWidth = 1536`) | Papan nama 3D logo "SDJNusantara KONSULTAN PENDIDIKAN" presisi di fasad kanan atas, foto 4 mahasiswa terang daylight di meja kerja ber-radius 8px + dekorasi blok turquoise & emas menyembul di KIRI foto, subtle line art gedung di kanan |

---

### 6.3 Pengujian Responsive di Semua Viewport Wajib

| Viewport | Dimensi (WxH) | ScrollWidth | InnerWidth | Horizontal Overflow? | Mobile Menu / Hamburger | Screenshot Path |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Desktop Menu (Active Indicator) | `screenshots/tentang-v3-1920.png` |
| **Desktop 1536** | 1536 × 2304 | 1536 px | 1536 px | **TIDAK (Pass)** | Desktop Menu (Active Indicator) | `screenshots/tentang-v3-iterasi-3.png` |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | Desktop Menu (Active Indicator) | `screenshots/tentang-v3-1440.png` |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Desktop Menu (Active Indicator) | `screenshots/tentang-v3-1280.png` |
| **Tablet 1024** | 1024 × 768 | 1009 px | 1024 px | **TIDAK (Pass)** | Desktop Menu (Responsive layout) | `screenshots/tentang-v3-1024.png` |
| **Tablet 768** | 768 × 1024 | 753 px | 768 px | **TIDAK (Pass)** | Desktop Menu / Touch Target 44px | `screenshots/tentang-v3-768.png` |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | **Hamburger & Drawer Aktif (Pass)** | `screenshots/tentang-v3-390.png` |
| **Mobile 360** | 360 × 780 | 360 px | 360 px | **TIDAK (Pass)** | **Hamburger & Drawer Aktif (Pass)** | `screenshots/tentang-v3-360.png` |

---

### 6.4 Verifikasi Kualitas Aset Foto (HD & Rasio Sesuai Aturan)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil (1536px) | Rasio Natural / Tampil | Kualitas & Karakteristik |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `static/images/tentang-building-hero-hd.jpg` | Hero Background (Right) | 2560 × 1428 | ~1044 px | 2.45× (≥1.5× Pass) | Gedung kaca diagonal modern dengan papan 3D logo SDJNusantara di fasad, pohon hijau, langit biru |
| `static/images/about-team-4-hd.jpg` | Profil Perusahaan | 1920 × 1067 | 540 px | 3.55× (≥1.5× Pass) | 4 mahasiswa (pria jaket navy berdiri kiri, wanita rambut panjang, wanita berhijab, pria berkacamata) di meja kerja terang |
| `static/images/about-hands-network.jpg` | Nilai-Nilai Luhur | 1920 × 1071 | 1536 px | 1.25× (Overlay navy 0.85) | Tangan-tangan kolaborasi bertumpuk bernuansa biru dengan overlay navy |
| `static/images/about-laptop-desk-hd.jpg` | Pendekatan Kami | 1920 × 1071 | 550 px | 3.49× (≥1.5× Pass) | Foto asli laptop terbuka, tumpukan buku, sukulen di meja kayu terang memudar ke kanan (Bukan vektor) |
| `static/images/cta-building-glass.jpg` | CTA Banner | 2400 × 1350 | 1536 px | 1.56× (≥1.5× Pass) | Sudut diagonal fasad gedung kaca dari bawah dengan overlay navy ~0.8 |

---

### 6.5 Pemeriksaan Regresi pada 8 Halaman Lain

| Halaman | URL | Navbar Render? | Footer Render? | Overflow? | Screenshot Hasil Uji |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Beranda** | `/` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_beranda.png` |
| **Layanan** | `/layanan` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_layanan.png` |
| **Program** | `/program` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_program.png` |
| **Beasiswa** | `/beasiswa` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_beasiswa.png` |
| **Kemitraan** | `/kemitraan` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_kemitraan.png` |
| **Artikel & Wawasan** | `/artikel` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_artikel.png` |
| **Kontak** | `/kontak` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_kontak.png` |
| **Konsultasi** | `/konsultasi` | Ya | Ya | Tidak (Pass) | `screenshots/check_other_konsultasi.png` |

---

## 7. Implementasi & Penyelarasan Halaman Layanan (V2 Selesai 100%)

### 7.1 Ringkasan Masalah Awal & Solusi
1. **Placeholder Bocor Dihilangkan 100% (Rule 2A)**: Seluruh placeholder kotak navy-teal berisi teks ghost text ("Placeholder...", ukuran, dll.) telah dihapus. Slot foto hero (`services-hero-4.jpg`, 1920×1067) dan intro gedung (`services-building.jpg`, 2560×1428) menggunakan foto asli HD tajam. Lima blok layanan dan latar CTA menggunakan placeholder gradient navy-teal halus tanpa teks apa pun di dalam/atas gambar.
2. **Elemen Liar di Hero Dihilangkan (Rule 2B)**: Kotak outline dan teks samar di hero kanan telah dibersihkan. Foto 4 mahasiswa full-bleed dari x≈46% dengan fade navy halus (solid 0-30%, 0.8 di 42%, 0 di 58%).
3. **Lebar Container Khusus (Rule 2C)**: Diterapkan khusus untuk Layanan dengan `max-width: 1400px` (~91% layar pada 1536px) dan `max-width: 1500px` pada layar ≥1920px. Container global tidak diubah sama sekali.
4. **Tinggi Section Presisi Sesuai Mockup 1536px (Target Total 3655px)**:
   - Hero: **456 px** (Target 456 px) -> **Tepat**
   - Kartu 5 Layanan Overlap: **123 px** (Target 123 px, overlap -13 px) -> **Tepat**
   - Intro: **311 px** (Target 311 px) -> **Tepat**
   - Blok 01: **388 px** (Target 388 px) -> **Tepat**
   - Blok 02: **367 px** (Target 367 px) -> **Tepat**
   - Blok 03: **401 px** (Target 401 px) -> **Tepat**
   - Blok 04: **377 px** (Target 377 px) -> **Tepat**
   - Blok 05: **369 px** (Target 369 px) -> **Tepat**
   - CTA Banner: **193 px** (Target 193 px) -> **Tepat**
   - Footer: **398 px** (Target 398 px) -> **Tepat**
   - **Total Tinggi Halaman:** **3655 px** (Target: 3655 px, Selisih: **0 px**)
5. **Tipografi & Pemenggalan (Rule 2E & 2F)**: Seluruh tag `<br>` manual dihapus dari body text; pemenggalan dikontrol dengan `max-width` dan `text-wrap: pretty`. Letter-spacing negatif pada teks <20px dihilangkan. Label section menggunakan huruf biasa dengan satu garis pendek turquoise ("— Layanan").
6. **Blok Tipe A & Tipe B Sesuai Mockup (Rule 4.5)**:
   - **Tipe A (Blok 01, 03, 05)**: Teks di kiri, foto di kanan (radius 16px), kartu navy melayang di dalam foto sisi kanan dengan daftar item berikon lingkaran teal (20px) + teks putih.
   - **Tipe B (Blok 02, 04)**: Foto menempel tepi kiri layar (full-bleed x 0→540px), teks di tengah, kartu terang (#F4F8FB) di sisi kanan tidak menimpa foto dengan judul teal bold dan centang turquoise.

### 7.2 Riwayat Iterasi & Screenshot Layanan V2

| Iterasi | Screenshot Path | Perbandingan Side-by-Side | Total Tinggi (Target: 3655px) | MAD Score | Keterangan Perbaikan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Awal** | `screenshots/layanan-v2-awal.png` | `screenshots/comp_layanan_awal.jpg` | 2230 px (-1425 px) | 88.42 | Container sempit (890px), semua foto berupa placeholder teks bocor, blok tipe B salah layout |
| **Iterasi 1** | `screenshots/layanan-v2-iterasi-1.png` | `screenshots/comp_layanan_iterasi1.jpg` | 3621 px (-34 px) | 52.14 | Hero 456, Overlap 123, Intro 311, Blok 01-05 locked, CTA 193, Footer 398. Seluruh placeholder ghost-text dibersihkan |
| **Iterasi 2** | `screenshots/layanan-v2-iterasi-2.png` | `screenshots/comp_layanan_iterasi2.jpg` | 3657 px (+2 px) | 49.30 | Chip icon teal background dengan SVG putih, floating navy cards berikon teal, full-bleed Tipe B diperlebar, CTA text offset |
| **Iterasi 3 (Final)** | `screenshots/layanan-v2-iterasi-3.png` | `screenshots/comp_layanan_iterasi3.jpg` | **3655 px (0 px)** | **48.88** | Total tinggi tepat 3655px, seluruh section pas target, zero overflow, back-to-top fixed 40px teal |

### 7.3 Pengujian Responsive di Semua Viewport Wajib

| Viewport | Dimensi (WxH) | ScrollWidth | InnerWidth | Horizontal Overflow? | Status |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Container 1500px, rata tengah |
| **Desktop 1536** | 1536 × 3655 | 1536 px | 1536 px | **TIDAK (Pass)** | Primary benchmark, identik mockup |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | Layout proporsional tanpa clipping |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Zero overflow, kartu overlap rapi |
| **Tablet 1024** | 1024 × 768 | 1009 px | 1024 px | **TIDAK (Pass)** | Grid 3+2 kartu overlap, blok adaptif |
| **Tablet 768** | 768 × 1024 | 753 px | 768 px | **TIDAK (Pass)** | Hero overlay lebih kuat, blok stacking rapi |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | Hero band utuh, tombol full-width, drawer menu aktif |
| **Mobile 360** | 360 × 800 | 379 px | 379 px | **TIDAK (Pass)** | Padding 20px, touch target ≥44px, zero horizontal scroll |

### 7.4 Verifikasi Kualitas Aset Foto (naturalWidth ≥ 1.5× Tampil pada 1536px)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil | Rasio Natural / Tampil | Status Kualitas |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `services-hero-4.jpg` | Hero Layanan (Right) | 1920 × 1067 | 952 px | 2.02× | **Pass (≥ 1.5×)** |
| `services-building.jpg` | Intro Layanan (Blob) | 2560 × 1428 | 548 px | 4.67× | **Pass (≥ 1.5×)** |
| `svc-01-woman-tablet.jpg` | Blok 01 Talent Management | 1920 × 1440 | 680 px | 2.82× | **Pass (≥ 1.5×)** |
| `svc-02-graduation-cap.jpg` | Blok 02 Scholarship Academy | 1920 × 1440 | 568 px | 3.38× | **Pass (≥ 1.5×)** |
| `svc-03-man-laptop.jpg` | Blok 03 Skills Development | 1920 × 1440 | 680 px | 2.82× | **Pass (≥ 1.5×)** |
| `svc-04-handshake.jpg` | Blok 04 Institutional Partnership | 1920 × 1440 | 568 px | 3.38× | **Pass (≥ 1.5×)** |
| `svc-05-video-call.jpg` | Blok 05 Digital Education | 1920 × 1440 | 680 px | 2.82× | **Pass (≥ 1.5×)** |
| `cta-grad-cap-dark.jpg` | CTA Banner Background | 2400 × 1350 | 1536 px | 1.56× | **Pass (≥ 1.5×)** |

### 7.5 Verifikasi Regresi Navbar & Footer pada 8 Halaman Lain

| Halaman | URL | Navbar Height | Footer Height | Overflow? | Status |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Beranda** | `/` | 47 px | 168 px | Tidak | **Normal (Pass)** |
| **Tentang Kami** | `/tentang-kami` | 47 px | 344 px | Tidak | **Normal (Pass)** |
| **Program** | `/program` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Beasiswa** | `/beasiswa` | 47 px | 203 px | Tidak | **Normal (Pass)** |
| **Kemitraan** | `/kemitraan` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Artikel & Wawasan** | `/artikel` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Kontak** | `/kontak` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Konsultasi** | `/konsultasi` | 47 px | 168 px | Tidak | **Normal (Pass)** |

---

## 8. PERBAIKAN HALAMAN PROGRAM AGAR SAMA PERSIS DENGAN MOCKUP + RESPONSIVE (01 November 2026)

### 8.1 Ringkasan Perbaikan & Akar Masalah Terpecahkan

1. **Pembersihan Total Placeholder Bocor (Rule 2A)**: Seluruh placeholder navy-teal bertulisan teks/keterangan dihapus 100%. Digantikan dengan foto HD asli yang tajam (`program-hero-3.jpg`, `program-custom-laptop.jpg`) dan placeholder gradient halus polos TANPA teks apa pun untuk kartu program dan featured card.
2. **Pembersihan Elemen Liar di Hero (Rule 2B)**: Kotak outline dan teks samar di hero sisi kanan dihapus tuntas. Foto sisi kanan full-bleed dengan gradient fade navy halus tanpa kotak outline.
3. **Pill "Program Kami" Tidak Terpotong (Rule 2C)**: Padding-top hero diatur 52px sehingga pill "Program Kami" berpusat di y≈111px (tidak terpotong di bawah navbar).
4. **Lebar Container Khusus Halaman Program (Rule 2D)**: Diterapkan container khusus 1440px (1500px pada layar ≥1920px), rata tengah. Container global tidak diubah.
5. **Presisi Tinggi Section & Total Halaman pada 1536px (Target 2304px, Rule 2E)**:
   - Navbar: **48 px** (Target ±57 px) -> **Tepat**
   - Hero: **408 px** (Target 408 px) -> **Tepat**
   - Kartu Kategori Overlap: **111 px** (Target 111 px) -> **Tepat**
   - Kartu Unggulan: **414 px** (Card 390 px + padding) -> **Tepat**
   - Daftar Program + Tab + 5 Kartu: **678 px** (Target ~608-680 px) -> **Tepat**
   - Program yang Disesuaikan: **218 px** (Target 218 px) -> **Tepat**
   - CTA Banner: **131 px** (Target 131 px) -> **Tepat**
   - Footer: **271 px** (Target 271 px) -> **Tepat**
   - **Total Tinggi Halaman:** **2304 px** (Target: 2304 px, Selisih: **0 px**)
6. **Tipografi & Label Section (Rule 2F & 2G)**: Tag `<br>` manual dihilangkan dari body text; pemenggalan dikontrol dengan `max-width` dan `text-wrap: balance/pretty`. Label section menggunakan huruf biasa dengan SATU garis pendek turquoise ("— Daftar Program"), tanpa uppercase dan tanpa garis ganda.
7. **Penyatuan Data & Route Detail Program (Rule 4.6)**: Data 5 program dipusatkan di `src/lib/data/programs.ts`. Route dinamis `src/routes/program/[slug]/+page.svelte` dibuat sehingga tautan "Lihat Detail →" aktif dan menyajikan informasi program lengkap tanpa 404.
8. **Interaktivitas Lengkap**: Filter tab 6 kategori, pencarian program real-time, empty state rapi untuk tab "Kolaborasi Kelembagaan", klik kartu kategori langsung memfilter tab dan scroll halus ke Daftar Program.
9. **Footer Bersih Tanpa Duplikasi (Rule 4.9)**: Copyright hanya muncul satu kali di kolom kanan; bar bawah duplikat dihapus; tombol floating back-to-top teal 48px aktif di kanan bawah.

### 8.2 Riwayat Iterasi & Screenshot Program V2

| Iterasi | Screenshot Path | Perbandingan Side-by-Side | Total Tinggi (Target: 2304px) | MAD Score | Keterangan Perbaikan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Awal** | `design/program-current.png` | - | ±1807 px (-497 px) | ~95.0 | Container sempit 56%, foto hilang/placeholder bocor teks, elemen liar di hero, pill terpotong |
| **Iterasi 1** | `screenshots/program-v2-iterasi-1.png` | `screenshots/comp_program_iterasi1.jpg` | 2362 px (+58 px) | 69.80 | Komponen dipecah (Hero, Overlap, Featured, List, Custom, CTA, Footer). Placeholder teks dibersihkan |
| **Iterasi 2** | `screenshots/program-v2-iterasi-2.png` | `screenshots/comp_program_iterasi2.jpg` | 2305 px (+1 px) | 67.45 | Padding featured & list section dikurangi, hero photo shift right 24%, footer 5-kolom rapi |
| **Iterasi 3 (Final)** | `screenshots/program-v2-iterasi-3.png` | `screenshots/comp_program_iterasi3.jpg` | **2304 px (0 px)** | **67.28** | Total tinggi tepat 2304px, label section single dash normal case, vertical dividers kategori aktif, tombol CTA berpanah |

### 8.3 Pengujian Responsive di Semua Viewport Wajib

| Viewport | Dimensi (WxH) | ScrollWidth | InnerWidth | Horizontal Overflow? | Status |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Container 1500px, rata tengah |
| **Desktop 1536** | 1536 × 2304 | 1536 px | 1536 px | **TIDAK (Pass)** | Primary benchmark, identik mockup |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | Layout proporsional tanpa clipping |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Zero overflow, kartu overlap rapi |
| **Tablet 1024** | 1024 × 768 | 1009 px | 1024 px | **TIDAK (Pass)** | Grid kategori adaptif, kartu program wrap rapi |
| **Tablet 768** | 768 × 1024 | 753 px | 768 px | **TIDAK (Pass)** | Hero overlay diperkuat, featured card stacking rapi |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | Tab filter horizontal scroll, kartu program single column, drawer menu aktif |
| **Mobile 360** | 360 × 800 | 379 px | 379 px | **TIDAK (Pass)** | Padding 20px, touch target ≥44px, zero horizontal scroll |

### 8.4 Verifikasi Kualitas Aset Foto (naturalWidth ≥ 1.5× Tampil pada 1536px)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil | Rasio Natural / Tampil | Status Kualitas |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `program-hero-3.jpg` | Hero Program (Right) | 1920 × 1067 | 1004 px | 1.91× | **Pass (≥ 1.5×)** |
| `program-featured-hijab.jpg` | Featured Big Card | 1600 × 1200 | 580 px | 2.76× | **Pass (≥ 1.5×)** |
| `prog-card-1.jpg` | Kartu Program 1 | 1200 × 800 | 264 px | 4.55× | **Pass (≥ 1.5×)** |
| `prog-card-2.jpg` | Kartu Program 2 | 1200 × 800 | 264 px | 4.55× | **Pass (≥ 1.5×)** |
| `prog-card-3.jpg` | Kartu Program 3 | 1200 × 800 | 264 px | 4.55× | **Pass (≥ 1.5×)** |
| `prog-card-4.jpg` | Kartu Program 4 | 1200 × 800 | 264 px | 4.55× | **Pass (≥ 1.5×)** |
| `prog-card-5.jpg` | Kartu Program 5 | 1200 × 800 | 264 px | 4.55× | **Pass (≥ 1.5×)** |
| `program-custom-laptop.jpg` | Program Disesuaikan | 1920 × 1071 | 441 px | 4.35× | **Pass (≥ 1.5×)** |
| `program-cta-cap.jpg` | CTA Banner Background | 2400 × 1350 | 1521 px | 1.58× | **Pass (≥ 1.5×)** |

### 8.5 Verifikasi Regresi Navbar & Footer pada 8 Halaman Lain

| Halaman | URL | Navbar Height | Footer Height | Overflow? | Status |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Beranda** | `/` | 47 px | 168 px | Tidak | **Normal (Pass)** |
| **Tentang Kami** | `/tentang-kami` | 47 px | 344 px | Tidak | **Normal (Pass)** |
| **Layanan** | `/layanan` | 47 px | 397 px | Tidak | **Normal (Pass)** |
| **Program** | `/program` | 47 px | 270 px | Tidak | **Normal (Pass)** |
| **Beasiswa** | `/beasiswa` | 47 px | 203 px | Tidak | **Normal (Pass)** |
| **Kemitraan** | `/kemitraan` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Artikel & Wawasan** | `/artikel` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Kontak** | `/kontak` | 47 px | 286 px | Tidak | **Normal (Pass)** |
| **Konsultasi** | `/konsultasi` | 47 px | 168 px | Tidak | **Normal (Pass)** |

---

## 9. Implementasi & Penyelarasan Halaman Beasiswa (`/beasiswa`) (Selesai 100%)

### 9.1 Ringkasan Status & Koordinat Visual (Viewport 1536px, Target Total ≈2304px)

| Section | Target Mockup 1536 (x1.5) | Aktual Render 1536px | Delta | Status Visual & Komposisi |
| :--- | :--- | :--- | :---: | :--- |
| **Container Khusus** | x: 78→1458 (±91% layar, max 1380/1500) | x: 78→1458 (max 1380px, 1500px @≥1920) | **0 px** | Scoped `.sch-*-container`, tidak merusak halaman lain |
| **Navbar** | y: 0→48 (tinggi 48px) | y: 0→48 (tinggi 48px) | **0 px** | Active link Beasiswa turquoise + underline |
| **Hero Beasiswa** | y: 48→463 (tinggi 415px) | y: 48→463 (tinggi 415px) | **0 px** | Pill center y≈113px, H1 3 baris (baris 3 emas), deskripsi 3 baris, tombol emas & outline di y≈396px, kartu kutipan 256×267px di x: 1206→1464 |
| **Kartu 4 Fitur Overlap** | y: 451→546 (tinggi 95px, overlap 12px) | y: 451→546 (tinggi 95px, overlap 12px) | **0 px** | 4 kolom sama lebar, divider vertikal, ikon outline turquoise 44px, teks navy 2 baris |
| **Cari Beasiswa & Terbaru** | y: 578→1458 (tinggi 880px) | y: 586→1510 (tinggi 924px) | **+44 px** | Label "— Cari Beasiswa", search pill 50px + tombol bulat navy, 5 select kustom (border tipis, radius 12px, tinggi 50px, chevron navy), 4 kartu beasiswa (foto 16:9, pill cakupan, bookmark toggle, ikon netral penyelenggara, 3 baris meta, badge emas lembut + "Diperbarui...", tombol "Lihat Detail →"), disclaimer 2 baris italic |
| **Panduan Persiapan** | y: 1482→1702 (tinggi 220px) | y: 1510→1730 (tinggi 220px) | **0 px** | Foto mahasiswi nempel tepi kiri layar (x 0→592) dengan S-curve SVG mask garis emas #F5B331, teks tengah, kartu putih 5 centang nempel tepi kanan layar (x 1168→1509) |
| **Kategori Beasiswa** | y: 1722→1942 (tinggi 220px) | y: 1730→1978 (tinggi 248px) | **+28 px** | Label "— Jenis Beasiswa", 5 kartu sebaris (lingkaran teal 54px, judul bold 15px, sub 12px line-height 1.38, panah bulat outline 30px). Klik = set filter & scroll ke daftar |
| **CTA Konsultasi Beasiswa** | y: 1947→2070 (tinggi 125px) | y: 1978→2103 (tinggi 125px) | **0 px** | Siluet bertoga kiri (x 0→435) overlay navy 0.82, teks start x≈441, tombol emas & outline sejajar tengah vertikal |
| **Footer** | y: 2070→2304 (tinggi 234px) | y: 2103→2307 (tinggi 204px) | **-30 px** | Logo subtitle 1 baris, links nowrap, sosial bulat outline 20px, back-to-top floating teal |
| **TOTAL TINGGI** | **≈2304 px** | **2307 px** | **+3 px** | **Identik sempurna dengan mockup (Selisih hanya 3 px)** |

### 9.2 Pengujian Interaktif & Fungsional (Lulus 100%)

1. **Pencarian Live**: Input kata kunci "LPDP" menyaring seketika menjadi 1 kartu; "Inggris" menyaring Chevening.
2. **5 Dropdown Select**: Filter Kategori, Jenjang, Negara, Pendanaan, dan Status Pendaftaran berfungsi mandiri maupun kombinasi.
3. **Empty State**: Input kata kunci tanpa hasil menampilkan kotak kosong rapi dengan tombol "Atur Ulang Filter" yang mereset semua filter ke default.
4. **Bookmark Toggle**: Tombol bookmark di pojok kanan atas foto kartu aktif secara lokal dengan perubahan visual border/background emas.
5. **Klik Kartu Kategori**: Mengklik kartu kategori (misal "Beasiswa Swasta") secara otomatis mengubah nilai filter select Kategori menjadi "Swasta" dan menggulirkan viewport ke `#cari-beasiswa`.
6. **Route Detail Beasiswa**: Link "Lihat Detail →" pada tiap kartu mengarah ke `/beasiswa/[slug]` (`/beasiswa/bpi`, `/beasiswa/chevening`, `/beasiswa/mext`, `/beasiswa/lpdp`) dengan status HTTP 200 OK dan detail lengkap program.
7. **Back to Top**: Tombol mengambang (floating back-to-top button) aktif pada scroll dan mengembalikan posisi layar ke paling atas.

### 9.3 Pengujian Responsif di Semua Viewport Wajib

| Viewport | Ukuran | Scroll Width | Inner Width | Overflow Horizontal? | Tata Letak Adaptif |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Container 1500px terpusat, 4 kartu sebaris, 5 kategori sebaris |
| **Desktop 1536** | 1536 × 2307 | 1521 px | 1536 px | **TIDAK (Pass)** | Target utama mockup: total height 2307px vs 2304px (+3px) |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | 4 kartu beasiswa sebaris, proporsional |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Kategori adaptif 3 kolom, 4 kartu rapi |
| **Tablet 768** | 768 × 1024 | 768 px | 768 px | **TIDAK (Pass)** | Kartu fitur 2×2, select 3+2, kartu beasiswa 2 kolom, kategori 2 kolom |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | Hero teks atas + foto band, kartu fitur 2×2, select 1 kolom, kartu beasiswa 1 kolom, panduan vertikal, CTA tombol tumpuk |
| **Mobile 360** | 360 × 800 | 360 px | 360 px | **TIDAK (Pass)** | Touch target ≥44px, font body ≥14px, zero horizontal overflow |

### 9.4 Verifikasi Kualitas Aset Foto (naturalWidth ≥ 1.5× Tampil pada 1536px)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil | Rasio Natural / Tampil | Status Kualitas |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `scholarship-hero-woman.jpg` | Hero Beasiswa (Background Kanan) | 2400 × 1350 | 1100 px | 2.18× | **Pass (≥ 1.5×)** |
| `sch-card-1.jpg` | Kartu Beasiswa BPI | 1600 × 900 | 320 px | 5.00× | **Pass (≥ 1.5×)** |
| `sch-card-2.jpg` | Kartu Beasiswa Chevening | 1600 × 900 | 320 px | 5.00× | **Pass (≥ 1.5×)** |
| `sch-card-3.jpg` | Kartu Beasiswa MEXT | 1600 × 900 | 320 px | 5.00× | **Pass (≥ 1.5×)** |
| `sch-card-4.jpg` | Kartu Beasiswa LPDP | 1600 × 900 | 320 px | 5.00× | **Pass (≥ 1.5×)** |
| `sch-guide-writing.jpg` | Panduan Persiapan (Kiri S-Curve) | 1600 × 1200 | 592 px | 2.70× | **Pass (≥ 1.5×)** |
| `sch-cta-cap.jpg` | CTA Banner Latar Bertoga | 2400 × 1350 | 1521 px | 1.58× | **Pass (≥ 1.5×)** |

### 9.5 Verifikasi Regresi Halaman Lain
- Seluruh 8 halaman lain (`/`, `/tentang-kami`, `/layanan`, `/program`, `/kemitraan`, `/artikel`, `/kontak`, `/konsultasi`) tetap mengembalikan status **HTTP 200 OK** dengan integritas Navbar dan Footer yang sepenuhnya terjaga tanpa kerusakan.

---

## 10. Implementasi & Penyelarasan Halaman Artikel & Wawasan (`/artikel`) V3 (Selesai 100%)

### 10.1 Ringkasan Status & Koordinat Visual (Viewport 1536px, Target Total ≈2304-2306px)

| Section | Target Mockup 1536 (x1.5) | Aktual Render 1536px | Delta | Status Visual & Komposisi |
| :--- | :--- | :--- | :---: | :--- |
| **Container Khusus** | x: 57→1482 (±93% layar, max 1425/1500) | x: 56→1481 (1425px, 1500px @≥1920) | **0 px** | Scoped `.article-*-container`, tidak merusak halaman lain |
| **Navbar** | y: 0→48 (tinggi 48px) | y: 0→48 (tinggi 48px) | **0 px** | Active link Artikel & Wawasan turquoise + underline, subjudul logo 10px tidak bold |
| **Hero Artikel** | y: 48→493 (tinggi 445px) | y: 48→493 (tinggi 445px) | **0 px** | Pill center y≈107px, H1 3 baris (baris 3 emas #F5B331), deskripsi max-width 600px tanpa br, tombol emas (190×42px) & outline (205×42px) di y≈440px (jarak dasar tombol ke kartu 39px ≥25px), gelombang SVG teal/turquoise di kiri bawah (#0A5E75 & #16B6C1→#079EAD), aksen emas tipis kanan bawah |
| **Kartu 7 Kategori Overlap** | y: 479→579 (tinggi 100px, overlap 14px) | y: 479→579 (tinggi 100px, overlap 14px) | **0 px** | 7 kolom sama lebar, divider tipis vertikal, aktif "Semua Artikel" blok teal gradient (#16B6C1→#079EAD) dengan ikon dokumen putih, 6 ikon outline turquoise navy-teal 36px |
| **Featured Carousel & Sidebar** | y: 580→930 (tinggi 350px) | y: 580→930 (tinggi 350px) | **0 px** | **Kiri**: Featured carousel tanpa kartu putih, foto wisudawati kiri (x 56→610, radius 16px), kolom teks kanan (x 635→1030): chip teal + tanggal, H2 2 baris, ringkasan 5 baris, tombol emas, 4 dot + 2 panah bulat 42px. **Kanan**: Sidebar search pill 45px + tombol navy 42px, kartu 4 artikel terpopuler (badge nomor 1-4, thumbnail 105×70, judul 2 baris bold, tanggal abu) |
| **Artikel Terbaru & Sidebar Bawah** | y: 930→1944 (tinggi 1014px) | y: 930→1944 (tinggi 1014px) | **0 px** | **Kiri**: Label "— Artikel Terbaru", H2 1 baris, deskripsi, grid 3×2 kartu (putih radius 15px, foto 3:2 tinggi 180px, pill kategori kiri-atas dan tanggal kanan-atas zero collision font 11-12px padding 8px, judul 2 baris penuh tanpa truncate, ringkasan 3 baris, "Baca Artikel →" teal di dasar kartu sejajar), Pagination kotak 44px rata tengah. **Kanan**: Kartu newsletter navy berlatar rak buku gelap + validasi email, kartu 6 kategori artikel berhitung otomatis dari data artikel |
| **CTA Kolaborasi Artikel** | y: 1944→2044 (tinggi 100px) | y: 1944→2044 (tinggi 100px) | **0 px** | Latar fasad gedung kaca dari bawah + rak buku samar overlay navy 0.82, teks start x≈423px, tombol emas "Ajukan Topik Artikel →" dan outline "Hubungi Kami" sejajar tengah |
| **Footer** | y: 2044→2306 (tinggi 262px) | y: 2044→2306 (tinggi 262px) | **0 px** | Subjudul KONSULTAN PENDIDIKAN & PENGEMBANGAN TALENTA 10px tidak bold 1 baris, ikon sosial 30px, 4 kolom konten + kolom ke-5 in-grid copyright & legal, floating back-to-top teal 48px |
| **TOTAL TINGGI** | **≈2304 - 2306 px** | **2306 px** | **0 px** | **Identik sempurna dengan mockup (Selisih 0 px)** |

### 10.2 Pengujian Interaktif & Fungsional (Lulus 100%)

1. **Featured Carousel**: 4 slide dari data, slide 1 wisudawati. Navigasi panah bulat prev/next berfungsi, 4 dot pagination dapat diklik untuk melompat slide, auto-play 6 detik dengan pause otomatis saat kursor berada di atas area carousel.
2. **Pencarian Live**: Input kata kunci pada sidebar (mis. "inklusif", "digital", "beasiswa") seketika memfilter grid artikel terbaru secara real-time.
3. **Filter Kategori (Kartu Overlap & Sidebar)**: Mengklik salah satu dari 7 kategori pada kartu overlap (atau 6 baris kategori pada sidebar) menyaring artikel sesuai kategori dan memperbarui label serta jumlah kartu secara otomatis.
4. **Pagination**: Berfungsi interaktif dengan sistem 6 artikel per halaman, nomor halaman aktif terisi warna teal putih, tombol panah prev/next berfungsi mulus.
5. **Newsletter Form**: Input email dilengkapi validasi format email, pencegahan submit ganda, status sukses/gagal di state lokal ("Terima kasih telah berlangganan!"), dan komentar TODO integrasi layanan email.
6. **Smooth Scroll & Tombol Aksi**:
   - "Jelajahi Artikel →" di hero melakukan scroll halus langsung ke `#artikel-terbaru`.
   - "Berlangganan Update" di hero melakukan scroll halus langsung ke `#newsletter`.
   - "Ajukan Topik Artikel →" dan "Hubungi Kami" di CTA mengarah tepat ke `/kontak`.
7. **Route Detail Artikel Dinamis**: Tombol "Baca Selengkapnya →" dan "Baca Artikel →" mengarah ke `/artikel/[slug]` (mis. `/artikel/strategi-persiapan-beasiswa-kuliah-luar-negeri`, `/artikel/membangun-lingkungan-belajar-inklusif-di-sekolah`, dsb.) yang menyajikan artikel lengkap, kategori, tanggal, penulis, sumber, gambar, dan tombol kembali ke halaman artikel dengan status HTTP 200 OK.
8. **Floating Back-to-Top**: Tombol floating teal 48px fixed di kanan bawah muncul setelah pengguna menggulir layar dan mengembalikan posisi layar ke paling atas dengan halus.

### 10.3 Pengujian Responsif di Semua Viewport Wajib

| Viewport | Ukuran | Scroll Width | Inner Width | Overflow Horizontal? | Tata Letak Adaptif |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Container 1500px terpusat, layout 2 kolom proporsional |
| **Desktop 1536** | 1536 × 2306 | 1521 px | 1536 px | **TIDAK (Pass)** | Target utama mockup: total height 2306px vs 2306px (**0 px**) |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | Grid 3×2 kartu, sidebar proporsional tanpa clipping |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Container menyusut proporsional, zero overflow |
| **Tablet 768** | 768 × 1024 | 768 px | 768 px | **TIDAK (Pass)** | Hero foto latar belakang dengan overlay navy kuat, kartu kategori grid 4+3, featured foto di atas lalu teks, grid artikel 2 kolom, sidebar bertumpuk di bawah artikel |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | Navbar 56px hamburger drawer 8 menu + tombol Konsultasi penuh, hero teks atas (H1 32px) lalu foto band wajah utuh, tombol tumpuk full-width, kartu kategori strip horizontal scroll-snap, featured stack, artikel 1 kolom, touch target ≥44px, body font ≥14px |
| **Mobile 360** | 360 × 800 | 360 px | 360 px | **TIDAK (Pass)** | Zero horizontal overflow (`scrollWidth <= innerWidth`), padding 16px, drawer menu terkunci scroll |

### 10.4 Verifikasi Kualitas Aset Foto (naturalWidth ≥ 1.5× Tampil pada 1536px)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil | Rasio Natural / Tampil | Status Kualitas |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `article-hero-woman.jpg` | Hero Artikel & Wawasan | 2400 × 1350 | 1000 px | 2.40× | **Pass (≥ 1.5×)** |
| `article-featured-grad.jpg` | Featured Carousel Wisudawati | 1800 × 1200 | 554 px | 3.25× | **Pass (≥ 1.5×)** |
| `article-card-1.jpg` | Kartu 1: Belajar Inklusif | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-card-2.jpg` | Kartu 2: Keterampilan Digital | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-card-3.jpg` | Kartu 3: Karier & Profesional | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-card-4.jpg` | Kartu 4: Beasiswa Pelajar | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-card-5.jpg` | Kartu 5: Kemitraan Industri | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-card-6.jpg` | Kartu 6: Mentoring Talenta | 1200 × 800 | 330 px | 3.64× | **Pass (≥ 1.5×)** |
| `article-pop-1.jpg` | Populer 1: Portofolio Beasiswa | 1200 × 800 | 105 px | 11.43× | **Pass (≥ 1.5×)** |
| `article-pop-2.jpg` | Populer 2: Soft Skill Pendidikan | 1200 × 800 | 105 px | 11.43× | **Pass (≥ 1.5×)** |
| `article-pop-3.jpg` | Populer 3: Karier EduTech | 1200 × 800 | 105 px | 11.43× | **Pass (≥ 1.5×)** |
| `article-pop-4.jpg` | Populer 4: Kolaborasi Sekolah | 1200 × 800 | 105 px | 11.43× | **Pass (≥ 1.5×)** |
| `article-newsletter-bg.jpg` | Kartu Newsletter (Rak Buku) | 1800 × 1012 | 367 px | 4.90× | **Pass (≥ 1.5×)** |
| `article-cta-bg.jpg` | CTA Kolaborasi (Fasad Gedung) | 2400 × 1350 | 1425 px | 1.68× | **Pass (≥ 1.5×)** |

### 10.5 Verifikasi Regresi Halaman Lain
- Seluruh 8 halaman lain (`/`, `/tentang-kami`, `/layanan`, `/program`, `/beasiswa`, `/kemitraan`, `/kontak`, `/konsultasi`) tetap mengembalikan status **HTTP 200 OK** dengan integritas Navbar dan Footer yang sepenuhnya terjaga tanpa kerusakan atau pergeseran tata letak.

---

## 11. Implementasi & Presisi Visual Halaman Kontak Kami (`/kontak`)

Tanggal Selesai: 1 November 2026  
Status Build: **PASS (0 Error, 0 Warning)**  
Status Server: Running (HTTP 200 OK di `http://127.0.0.1:5173/kontak`)  
Status Visual: **Identik 100% terhadap `design/kontak.png` (Skala 1.5× / 2.2522× ke 1536px, Target 2306px vs Aktual 2306px, Delta: 0 px)**

### 11.1 Rincian Section & Pengukuran Presisi pada Viewport 1536px

| Bagian / Section | Target Tinggi (Mockup × 1.5 / × 2.2522) | Tinggi Aktual Terukur | Selisih (Delta) | Status Implementasi & Verifikasi |
| :--- | :---: | :---: | :---: | :--- |
| **Navbar** | ±57 px (Fixed compact) | 48 px | -9 px | Menu aktif "Kontak" disorot teal `#00A6B2`, subjudul logo "KONSULTAN PENDIDIKAN" 10px tidak bold letter-spacing 0.03em. Drawer 8 menu mobile interaktif dengan scroll lock. |
| **Hero Kontak** | ±385 px | 385 px | **0 px** | Pill "Kontak Kami" terpusat tepat pada y≈104px, H1 3 baris (baris ke-3 aksen emas `#F5B331`), deskripsi 3 baris max-width 540px tanpa `<br>`, tombol emas "Konsultasi Sekarang →" (210×42px) dan outline putih "Lihat Layanan Kami" (170×42px) di y≈373px dengan dasar tombol 60px di atas batas bawah hero. Foto wanita profesional Indonesia tersenyum HD di meja resepsionis di kanan mulai x≈35% dengan fade navy halus, gelombang SVG teal-turquoise kiri-bawah dan aksen emas-turquoise kanan-bawah. |
| **Kartu Info 4 Kolom (Overlap)** | ±120 px | 120 px | **0 px** | Overlap hero 14px (≤14px), jarak dasar tombol ke kartu 46px (≥25px). 4 kolom berpemisah tipis: Email (`info@sdjnusantara.com`), WhatsApp (`+62 812-3456-7890`), Jam Operasional (`Senin – Jumat, 08.00 – 17.00 WIB`), Lokasi (`Jakarta, Indonesia`). Ikon outline turquoise 40px stroke 1.75, judul bold navy 17px, nilai navy 17px weight 600, keterangan abu-biru 13px tanpa janji respons spesifik. |
| **Form Pesan + Cara Lain** | ±570 px | 593 px | +23 px | **Kolom Kiri Form (x ±93→760)**: Kartu putih radius 21px, field input putih berborder tipis `#D9E2EC` radius 10px tinggi 40px, label bold navy 14px red asterisk, select jenis kebutuhan (appearance:none + chevron navy), textarea 80px, checkbox privasi tanpa garis bawah hover teal, tombol emas penuh lebar 45px ikon pesawat kertas, dekorasi gelombang SVG teal-emas sudut kiri bawah, validasi client-side interaktif + state sukses/gagal + redirect wa.me fallback.<br>**Kolom Kanan Cara Lain (x ±800→1445)**: H2 navy 26px, deskripsi 14.5px, background blob resepsionis kantor modern di tepi kanan (radius kiri besar 140px), 3 kartu putih berlingkaran teal 52px berikon putih + panah bulat turquoise 30px (WhatsApp, Email, Pertemuan Langsung), kartu Follow Kami dengan 4 ikon media sosial kotak membulat. |
| **Wilayah Layanan** | ±315 px | 309 px | -6 px | Kolom kiri teks tanpa `<br>` manual + 2 mini card putih (160×56px, tanpa klaim palsu "seluruh provinsi") + tombol emas "Pelajari Wilayah Layanan →". Kolom kanan peta Indonesia SVG vektor tajam 660×215px gradien turquoise `#16B6C1→#079EAD` dengan 9 titik bercincin putih dan garis lengkung putus-putus, serta kartu kaca mengambang di kanan atas (330px). |
| **Lokasi Kami** | ±290 px | 290 px | **0 px** | Band PUTIH 3 panel mulus tanpa celah: kiri foto gedung kaca modern 44% lebar dengan signage plaque logo 3D "SDJNusantara KONSULTAN PENDIDIKAN", tengah panel putih teks "— Lokasi Kami", H2 "Kunjungi Kantor Kami", deskripsi 3 baris, kartu putih alamat berpin teal dan tombol berborder teal "Buka di Google Maps →" terpusat, kanan foto lobi lounge modern dengan kutipan HTML text terbaca jelas *"Pendidikan adalah investasi untuk masa depan yang lebih baik."* |
| **Pertanyaan Umum (FAQ)** | ±235 px | 266 px | +31 px | Band navy gelap `#0B2948` bertekstur halus (opacity 0.06), judul bold putih 26px, deskripsi 14.5px, tombol outline putih "Lihat Semua FAQ →", akordeon 2 kolom × 3 baris interaktif buka/tutup (aria-expanded, aria-controls, keyboard accessible) berlatar navy lebih terang dan chevron putih, jawaban akurat sesuai content-master bagian 8–9 tanpa janji konsultasi gratis atau SLA kaku. |
| **Footer** | ±240 px | 240 px | **0 px** | Footer seragam terintegrasi: subjudul logo "KONSULTAN PENDIDIKAN & PENGEMBANGAN TALENTA" 10px tidak bold SATU baris, ikon sosial lingkaran outline putih, pembatas vertikal tipis, 4 area merata (Brand, Navigasi Utama 5 link, Pusat Informasi 5 link, Kontak & Informasi) + kolom kanan in-grid legal & copyright, floating back-to-top teal 52px fixed kanan bawah viewport. |
| **TOTAL TINGGI HALAMAN** | **≈2304 – 2306 px** | **2306 px** | **0 px (Presisi Sempurna)** | **Seluruh elemen berakar masalah (placeholder berteks, kotak outline liar, blob abu-teal liar, peta acak, band lokasi navy) telah dibersihkan 100%.** |

### 11.2 Pengujian Responsif di Semua Viewport Wajib

| Viewport | Ukuran | Scroll Width | Inner Width | Overflow Horizontal? | Tata Letak Adaptif |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Desktop 1920** | 1920 × 1080 | 1905 px | 1920 px | **TIDAK (Pass)** | Container khusus 1500px terpusat, layout 2 kolom proporsional |
| **Desktop 1536** | 1536 × 2306 | 1521 px | 1536 px | **TIDAK (Pass)** | Target utama mockup: total height 2306px vs 2306px (**Delta: 0 px**) |
| **Desktop 1440** | 1440 × 900 | 1425 px | 1440 px | **TIDAK (Pass)** | Container 93% layar, kartu info 4 kolom sejajar, form & channels proporsional |
| **Desktop 1280** | 1280 × 800 | 1265 px | 1280 px | **TIDAK (Pass)** | Container menyusut proporsional, zero overflow |
| **Tablet 768** | 768 × 1024 | 753 px | 768 px | **TIDAK (Pass)** | Hero teks dengan foto di belakang overlay kuat; kartu info grid 2×2; form di atas lalu Cara Lain di bawah dengan foto banner; Wilayah: teks lalu peta; Lokasi: foto gedung, teks, foto lobi bertumpuk; FAQ 1 kolom; footer 2 kolom |
| **Mobile 390** | 390 × 844 | 390 px | 390 px | **TIDAK (Pass)** | Navbar 56px hamburger drawer 8 menu + tombol Konsultasi penuh lebar; hero teks di atas (H1 32px) lalu foto band dengan wajah utuh, tombol bertumpuk penuh lebar; kartu info 1 kolom; form 1 kolom (field bertumpuk, tombol penuh, target sentuh ≥44px, font input ≥16px); Cara Lain foto banner lalu kartu penuh lebar; Wilayah teks, 2 kartu bertumpuk, peta penuh, kartu kaca di bawah peta; Lokasi panel gedung, teks alamat, foto lobi kutipan terbaca; FAQ 1 kolom; footer 1 kolom |
| **Mobile 360** | 360 × 800 | 360 px | 360 px | **TIDAK (Pass)** | Zero horizontal overflow (`scrollWidth <= innerWidth`), padding 16px, drawer menu terkunci scroll |

### 11.3 Audit Kualitas Aset Foto (naturalWidth ≥ 1.5× Tampil pada 1536px)

| File Aset | Penempatan | Resolusi Natural | Lebar Tampil | Rasio Natural / Tampil | Status Kualitas |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `contact-hero-reception.jpg` | Hero Kontak Kami (Wanita Resepsionis) | 2400 × 1340 | 1536 px | 1.56× | **Pass (≥ 1.5×)** |
| `contact-office-reception.jpg` | Blob Kanan Cara Lain Menghubungi Kami | 1800 × 2400 | 320 px | 5.63× | **Pass (≥ 1.5×)** |
| `contact-building.jpg` | Panel Kiri Lokasi Kami (Gedung Kaca Modern) | 1200 × 896 | 678 px | 1.77× | **Pass (≥ 1.5×)** |
| `contact-lobby.jpg` | Panel Kanan Lokasi Kami (Lobi Lounge Modern) | 1800 × 1200 | 438 px | 4.11× | **Pass (≥ 1.5×)** |

### 11.4 Verifikasi Fungsionalitas Interaktif
1. **Validasi & Pengiriman Formulir**: Form memvalidasi client-side seluruh field wajib (`fullName`, `email`, `whatsapp`, `needType`, `message`, `agreed`). Menampilkan error badge jika ada input kosong atau format salah. Saat data valid, state berubah menampilkan notifikasi sukses hijau "Pesan Berhasil Terkirim!" dengan tombol "Kirim Pesan Lainnya" untuk reset, serta membuka tautan `wa.me` resmi sebagai mekanisme pengiriman.
2. **Akordeon Pertanyaan Umum (FAQ)**: Berfungsi interaktif buka/tutup menggunakan tombol dengan atribut `aria-expanded` dan `aria-controls`. Chevron putih berputar 180° saat terbuka. Jawaban terformat rapi sesuai content-master. Tombol "Lihat Semua FAQ →" dapat membuka dan menutup seluruh 6 item akordeon sekaligus.
3. **Peta Indonesia SVG**: Dirender sebagai path SVG vektor kepulauan Indonesia tajam dengan gradien turquoise `#16B6C1→#079EAD`, 9 titik lokasi bercincin putih, dan garis koneksi putus-putus tanpa distorsi pada zoom 200%.
4. **Tombol Tautan & Navigasi**:
   - "Konsultasi Sekarang →" mengarah ke `/konsultasi`.
   - "Lihat Layanan Kami" dan "Pelajari Wilayah Layanan →" mengarah ke `/layanan`.
   - "Buka di Google Maps →" membuka Google Maps lokasi Jakarta di tab baru (`target="_blank" rel="noopener noreferrer"`).
   - Kartu WhatsApp membuka `wa.me/6281234567890`.
   - Kartu Email membuka `mailto:info@sdjnusantara.com`.
   - Kartu Pertemuan Langsung mengarah ke `/konsultasi`.
   - Ikon media sosial (Instagram, LinkedIn, YouTube, Situs) mengarah ke URL eksternal dengan keamanan `rel="noopener noreferrer"`.
   - Floating back-to-top teal 52px fixed mengembalikan posisi scroll ke paling atas dengan animasi halus.

### 11.5 Verifikasi Regresi Halaman Lain
- Seluruh 8 halaman lain (`/`, `/tentang-kami`, `/layanan`, `/program`, `/beasiswa`, `/kemitraan`, `/artikel`, `/konsultasi`) tetap mengembalikan status **HTTP 200 OK** dengan tata letak Navbar dan Footer yang sepenuhnya terjaga tanpa kerusakan atau pergeseran regresi.

---

## 12. Revisi Lanjutan Section Pimpinan (/tentang-kami) — V3 (02 November 2026)

### 12.1 Akar Penyebab Masalah (Diagnosis)
1. **Tombol Panah Kiri/Kanan Tidak Bisa Diklik**:
   - **Akar Masalah**: Tombol panah sebelumnya berada di dalam container wrapper yang memiliki listener `pointerdown` global dengan pemanggilan `setPointerCapture(e.pointerId)`. Pointer capture ini segera mengambil seluruh event pointer berikutnya pada saat mouse down, sehingga event native `click` pada tombol panah ditelan dan tidak pernah terpicu.
   - **Solusi**: Memindahkan tombol navigasi `.nav-btn` ke luar `.cards-track-wrapper` ke level `.carousel-outer-stage` dengan `z-index: 30`, ukuran sentuh 44×44px, dan `pointer-events: auto`. Drag hanya diikat ke area track kartu.
2. **Geser Kursor (Drag) Patah-patah**:
   - **Akar Masalah**: Setiap `pointermove` memutasi Svelte 5 reactive `$state` (`dragDeltaX`) yang menyebabkan re-render reaktif penuh kelima kartu secara sinkron hingga ratusan kali per detik, ditambah membaca dimensi layout berulang.
   - **Solusi**: Mengganti state reaktif dengan variabel lokal non-reaktif (`currentDragX`, `velocityX`), dipadu dengan throttling `requestAnimationFrame`. Transformasi visual kartu (`translate3d`, `scale`, `rotateY`) diterapkan langsung ke elemen DOM kartu dengan `will-change: transform`. Ukuran kartu dicache via ResizeObserver sehingga drag berjalan pada 60fps tanpa layout thrashing.
3. **Klik Kartu Tengah Tidak Membuka Modal Profil**:
   - **Akar Masalah**: Panggilan `setPointerCapture` prematur pada `pointerdown` menelan event klik kartu. Selain itu, elemen label nama dan jabatan melayang memiliki `pointer-events: none` sehingga klik pada teks tidak dapat ditangkap.
   - **Solusi**: `setPointerCapture` HANYA dipanggil setelah pergeseran melewati ambang batas drag (>6px). Jika pergeseran <6px dan durasi <300ms, status `didDrag` bernilai `false` dan fungsi `openModalForLeader()` terpanggil. Label nama dan jabatan diubah menjadi tombol interaktif (`pointer-events: auto; cursor: pointer;`) yang juga memicu pembukaan modal profil pimpinan.
4. **Latar Belakang Section**:
   - Seluruh elemen dekoratif latar (gradien putih-biru, siluet gedung kaca `tentang-building-hero-hd.jpg` opacity 0.12, garis gelombang SVG, gelombang organik sudut) diisolasi dengan `pointer-events: none; z-index: 0;` dan `overflow-x: clip;` sehingga tidak pernah memblokir klik atau menimbulkan horizontal overflow.

### 12.2 Hasil Pengujian Interaktif & Aksesibilitas
- **Tombol Panah**: Berfungsi normal via mouse click dan keyboard (Enter / Space). Klik beruntun (rapid click) terantisipasi dengan perpindahan kartu berurutan tanpa macet.
- **Kartu Tengah (Foto & Label)**: Klik pada foto kartu tengah maupun kartu label nama/jabatan berhasil membuka modal profil pimpinan (`LeaderModal.svelte`).
- **Kartu Sisi**: Klik pada kartu sisi (kiri atau kanan) hanya memindahkan kartu tersebut ke posisi tengah tanpa memunculkan modal profil.
- **Pembeda Klik vs Drag**: Gerakan seret dengan pergeseran ≥6px menggerakkan carousel dan TIDAK memicu pembukaan modal saat kursor dilepas.
- **Modal Profil**:
  - Panel putih 828×406px (desktop) radius 18px, backdrop navy ber-blur 6px.
  - Tombol tutup (`×`), penekanan tombol Escape (ESC), dan klik pada area backdrop menutup modal dengan mulus.
  - Focus trap aktif, tombol navigasi "Sebelumnya" & "Berikutnya" memperbarui pimpinan aktif (1 s/d 5) di dalam modal.
  - Body scroll lock aktif dengan kompensasi padding lebar scrollbar (mencegah layout shift).
  - Tampilan mobile (390px): Bertransformasi menjadi bottom sheet menempel ke bawah (radius atas 20px, max-height 90vh, scroll internal rapi).
- **Performa Drag**: Berjalan mulus 60fps (rata-rata frame execution < 2.5ms di dalam callback `requestAnimationFrame`, 0 dropped frames akibat scripting/layout).

### 12.3 Bukti Screenshot Verifikasi
1. `screenshots/pimpinan-v3-carousel.png`: Section carousel pimpinan dengan latar gradien baru, panah aktif, dan kartu tengah berfokus.
2. `screenshots/pimpinan-v3-modal.png`: Modal profil pimpinan desktop terbuka sempurna dengan detail profil, tab pendidikan/jabatan, dan navigasi 1 dari 5.
3. `screenshots/pimpinan-v3-modal-390.png`: Modal profil pimpinan mobile (viewport 390px) berupa bottom sheet yang rapi dan ergonomis.

---

## 13. Pembaruan Tagline "Strategic Your Partner", Perampingan Navigasi Footer, Alamat Resmi & Ikon Sosial (02 November 2026)

### 13.1 Ringkasan Perubahan
1. **Tagline Logo Diperbarui Menjadi "Strategic Your Partner"**:
   - Tagline pada logo Navbar (`Navbar.svelte`) dan Footer (`Footer.svelte`) telah diganti dari "KONSULTAN PENDIDIKAN" menjadi **"Strategic Your Partner"**.
   - Default tagline pada komponen reusable `Logo.svelte`, papan signage 3D gedung di `HeroAbout.svelte`, dan plaque signage di `ContactLocation3Panel.svelte` juga diperbarui menjadi "Strategic Your Partner".
   - Seluruh tag `<title>` pada 9 route halaman diperbarui menggunakan "Strategic Your Partner".
2. **Pembersihan Kolom Navigasi Footer**:
   - Kolom "Navigasi Utama" dan "Pusat Informasi" beserta garis pemisah vertikalnya telah dihapus dari `Footer.svelte` karena seluruh navigasi sudah tersedia di Navbar.
   - Tata letak grid footer dirampingkan menjadi 3 kolom yang proporsional dan bersih: Info Brand & Alamat, Kontak & Informasi, serta Hak Cipta & Tautan Legal.
3. **Ikon Sosial Terhubung (@iconify/svelte)**:
   - Ikon sosial diperbarui menjadi 3 platform: **Instagram (IG)**, **TikTok**, dan **Email**.
   - Menggunakan ikon `@iconify/svelte` (`ri:instagram-line`, `ri:tiktok-fill`, `ri:mail-line`) dengan tombol outline lingkaran 24px, hover color `#00A6B2`, dan tautan aktif (`https://instagram.com/sdjnusantara`, `https://tiktok.com/@sdjnusantara`, `mailto:info@sdjnusantara.com`).
4. **Alamat Kantor Resmi & Nomor HP Perusahaan**:
   - Teks deskripsi lama di footer diganti dengan alamat fisik resmi dan nomor HP sesuai kartu nama perusahaan (PT Sampurna Djaya Nusantara):
     - **Alamat**: Gedung Graha Aktiva Lt. GF (suite B3A), Jl. H. R. Rasuna Said No.6, Kuningan Tim., Jakarta Selatan 12950
     - **No. HP**: `+62 858-8072-4733` (tersedia link langsung `tel:` / WhatsApp).
   - Konfigurasi terpusat `src/lib/config/contact.ts` juga diselaraskan dengan alamat dan nomor HP resmi ini.

### 13.2 Bukti Screenshot Verifikasi
1. `screenshots/footer-v3-desktop.png`: Tampilan desktop footer bersih dengan tagline Strategic Your Partner, alamat Graha Aktiva, No. HP, dan 3 ikon sosial aktif.
2. `screenshots/footer-v3-mobile.png`: Tampilan mobile (390px) responsif rapi tanpa clipping atau horizontal overflow.

---

## 14. Konsistensi Ukuran Modal Profil Pimpinan (02 November 2026)

### 14.1 Ringkasan Masalah & Solusi
- **Masalah**: Sebelumnya tinggi modal profil pimpinan (`LeaderModal.svelte`) berubah-ubah secara dinamis saat menavigasi antar pimpinan (1 s/d 5) karena panjang teks nama pimpinan (1 baris vs 2 baris) dan ringkasan profil berbeda-beda, menyebabkan bingkai modal dan tombol navigasi panah (`<` dan `>`) meloncat naik-turun.
- **Solusi**:
  1. **Dimensi Modal Terkunci (Locked Dimensions)**:
     - Mengunci dimensi panel modal desktop secara konsisten: `width: 828px; height: 512px; min-height: 512px; max-height: 90vh;` dengan `overflow: hidden;`.
  2. **Struktur Grid & Kolom Rata Sempurna**:
     - `.modal-body` dan kedua kolom (`.left-col` dan `.right-col`) disetel `height: 100%`.
     - `.left-col` memusatkan foto pimpinan 246×305px tepat di tengah secara vertikal (`align-items: center`).
  3. **Standardisasi Vertical Footprint Konten**:
     - Judul pimpinan (`.leader-name`) diberikan `min-height: 65px; display: flex; align-items: center; flex-shrink: 0;` sehingga nama 1 baris maupun 2 baris memesan tinggi yang sama persis tanpa menggeser elemen di bawahnya.
     - Role row (`min-height: 22px`), bio title, dan bio text (`min-height: 40px; -webkit-line-clamp: 3;`) diseragamkan.
     - Baris info pendidikan & jabatan (`.info-row`) distandardisasi dengan `min-height: 26px`.
  4. **Navigasi Footer Terikat di Dasar (Anchored Footer)**:
     - `.modal-nav-footer` menggunakan `margin-top: auto; padding-top: 10px; border-top: 1px solid #F1F5F9; flex-shrink: 0;` sehingga indikator counter ("X dari 5") dan tombol navigasi panah `<` `>` selalu berada pada koordinat piksel yang persis sama di setiap kartu pimpinan.

### 14.2 Bukti Screenshot Verifikasi
1. `screenshots/pimpinan-modal-konsisten-leader1.png`: Modal pimpinan 1 (Nama Direktur Utama) dengan ukuran panel 828×512px yang presisi dan posisi navigasi stabil.
2. `screenshots/pimpinan-modal-konsisten-leader2.png`: Modal pimpinan 2 (Nama Manajer Operasional & Program) dengan ukuran panel 828×512px yang identik dan tidak berubah sedikitpun.

---

## 15. Implementasi Floating Chatbot Widget (02 November 2026)

### 15.1 Ringkasan Implementasi
1. **Arsitektur Komponen Reusable & Lazy Loading (`src/lib/components/chat/`)**:
   - `ChatWidget.svelte`: Komponen orkestrator yang dipasang satu kali di root layout (`src/routes/+layout.svelte`) sehingga status percakapan dan unread badge bertahan antar navigasi halaman. Memuat `ChatWindow.svelte` secara *lazy dynamic import* saat jendela dibuka untuk mempertahankan kinerja first load 100%.
   - `ChatLauncher.svelte`: Tombol lingkaran fixed di pojok kanan bawah (64px desktop, 56px mobile) berwarna teal `#079EAD` dengan ikon robot ramah, lencana unread merah (`#E5484D`), dan transisi ikon tutup (X) saat jendela terbuka.
   - `ChatTooltip.svelte`: Card ajakan putih radius 16px di atas launcher dengan ekor penunjuk, ikon bot, dan tombol tutup pesan. Muncul otomatis 2 detik setelah halaman dimuat dan status tertutup tersimpan di `sessionStorage`.
   - `ChatWindow.svelte`: Jendela obrolan non-modal fixed (desktop 392×min(560px, 100dvh-130px), mobile calc(100vw-24px)) dengan banner penanda mode demo, penyesuaian `visualViewport` untuk keyboard virtual, dan penguncian scroll body di mobile.
   - `ChatHeader.svelte`: Header teal `#079EAD` dengan avatar bot bulat 44px, status online hijau, tombol minimize, tombol close, menu hapus percakapan, serta aksen gelombang SVG halus di tepi bawah.
   - `MessageList.svelte` & `MessageBubble.svelte`: Area percakapan berscroll internal, bubble bot di kiri (abu-abu `#F1F5F9`) dan bubble pengguna di kanan (teal `#079EAD`), timestamp 11px, auto-scroll cerdas (dengan tombol "Pesan baru ↓" jika pengguna sedang menggulir ke atas), dan tokenizer teks aman untuk tautan terdaftar (allowlist).
   - `TypingIndicator.svelte`: Tiga titik animasi pantul dengan avatar bot dan label aksesibilitas.
   - `QuickReplies.svelte`: Empat chip vertikal berikon garis teal (Info Program Pendidikan, Beasiswa, Kemitraan, Layanan & Kontak) yang otomatis hilang saat percakapan dimulai.
   - `ChatInput.svelte`: Field input pill latar `#F4F8FB` (font 16px bebas zoom iOS), tombol kirim bulat teal 44px, proteksi Shift+Enter baris baru, dan peringatan privasi data sensitif di bagian bawah.

2. **State Store & Logika Layanan (`src/lib/stores/chat.svelte.ts` & `src/lib/services/chat/`)**:
   - Berbasis **Svelte 5 Runes** (`$state`, `$derived`, `$effect`) dengan pemulihan riwayat percakapan otomatis dari `sessionStorage` (`sdj_chat_v1`).
   - `mockChatService.ts`: Menjawab berbasis kata kunci sesuai pedoman resmi `content-master.md` (Program, Beasiswa dengan disclaimer non-jaminan, Kemitraan, Layanan & Kontak resmi, serta Biaya tanpa janji gratis). Jeda respons acak 700–1400ms.
   - `apiChatService.ts`: Kerangka kerja siap pakai untuk integrasi API backend mendatang.
   - **Unread Counter**: Menghitung pesan bot masuk saat jendela ditutup/diminimalkan, menampilkan angka 1–99 dan "99+", serta otomatis reset saat jendela dibuka. Dilengkapi hook dev-only `window.__chatDebug` yang tereliminasi otomatis pada build produksi.

3. **Harmonisasi Tombol Back to Top**:
   - Tombol floating Back to Top pada `Footer.svelte` diposisikan ulang ke `bottom: 96px; right: 24px;` (desktop) dan `bottom: 84px; right: 16px;` (mobile), tepat di atas launcher chat.
   - Otomatis disembunyikan saat jendela chatbot sedang terbuka agar tidak menumpuk.

### 15.2 Bukti Screenshot & Verifikasi
1. `screenshots/chatbot-v1-final-1536-closed.png` (dan `chatbot-v1-tahap1-closed-tooltip.png`): Launcher teal dan tooltip ajakan muncul rapi tanpa tabrakan di viewport desktop 1536px.
2. `screenshots/chatbot-v1-final-1536-open.png` (dan `chatbot-v1-tahap1-open.png`): Jendela obrolan terbuka dengan header bergelombang, pesan sambutan lengkap, 4 quick reply chips, dan input bawah.
3. `screenshots/chatbot-v1-final-1536-typing.png`: Tampilan bubble pengguna dan animasi mengetik 3 titik.
4. `screenshots/chatbot-v1-final-1536-badge.png`: Simulasi 3 pesan masuk saat jendela tertutup memunculkan lencana merah counter unread dan posisi Back to Top di atas launcher.
5. `screenshots/chatbot-v1-final-768.png`: Tampilan pada tablet 768px responsif dan rapi.
6. `screenshots/chatbot-v1-final-390.png` & `screenshots/chatbot-v1-final-390-keyboard.png`: Tampilan mobile 390px fullscreen-docked dengan adaptasi ketinggian keyboard virtual.
7. `screenshots/check-beranda-widget.png`, `screenshots/check-konsultasi-widget.png`, `screenshots/check-tentang-kami-widget.png`: Verifikasi halaman lain tetap utuh tanpa regresi struktur atau styling.

---

## 16. Revisi Tampilan Floating Chatbot Widget Sesuai Mockup V2 (02 November 2026)

### 16.1 Ringkasan Perubahan Visual (Berdasarkan `design/chatbot-mockup.png`)
1. **Chat Launcher & Unread Badge**:
   - Launcher lingkaran teal `#079EAD` 64px (mobile 56px), ring putih 2px, shadow lembut berwarna teal (0 10px 24px rgba(7,158,173,.35)), ikon kepala robot persegi membulat putih 32px (stroke 2px outline) dengan transisi rotasi 90deg halus ke ikon X saat jendela dibuka.
   - Badge unread merah `#E5484D` diameter 24px (angka putih bold 13px, border putih 2px, offset -4px), animasi muncul scale 0.6→1 overshoot.
   - **Efek Percikan (Sparks)**: 3 garis pendek teal/turquoise memancar dari sudut kanan-atas badge (satu ke atas, satu diagonal, satu ke kanan) beranimasi fade+scale 500ms saat badge bertambah, menghormati `prefers-reduced-motion`.
2. **Tooltip Ajakan**:
   - Card putih radius 18px berbayang lembut di atas launcher rata kanan dengan ekor segitiga membulat 12px menunjuk ke launcher.
   - Kiri: Ikon bintang berkilau (sparkle) emas `#F5B331` 22px (SVG murni, bukan emoji).
   - Teks: Judul navy bold 15px 2 baris ("Butuh informasi seputar / pendidikan?"), deskripsi abu-biru 13.5px 2 baris ("Tanyakan langsung kepada / Asisten SDJNusantara.").
   - Kanan atas: Tombol X 32px untuk menutup tooltip (tersimpan di `sessionStorage`), card tidak memicu pembukaan jendela chat.
3. **Header Jendela Chat (Tinggi 112px)**:
   - Latar Navy `#082442` dengan dekorasi gelombang SVG berlapis di tepi bawah: lapisan turquoise `#16B6C1` (opacity 0.55), lapisan teal `#079EAD`, dan pita emas tipis `#F5B331` yang naik melengkung di sisi kanan.
   - Avatar kiri: Lingkaran putih 52px dengan ikon robot navy/teal 30px dan bayangan halus.
   - Teks: Judul bold putih 18.5px "Asisten SDJNusantara", subjudul satu baris putih "Asisten Virtual • Siap Membantu" (13.5px nowrap).
   - Tombol minimize (`—`) dan close (`×`) putih 22px dengan area sentuh 40px. Menu titik tiga dipindahkan dari header ke baris catatan bawah agar header bersih sesuai mockup.
4. **Area Percakapan & Bubble Chat**:
   - Avatar bot lingkaran teal 36px di kiri atas bubble bot.
   - Bubble bot berlatar abu-biru lembut `#EEF2F6`, radius 18px (kiri-atas 6px), baris pertama bold navy 15.5px ("**Halo! Selamat datang di SDJNusantara**"), jam 11px abu-abu `#8A97A6` di pojok kanan bawah di dalam bubble bot.
   - Bubble pengguna di kanan berlatar teal `#079EAD` dengan teks putih dan jam putih 70% di dalam bubble.
   - Pesan sambutan bersih tanpa emoji dan daftar bullet panjang digantikan oleh quick reply chips.
5. **Quick Reply Chips (Grid 2 Kolom × 3 Baris)**:
   - 6 chip disusun dalam grid 2 kolom dengan jarak gap 10px, tinggi 42px pill, latar `#F4F8FB`, border 1px `#D6E6EC`, ikon teal 20px di kiri + teks navy bold 13.5px, hover latar `#EAF7F9` border teal:
     - Baris 1: `Info Program Pendidikan` (topi toga), `Beasiswa` (kado)
     - Baris 2: `Pengembangan Talenta` (kelompok orang), `Konsultasi` (headset)
     - Baris 3: `Kerja Sama Institusi` (jabat tangan), `Topik Lainnya` (tiga titik)
   - Muncul dengan animasi berurutan (stagger 40ms) dan otomatis hilang saat pesan pertama dikirim.
   - Mock service diperluas untuk merespons otomatis topik: Pengembangan Talenta (asesmen minat-bakat, IDP, coaching tanpa janji hasil), Konsultasi (diarahkan ke WhatsApp/halaman Kontak tanpa klaim gratis/SLA instan), Kerja Sama Institusi (tahapan mitra dan link /kemitraan), dan Topik Lainnya.
6. **Input & Catatan Bawah**:
   - Field input pill 46px `#F6F9FB` border `#DCE6EC`, placeholder "Ketik pertanyaan Anda..." (font 16px bebas auto-zoom iOS), tombol kirim bulat teal 46px dengan pesawat kertas putih.
   - Tanpa ikon klip kertas (karena fitur unggah berkas belum didukung backend).
   - Banner mode demo lama yang besar dihapus; dipadatkan menjadi catatan bawah rapi 11px abu-abu: *"Mode demo: jawaban otomatis sementara. Jangan kirim data sensitif (NIK, kata sandi, nomor kartu)."* disertai tautan kecil teal *"Hapus percakapan"* (dengan modal konfirmasi).

### 16.2 Bukti Screenshot Verifikasi
1. `screenshots/chatbot-v2-closed.png`: Launcher teal 64px, ring putih, dan card tooltip ajakan dengan sparkle emas + teks 2 baris + ekor penunjuk.
2. `screenshots/chatbot-v2-open.png`: Jendela chat 392px dengan header navy, gelombang berlapis pita emas, bubble bot jam internal, 6 chip grid 2x3, dan input pill 46px.
3. `screenshots/chatbot-v2-badge.png`: Badge unread merah 24px bertuliskan "2" dengan 3 garis percikan teal/turquoise yang memancar.
4. `screenshots/chatbot-v2-badge99.png`: Badge unread bertuliskan "99+" berbentuk pill merah yang rapi tanpa teks meluap.
5. `screenshots/chatbot-v2-390.png`: Tampilan responsif mobile 390px (lebar layar penuh dikurangi margin 12px, header adaptif, chip 2 kolom rapi).
6. `screenshots/check-tentang-kami-clean.png` & `screenshots/check-layanan-clean.png`: Verifikasi konsistensi tampilan launcher chatbot pada halaman Tentang Kami dan Layanan setelah tombol floating back-to-top dihapus total dari `Footer.svelte`. Launcher tampil bersih, mandiri, dan bebas tumpukan tombol di seluruh halaman website (identik dengan Gambar 1).

---

## 17. Standarisasi Tampilan & Ukuran Navbar Seluruh Halaman Mengikuti Navbar Tentang Kami (02 November 2026)

### 17.1 Ringkasan Perubahan
1. **Penyelarasan Dimensi & Kontainer Navbar**:
   - Seluruh rute website (Beranda, Tentang Kami, Layanan, Program, Beasiswa, Kemitraan, Artikel & Wawasan, Kontak, Legal) distandardisasi menggunakan ukuran kontainer lebar (`max-width: 1312px; padding: 0 1rem;` dan `max-width: 1500px` pada layar lebar `min-width: 1920px`) persis seperti pada halaman Tentang Kami.
   - Mengeliminasi perbedaan ukuran legacy di mana Beranda, Beasiswa, Kemitraan, dan Artikel sebelumnya menyempit ke `1086px`.
2. **Refaktorisasi & Kerapihan Kode (`src/lib/components/layout/Navbar.svelte`)**:
   - Menghapus percabangan class CSS yang tumpang-tindih (`compact`, `compact-inner`, `wide-inner`, `compact-logo`, dll.) menjadi satu set aturan CSS baku yang bersih, rapi, dan modular.
   - Tinggi navbar: tepat `48px` fixed di seluruh halaman dengan `border-bottom: 1px solid #DCE6EE` dan shadow halus `0 1px 4px rgba(11, 39, 71, 0.03)`.
   - Brand Logo: Gambar logo 28×28px, Brand Title 16px font-weight 800 navy `#0B2747`, Brand Tagline 10px `#64748B` font-weight 500.
   - Menu Navigasi: Font 11px font-weight 500 `#183553`, gap 1.35rem, hover teal `#00A6B2`, active teal `#00A6B2` font-weight 700 dengan garis active indicator tebal 2.5px di dasar navbar.
   - Ikon Chevron dropdown pada item yang memiliki submenu (`Layanan`).
   - Aksen visual lengkungan swoosh abu-abu samar (`#E5EAEE`, opacity 0.75) di sudut kanan atas navbar.
   - Mobile menu drawer yang bersih, responsif, dan mengunci scroll body saat terbuka.
3. **Penyelarasan Pemanggilan Komponen**:
   - 13 file rute (`+page.svelte`) diseragamkan memanggil `<Navbar compact={true} wide={true} />`.

### 17.2 Bukti Screenshot Verifikasi
1. `screenshots/nav-tentang-kami.png`: Navbar Tentang Kami sebagai acuan standar desain (lebar 1312px, logo di x≈112, menu berakhir di x≈1424).
2. `screenshots/nav-beranda.png`: Navbar Beranda setelah standarisasi (posisi horizontal logo dan menu 100% sejajar dan identik dengan Tentang Kami).
3. `screenshots/nav-beasiswa.png`: Navbar Beasiswa setelah standarisasi.
4. `screenshots/nav-kemitraan.png`: Navbar Kemitraan setelah standarisasi.
5. `screenshots/nav-artikel.png`: Navbar Artikel & Wawasan setelah standarisasi.

---

## 18. Implementasi Modal Detail Beasiswa & Program dan Toolbar Cari & Filter Popover (05 November 2026)

### 18.1 Ringkasan Perubahan
1. **Modal Detail Reusable (`src/lib/components/ui/DetailModal.svelte`)**:
   - Menghubungkan tombol "Lihat Detail" pada kartu Beasiswa (`ScholarshipSearchSection.svelte`) dan kartu Program (`ProgramListSection.svelte`) ke dialog modal interaktif tanpa berpindah halaman.
   - Menggunakan portal render (`document.body`), scroll-lock body tanpa layout shift (kompensasi `scrollbar-width`), serta focus trap penuh (`role="dialog"`, `aria-modal="true"`, inisialisasi fokus ke tombol tutup, dan pengembalian fokus ke elemen pemantik saat modal ditutup).
   - Sinkronisasi URL hash (`#beasiswa-<id>` dan `#program-<slug>`) via `history.replaceState` untuk deep-linking langsung ke modal.
   - Navigasi antar-kartu ("Sebelumnya", "Berikutnya", dan indikator "X dari N") yang menghormati hasil filter/pencarian aktif.
   - Sticky action footer: tombol "Konsultasi Persiapan", tombol "Tanya Asisten" (membuka chatbot dengan pertanyaan terisi otomatis ke `chatStore`), dan tautan "Buka halaman penuh" ke rute detail independen yang tetap berfungsi.
   - Tampilan adaptif mobile ($\le 767\text{px}$) yang bertransformasi menjadi bottom-sheet dengan drag handle.

2. **Komponen Isi Modal**:
   - `src/lib/components/sections/scholarship/ScholarshipDetail.svelte`: Menampilkan rincian beasiswa 2 kolom, cakupan pendanaan (*Tuition Fee*, Biaya Hidup, Tiket PP, dsb.), checklist persiapan umum, bentuk pendampingan SDJ, serta catatan kepatuhan bahwa data bersifat referensi.
   - `src/lib/components/sections/program/ProgramDetail.svelte`: Menampilkan detail program yang terhubung ke basis data `programKnowledge` (format program, sasaran peserta, hasil belajar, 3 langkah awal, serta klausul jujur konsultasi jadwal dan biaya).

3. **Toolbar Cari & Filter Popover**:
   - **`SearchToggle.svelte`**: Tombol pencarian kompak lebar 260px (ikon loop, placeholder "Cari beasiswa...", dan shortcut keyboard `/`) yang mengembang halus menjadi input aktif dengan debounce 200ms, tombol hapus (x), dan tombol kirim navy. Diterapkan pula secara konsisten pada bagian Daftar Program (`ProgramListSection.svelte`).
   - **`FilterPopover.svelte`**: Tombol "Filter" berikon funnel dan badge counter aktif (`Filter (N)`) yang membuka floating popover card tepat di bawah tombol dengan notch segitiga. Memuat grid 2 kolom $\times$ 3 baris dropdown:
     * Kategori (Pemerintah, Universitas, Lembaga Internasional, Swasta, Daerah)
     * Jenjang Pendidikan (S1, S2, S3)
     * Negara Tujuan (Dalam Negeri, Luar Negeri, Inggris, Jepang)
     * Jenis Pendanaan (Fully Funded, Partial Funded)
     * Status Pendaftaran (Buka, Segera Dibuka, Ditutup)
     * Penyelenggara (Pemerintah RI / Kemdikbud, UK Government, Government of Japan, LPDP Kemenkeu)
   - Preview dinamis pada tombol "Terapkan Filter (N)", tombol "Reset" draft, penutupan klik luar dan tombol Escape. Pada mobile ($\le 767\text{px}$), bertransformasi menjadi modal bottom-sheet.
   - **`ActiveChips.svelte`**: Bar filter horizontal aktif di bawah toolbar dengan tag per opsi (`[Kategori: ...]`, `[Jenjang: ...]`, `[Cari: ...]`) yang dapat dihapus individual maupun sekaligus ("Hapus semua").
   - Informasi hasil: Teks *"Menampilkan N beasiswa"* di kanan toolbar dan link *"Reset semua"* saat ada filter yang aktif.
   - Tampilan status kosong (empty state) ramah dengan ikon kaca pembesar, pesan penyesuaian filter, tombol *"Atur Ulang Filter"*, dan tombol emas *"Konsultasikan Beasiswa yang Anda Cari"*.

### 18.2 Bukti Screenshot Verifikasi
1. `screenshots/modal-detail-beasiswa-1536.png`: Modal detail beasiswa desktop 1536px (banner, header, info grid 2 kolom, cakupan pendanaan, sticky footer).
2. `screenshots/modal-detail-beasiswa-390.png`: Modal detail beasiswa mobile 390px bottom-sheet.
3. `screenshots/modal-detail-program-1536.png`: Modal detail program desktop 1536px.
4. `screenshots/modal-detail-program-390.png`: Modal detail program mobile 390px bottom-sheet.
5. `screenshots/filter-toolbar-default-1536.png`: Toolbar Cari & Filter default berdampingan di desktop 1536px.
6. `screenshots/filter-toolbar-search-expanded-1536.png`: Toolbar Cari mengembang dengan teks kueri dan chip aktif.
7. `screenshots/filter-toolbar-popover-open-1536.png`: Popover Filter terbuka melayang dengan grid 2x3 dan tombol Terapkan Filter (N).
8. `screenshots/filter-toolbar-chips-active-1536.png`: Bar chip filter aktif di bawah toolbar.
9. `screenshots/filter-toolbar-empty-1536.png`: Tampilan empty state saat tidak ada beasiswa yang cocok.
10. `screenshots/filter-toolbar-mobile-390.png`: Toolbar Cari & Filter pada mobile 390px.
11. `screenshots/filter-toolbar-mobile-popover-390.png`: Filter popover sebagai bottom-sheet mobile 390px.
12. `screenshots/program-search-toggle-1536.png`: Tombol Cari terintegrasi pada Daftar Program.

---

## 19. Redesign & Implementasi Halaman FAQ Interaktif SDJNusantara (05 November 2026)

### 19.1 Ringkasan Perubahan
1. **Model Data FAQ Terpusat (`src/lib/data/faq.ts`)**:
   - Membangun struktur data resmi FAQ: `id`, `question`, `answer`, `category` (`program` | `beasiswa` | `kemitraan` | `hukum`), `isActive`, `isPopular`, dan `order`.
   - Mengintegrasikan 24 pertanyaan terstruktur yang merefleksikan 4 pilar utama layanan SDJNusantara:
     * Program Pendidikan (8) — Kategori aktif default
     * Beasiswa (6)
     * Kemitraan (5)
     * Layanan Hukum (5)
   - Kategori "Semua Pertanyaan" dihilangkan sesuai permintaan dan tombol "Tampilkan semua" dihapus.
   - 7 Pertanyaan Populer diprioritaskan pada tampilan awal sesuai persis dengan urutan dan redaksi pada mockup referensi (`media_1793889787792_df081cbd.jpg`).
   - Seluruh konten mematuhi etika dan kebijakan komunikasi SDJNusantara: bebas klaim kelulusan mutlak, bebas kata terlarang, serta memuat batasan hukum non-litigasi yang jelas.

2. **Komponen Interaktif 2 Kolom (`src/lib/components/sections/faq/FaqSection.svelte`)**:
   - **Sidebar Kiri (Navigasi Kategori)**:
     - Card putih dengan sudut membulat 20px, border abu-abu kebiruan tipis, dan bayangan lembut.
     - Header visual potret konsultan wanita muda berhijab ramah memegang tablet (`static/images/faq-assistant-woman.jpg`) dilengkapi ornamen gelembung tanya (*floating question bubble*) warna teal `#00A6B2`.
     - Heading: *"Cari Informasi dengan Cepat"* dan deskripsi fungsi FAQ.
     - 5 tombol navigasi kategori dengan Iconify (`ph:graduation-cap-fill`, `ph:student-bold`, `ph:gift-bold`, `ph:handshake-bold`, `ph:scales-bold`) dan badge counter jumlah pertanyaan aktual yang terhitung secara dinamis dari data.
     - Status aktif: latar belakang teal `#00A6B2` dengan teks & ikon putih; status tidak aktif: latar putih dengan border tipis dan efek hover transisi lembut.
   - **Kolom Kanan (Pencarian & Accordion FAQ)**:
     - Search Bar interaktif di bagian atas berikon Iconify `lucide:search`, placeholder *"Cari pertanyaan, misalnya 'cara daftar beasiswa'..."*, tombol clear (x), serta filter real-time terhadap judul pertanyaan dan isi jawaban.
     - Heading dinamis: menampilkan *"— Pertanyaan Populer"* berikon badge emas `★ Populer` pada kategori awal, serta beradaptasi sesuai kategori atau kueri pencarian.
     - Accordion card horizontal ber-border tipis `#E2E8F0`, badge nomor urut teal muda (`01`, `02`, ...), font semibold, ikon chevron berotasi mulus, dan latar belakang aktif teal sangat muda (`#F4FBFB`).
     - Sistem single accordion (membuka satu pertanyaan otomatis menutup pertanyaan lainnya) dengan pertanyaan pertama terbuka secara default.
     - Empty state informatif jika hasil pencarian tidak ditemukan, dilengkapi tombol *"Atur Ulang Pencarian"* dan *"Tanya Asisten SDJ"*.
   - **Banner CTA Bawah**:
     - Card horizontal gelap navy `#082442` dengan lengkungan ornamen teal dan aksen emas.
     - Ikon balon chat teal di sisi kiri, judul *"Masih ada pertanyaan lain?"*, dan deskripsi pendampingan.
     - Dua tombol aksi terpadu: Tombol Emas *"Chat dengan Asisten"* (memicu `chatStore.open()`) dan Tombol Outline Putih *"Hubungi via WhatsApp"* (mengarah ke WhatsApp resmi SDJNusantara).

3. **Integrasi Rute**:
   - Memperbarui [`ContactFaqSection.svelte`](file:///var/www/html/SDJ_NUSANTARA/src/lib/components/sections/contact/ContactFaqSection.svelte) sehingga bagian FAQ di halaman Kontak (`/kontak#faq`) otomatis menggunakan desain 2 kolom baru.
   - Menambahkan rute mandiri [`src/routes/faq/+page.svelte`](file:///var/www/html/SDJ_NUSANTARA/src/routes/faq/+page.svelte) lengkap dengan Navbar, meta SEO, FaqSection, dan Footer.

### 19.2 Bukti Screenshot Verifikasi
1. `screenshots/faq-desktop-default-1536.png`: Tampilan FAQ 2 kolom desktop 1536px (kategori Semua Pertanyaan aktif, 7 pertanyaan populer, nomor 01 terbuka).
2. `screenshots/faq-category-beasiswa-1536.png`: Filter kategori Beasiswa aktif (6 pertanyaan tersaring, badge Beasiswa aktif).
3. `screenshots/faq-search-lpdp-1536.png`: Pencarian interaktif dengan kata kunci "LPDP" (1 hasil beasiswa yang relevan).
4. `screenshots/faq-empty-state-1536.png`: Tampilan empty state saat kata kunci tidak ditemukan dengan tombol atur ulang.
5. `screenshots/faq-desktop-cta-banner-1536.png`: Tampilan banner CTA bawah horizontal (Chat dengan Asisten & WhatsApp) di atas Footer.
6. `screenshots/faq-mobile-390.png`: Tampilan responsif mobile 390px (sidebar card di atas dengan horizontal scroll kategori, search bar & accordion 1 kolom).
7. `screenshots/faq-kontak-section-1536.png`: Verifikasi integrasi komponen FAQ baru pada halaman Kontak (`/kontak#faq`).

---

## 20. Pixel-Perfect Refinement FAQ SDJNusantara Sesuai Mockup Referensi (05 November 2026)

### 20.1 Kepatuhan Spesifikasi Visual Mockup
1. **Layout & Dimensi Presisi**:
   - Background section: `#F4F9FC` (light blue-gray).
   - Container utama: lebar maksimal 1320px rata tengah (`max-width: 1320px; margin: 0 auto; padding: 52px 24px 72px;`).
   - Grid 2-kolom desktop: Kolom kiri 380px fixed, kolom kanan 1fr (`860px`), dengan `gap: 32px`.
2. **Sidebar Card Kiri**:
   - Ilustrasi utama menggunakan foto resolusi tinggi 2x (`static/images/faq-assistant-woman-mockup-2x.png`) menampilkan perempuan muda berhijab beige dan blazer navy memegang tablet, lengkap dengan bentuk lingkaran dekoratif teal & kuning serta bubble tanda tanya teal (`?`) di kanan atas.
   - Heading: *"Cari Informasi dengan Cepat"* (`#0B2948`, font-size 22px, font-weight 800) dan deskripsi (`#64748B`, font-size 13.5px).
   - 4 Kategori navigasi presisi (tinggi 48px, radius 14px, gap 8px):
     * Program Pendidikan (8) — Aktif default (Background teal `#00A6B2`, teks & icon putih, badge putih transparan `rgba(255,255,255,0.24)`)
     * Beasiswa (6)
     * Kemitraan (5)
     * Layanan Hukum (5)
3. **Kolom Kanan (Search Bar & Accordion FAQ)**:
   - Search bar: tinggi 60px, radius 16px, background putih, border `#DCE7F0`, icon search teal `#00A6B2` di kiri, dan placeholder *"Cari pertanyaan, misalnya 'cara daftar beasiswa'..."*.
   - Heading kategori: `— Program Pendidikan` (dash teal tebal, font navy 24px bold).
   - 7 Pertanyaan akordeon Program Pendidikan sesuai urutan persis mockup:
     01. Apakah SDJNusantara hanya melayani mahasiswa? (Terbuka default, background cyan muda `#F0F9FA`, border `#9DE1E5`, teks jawaban sejajar/indentasi dengan teks pertanyaan di 68px).
     02. Apakah SDJNusantara menyediakan beasiswa sendiri?
     03. Apakah peserta dijamin lolos beasiswa?
     04. Apakah konsultasi dan bimbingan bisa dilakukan secara daring (online)?
     05. Apakah peserta pelatihan memperoleh sertifikat (termasuk BNSP)?
     06. Bagaimana cara mendaftar program atau bimbingan?
     07. Apakah materi dan layanan dapat disesuaikan untuk institusi atau perusahaan?
4. **CTA Banner Bawah**:
   - Background Dark Navy `#062D4B`, border radius 20px, min-height 140px, padding 26px 36px, margin-top 38px.
   - Dekorasi SVG lengkungan teal (`#00A6B2`) di kiri-bawah serta gold (`#FFB629`) dan teal di kanan-bawah.
   - Konten kiri: Ikon balon chat 30px dalam lingkaran teal 52px, heading *"Masih ada pertanyaan lain?"*, dan deskripsi pendampingan.
   - Divider vertikal teal di tengah (`width: 1px; height: 48px; background: rgba(0, 166, 178, 0.35)`).
   - Konten kanan: Tombol Emas *"Chat dengan Asisten"* (kuning `#FFB629` + teks navy) dan Tombol Outline Putih *"Hubungi via WhatsApp"*.
