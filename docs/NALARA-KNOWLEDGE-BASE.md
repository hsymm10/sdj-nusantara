# NALARA — Basis Pengetahuan (Knowledge Base)
## Panduan Struktur Data, Verifikasi, & Pengelolaan Konten

---

### 1. Filosofi & Sumber Kebenaran (Single Source of Truth)

Basis pengetahuan NALARA disimpan dalam format **TypeScript terstruktur** pada direktori `src/lib/server/nalara/context/`. Seluruh informasi yang disematkan ke dalam memori NALARA **wajib berasal dari data faktual website resmi SDJ Nusantara**.

Prinsip utama:
1. **Zero Hallucination:** NALARA dilarang mengarang layanan, alamat, kontak, atau harga yang tidak tertera pada basis data.
2. **Strict Verification:** Hanya entri dengan status `verified` yang akan diinjeksikan ke dalam sistem *prompt* AI. Entri berstatus `draft` diabaikan secara otomatis hingga selesai diverifikasi oleh tim kurasi.
3. **Modular & Category-based:** Setiap topik dipecah berdasarkan domain fungsionalnya (profil perusahaan, layanan, beasiswa, program, FAQ, dan navigasi website).

---

### 2. Skema & Definisi Tipe Data (`knowledge.types.ts`)

Struktur setiap entri didefinisikan dengan *interface* TypeScript yang ketat:

```typescript
export type VerificationStatus = 'verified' | 'draft' | 'archived';

export type KnowledgeCategory =
  | 'company'
  | 'services'
  | 'programs'
  | 'scholarships'
  | 'faq'
  | 'website';

export interface KnowledgeEntry {
  id: string;                     // ID unik (contoh: 'profile-summary', 'service-institusi')
  title: string;                  // Judul representatif entri
  category: KnowledgeCategory;    // Kategori informasi
  summary: string;                // Ringkasan 1-2 kalimat untuk konteks cepat
  facts: string[];                // Kumpulan poin fakta resmi yang tidak boleh dilanggar
  keywords: string[];             // Kata kunci untuk retrieval/scoring pencarian
  relatedRoutes?: string[];       // Rute website terkait (contoh: ['/layanan', '/kontak'])
  status: VerificationStatus;     // Status verifikasi: 'verified' | 'draft' | 'archived'
  lastVerifiedAt: string;         // Tanggal verifikasi terakhir (ISO format: YYYY-MM-DD)
  verifiedBy: string;             // Nama PIC verifikator (contoh: 'SDJ Nusantara Content Team')
}
```

---

### 3. Kategori & Modul Konteks

| Modul File | Kategori | Cakupan Konten Faktual |
|---|---|---|
| `company.ts` | `company` | Profil SDJ Nusantara, visi misi, legalitas rekening resmi perusahaan, alamat kantor, jam operasional, dan kontak representatif. |
| `services.ts` | `services` | Pengelompokan dua pilar utama (**Layanan Individu** dan **Solusi Institusi**), metode 5 tahapan kerja, dan pendampingan terarah. |
| `programs.ts` | `programs` | *Talent Management*, kurasi kompetensi digital/AI, pelatihan khusus organisasi/korporasi, dan program kemitraan kampus. |
| `scholarships.ts` | `scholarships` | *Scholarship Academy*, roadmap 6 langkah pendampingan beasiswa (S1, S2, S3 dalam/luar negeri), dan penegasan kebijakan *tanpa jaminan kelulusan*. |
| `faq.ts` | `faq` | Cara pendaftaran, alur konsultasi gratis, kebijakan biaya dan transparansi penawaran, serta metode pelaksanaan daring/luring. |
| `website.ts` | `website` | Struktur sitemap dan rute publik website (`/`, `/layanan`, `/layanan/pendidikan`, `/layanan/beasiswa`, `/kemitraan`, `/kontak`, dsb.). |

---

### 4. Siklus Hidup Status Verifikasi (Verification Lifecycle)

```
[Entri Baru / Perubahan]
           │
           ▼
        [ draft ] ──────────────► Tidak diikutsertakan dalam injeksi prompt NALARA
           │
           │ (Diverifikasi oleh tim konten terhadap fakta website resmi)
           ▼
      [ verified ] ─────────────► Diikutsertakan dalam context retrieval NALARA
           │
           │ (Jika layanan diganti atau kebijakan diperbarui)
           ▼
      [ archived ] ─────────────► Dinonaktifkan dari retrieval, disimpan sebagai arsip historis
```

---

### 5. Contoh Implementasi Entri Terverifikasi

Berikut adalah contoh format entri resmi yang diterapkan pada `src/lib/server/nalara/context/services.ts`:

```typescript
export const solusInstitusiEntry: KnowledgeEntry = {
  id: 'services-institusi',
  title: 'Solusi Institusi SDJ Nusantara',
  category: 'services',
  summary:
    'Layanan pengembangan kapasitas strategis yang dirancang khusus untuk korporasi, institusi pendidikan, dan organisasi publik.',
  facts: [
    'Solusi Institusi ditujukan untuk organisasi, korporasi, instansi pemerintah, dan institusi pendidikan.',
    'Menyediakan program Pengembangan Kompetensi (talent development & leadership).',
    'Menyediakan Pelatihan Organisasi (in-house training, workshop khusus, peningkatan kapasitas tim).',
    'Menyediakan Perancangan Program (kurikulum pelatihan, asesmen kesiapan SDM, dan evaluasi hasil kerja sama).',
    'Setiap program institusi diawali dengan asesmen kebutuhan (needs assessment) dan disesuaikan dengan sasaran spesifik mitra.'
  ],
  keywords: [
    'solusi institusi',
    'institusi',
    'korporasi',
    'perusahaan',
    'pelatihan organisasi',
    'pengembangan kompetensi',
    'perancangan program',
    'in-house training',
    'mitra',
    'b2b'
  ],
  relatedRoutes: ['/layanan', '/kemitraan', '/kontak'],
  status: 'verified',
  lastVerifiedAt: '2026-11-20',
  verifiedBy: 'SDJ Nusantara Content Team'
};
```

---

### 6. Panduan Menambah atau Memperbarui Entri

1. **Membuat atau Mengedit Entri:**
   - Buka file kategori yang sesuai di `src/lib/server/nalara/context/<nama-kategori>.ts`.
   - Tambahkan objek `KnowledgeEntry` baru atau perbarui objek yang ada.
   - Cantumkan fakta yang akurat dan padat pada `facts`.
   - Masukkan kata kunci pencarian dalam bahasa Indonesia (dan istilah umum) pada array `keywords`.
2. **Menetapkan Status Verifikasi:**
   - Atur `status: 'verified'` hanya setelah memeriksa keabsahan materi dengan tim terkait.
   - Perbarui `lastVerifiedAt` dengan tanggal perubahan (format `YYYY-MM-DD`).
3. **Pendaftaran pada Index:**
   - Pastikan entri baru diimpor dan dimasukkan ke dalam daftar array di `src/lib/server/nalara/context/index.ts`.
4. **Verifikasi Tipe & Build:**
   - Jalankan `npm run check` untuk memastikan validitas tipe TypeScript dan tidak ada properti wajib yang terlewat.

