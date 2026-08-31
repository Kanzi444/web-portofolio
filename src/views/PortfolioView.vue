<template>
  <div class="min-h-screen font-sans text-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
    
    <!-- NAVBAR / HEADER -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-lg shadow-amber-400/20">
            DP
          </div>
          <div>
            <span class="font-bold text-base sm:text-lg tracking-wider text-white uppercase block">Kanzi Pratama</span>
            <span class="text-[10px] text-amber-400 tracking-widest uppercase font-semibold">Frontend Developer</span>
          </div>
        </div>
        <nav class="hidden md:flex items-center space-x-6 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#tentang" class="hover:text-amber-400 transition-colors">Tentang</a>
          <a href="#keahlian" class="hover:text-amber-400 transition-colors">Keahlian</a>
          <a href="#proyek" class="hover:text-amber-400 transition-colors">Proyek</a>
          <a href="#pencapaian" class="hover:text-amber-400 transition-colors">Pencapaian</a>
          <a href="#kontak" class="hover:text-amber-400 transition-colors">Kontak</a>
        </nav>
        <div>
          <a href="#kontak" class="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-400/10">
            Hubungi Saya
          </a>
        </div>
      </div>
    </header>

    <!-- KONTEN UTAMA -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 flex-grow w-full">
      
      <!-- HERO SECTION -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full text-xs font-semibold text-amber-400 backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Tersedia untuk Proyek & Kolaborasi
          </div>
          <h1 class="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight text-white">
            Membangun Pengalaman <span class="text-amber-400 underline decoration-amber-400/30">Digital</span> yang Elegan.
          </h1>
          <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Halo! Saya seorang Frontend Developer yang berfokus pada pembuatan antarmuka web yang interaktif, bersih, dan responsif menggunakan Vue.js dan Tailwind CSS.
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a href="#proyek" class="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20">
              Lihat Portofolio ➔
            </a>
            <a href="#tentang" class="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all">
              Tentang Saya
            </a>
          </div>
        </div>

        <!-- Profil Card / Avatar Grid -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6 backdrop-blur-md">
            <div class="absolute -right-16 -top-16 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -left-16 -bottom-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div class="flex items-center gap-4 relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 font-black text-2xl flex items-center justify-center shadow-xl">
                DP
              </div>
              <div>
                <h3 class="font-bold text-lg text-white">Kanzi Pratama</h3>
                <p class="text-xs text-amber-400 font-medium">Bandung, Jawa Barat</p>
              </div>
            </div>

            <div class="space-y-3 pt-2 border-t border-slate-800 relative z-10 text-xs text-slate-300">
              <div class="flex justify-between py-1 border-b border-slate-800/50">
                <span class="text-slate-400">Pengalaman</span>
                <span class="font-bold text-white">3 Tahun</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800/50">
                <span class="text-slate-400">Proyek Selesai</span>
                <span class="font-bold text-white">6 Proyek</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-400">Fokus Utama</span>
                <span class="font-bold text-amber-400">Vue.js & Tailwind</span>
              </div>
            </div>

            <div class="pt-2 relative z-10">
              <div class="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center space-y-1">
                <p class="text-[11px] text-slate-400 italic">“Kode yang bersih dan desain yang rapi adalah prioritas utama saya.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION TENTANG -->
      <section id="tentang" class="space-y-8 pt-6">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-xs font-bold text-amber-400 tracking-widest uppercase">Latar Belakang</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-black text-white uppercase tracking-tight">TENTANG SAYA</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3 backdrop-blur-md">
            <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-lg">🎨</div>
            <h4 class="font-bold text-white uppercase text-sm tracking-wide">UI/UX Enthusiast</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Memperhatikan detail kecil tata letak, estetika warna, dan kenyamanan pengguna saat bernavigasi di web.</p>
          </div>
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3 backdrop-blur-md">
            <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-lg">🚀</div>
            <h4 class="font-bold text-white uppercase text-sm tracking-wide">Always Learning</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Selalu mengikuti perkembangan teknologi frontend terbaru seperti Vue 3 Composition API, Vite, dan Tailwind.</p>
          </div>
        </div>
      </section>

      <!-- SECTION KEAHLIAN (SKILLS) -->
      <section id="keahlian" class="space-y-8 pt-6">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-xs font-bold text-amber-400 tracking-widest uppercase">Kompetensi</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-black text-white uppercase tracking-tight">Keahlian & Teknologi</h3>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="skill in skills" :key="skill.name" class="bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all rounded-2xl p-5 text-center space-y-2 shadow-lg group">
            <div class="text-3xl group-hover:scale-110 transition-transform">{{ skill.icon }}</div>
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ skill.name }}</h4>
            <span class="text-[10px] text-amber-400 font-semibold block">{{ skill.level }}</span>
          </div>
        </div>
      </section>

      <!-- SECTION PROYEK -->
      <section id="proyek" class="space-y-8 pt-6">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-xs font-bold text-amber-400 tracking-widest uppercase">Portofolio</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-black text-white uppercase tracking-tight">Proyek Unggulan</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="project in projects" :key="project.title" class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6 backdrop-blur-md hover:border-slate-700 transition-all">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-full">{{ project.category }}</span>
                <span class="text-xs text-slate-500">{{ project.year }}</span>
              </div>
              <h4 class="text-lg font-bold text-white">{{ project.title }}</h4>
              <p class="text-xs text-slate-400 leading-relaxed">{{ project.desc }}</p>
            </div>
            
            <div class="space-y-4 pt-4 border-t border-slate-800/80">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in project.tags" :key="tag" class="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/60 font-medium">
                  {{ tag }}
                </span>
              </div>
              <a :href="project.link" target="_blank" class="block w-full text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 py-2.5 rounded-xl transition-colors uppercase tracking-wider shadow-md">
                Lihat Demo ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION PENCAPAIAN & UPLOAD FOTO -->
      <section id="pencapaian" class="space-y-8 pt-6">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <h2 class="text-xs font-bold text-amber-400 tracking-widest uppercase">Penghargaan & Sertifikat</h2>
          <h3 class="text-3xl sm:text-4xl font-serif font-black text-white uppercase tracking-tight">Pencapaian Saya</h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Form Upload Foto Pencapaian -->
          <div class="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3 flex items-center gap-2">
              <span>🏆</span> Tambah Pencapaian Baru
            </h4>
            <div class="space-y-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Judul Penghargaan</label>
                <input v-model="newAchievement.title" type="text" placeholder="Contoh: Juara 1 UI/UX Hackathon..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tahun / Tanggal</label>
                <input v-model="newAchievement.year" type="text" placeholder="Contoh: 2026" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Upload Foto / Sertifikat</label>
                <input type="file" @change="handleImageUpload" accept="image/*" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-amber-400 file:text-slate-950 hover:file:bg-amber-500 cursor-pointer">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Deskripsi Singkat</label>
                <textarea v-model="newAchievement.desc" rows="2" placeholder="Ceritakan sedikit tentang penghargaan ini..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"></textarea>
              </div>
              <button @click="addAchievement" class="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/10">
                Unggah Pencapaian ➔
              </button>
            </div>
          </div>

          <!-- Daftar Kartu Pencapaian / Galeri -->
          <div class="lg:col-span-7 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">Galeri Penghargaan & Sertifikat</h4>
            
            <div v-if="achievements.length === 0" class="bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-8 text-center text-slate-500 text-xs">
              Belum ada pencapaian yang diunggah. Silakan isi form di samping untuk menambahkan!
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(item, index) in achievements" :key="index" class="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group">
                <div>
                  <div class="h-40 w-full bg-slate-950 overflow-hidden relative">
                    <img :src="item.image" alt="Sertifikat" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <span class="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-800">
                      {{ item.year }}
                    </span>
                  </div>
                  <div class="p-4 space-y-1.5">
                    <h5 class="font-bold text-white text-sm">{{ item.title }}</h5>
                    <p class="text-[11px] text-slate-400 leading-relaxed">{{ item.desc }}</p>
                  </div>
                </div>
                <div class="p-4 pt-0">
                  <button @click="removeAchievement(index)" class="w-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 py-1.5 rounded-xl text-[10px] font-bold uppercase transition-colors">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION KONTAK -->
      <section id="kontak" class="space-y-8 pt-6">
        <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-4">
            <h2 class="text-xs font-bold text-amber-400 tracking-widest uppercase">Mari Terhubung</h2>
            <h3 class="text-3xl sm:text-4xl font-serif font-black text-white uppercase tracking-tight">Punya Proyek atau Pertanyaan?</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Saya selalu terbuka untuk diskusi, tawaran kerja sama, maupun proyek freelance baru. Jangan ragu untuk mengirimkan pesan kepada saya!
            </p>
            <div class="space-y-2 pt-2 text-xs text-slate-300">
              <p class="flex items-center gap-3">📧 <span class="font-semibold text-white">cibilkanzi5@gmail.com</span></p>
              <p class="flex items-center gap-3">📱 <span class="font-semibold text-white">+62 821-2024-3273</span></p>
              <p class="flex items-center gap-3">📍 <span class="font-semibold text-white">Bandung, Jawa Barat</span></p>
            </div>
          </div>

          <!-- Form Kontak Sederhana -->
          <div class="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-inner">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">Kirim Pesan Langsung</h4>
            <div class="space-y-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama Anda..." class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Anda</label>
                <input type="email" placeholder="nama@email.com..." class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors">
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pesan</label>
                <textarea rows="3" placeholder="Tuliskan pesan atau detail proyek..." class="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"></textarea>
              </div>
              <button @click="submitPesan" class="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-400/10">
                Kirim Pesan Sekarang ➔
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer class="border-t border-slate-800/80 bg-slate-950 py-6 text-center">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>&copy; 2026 Kanzi Cibil Pratama Putra Mahendra. All rights reserved.</p>
        <div class="flex items-center space-x-4 font-semibold">
          <a href="https://github.com/kanzi444" target="_blank" class="hover:text-amber-400 transition-colors">GitHub</a>
          <a href="https://instagram.com/kancil.pratamaa" @click.prevent="openInstagram('kancil.pratamaa')" class="hover:text-amber-400 transition-colors cursor-pointer">Instagram</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 'Advanced', icon: '🟢' },
        { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
        { name: 'HTML / CSS', level: 'Expert', icon: '🌐' },
        { name: 'Git & GitHub', level: 'Intermediate', icon: '💻' },
        { name: 'Vite', level: 'Intermediate', icon: '🚀' }
      ],
      projects: [
        {
          title: 'Sistem Informasi Perusahaan',
          category: 'Web App',
          year: '2026',
          desc: 'Website company profile interaktif lengkap dengan sistem manajemen data dan layout grid responsif.',
          tags: ['Vue.js', 'Tailwind CSS', 'Vite'],
          link: '#'
        },
        {
          title: 'Dashboard Task Management',
          category: 'Productivity',
          year: '2025',
          desc: 'Aplikasi pencatatan tugas harian dengan fitur state management lokal dan filter kategori interaktif.',
          tags: ['Vue 3', 'JavaScript', 'Tailwind'],
          link: '#'
        },
        {
          title: 'Landing Page UMKM Digital',
          category: 'E-Commerce',
          year: '2025',
          desc: 'Halaman promosi produk lokal dengan galeri modern, katalog produk, dan tombol integrasi WhatsApp.',
          tags: ['Vue.js', 'Responsive Grid', 'UI/UX'],
          link: '#'
        }
      ],
      newAchievement: {
        title: '',
        year: '',
        desc: '',
        image: ''
      },
      achievements: [] // Dikosongkan agar saat web di-refresh, tampilannya bersih tanpa data bawaan
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newAchievement.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addAchievement() {
      if (!this.newAchievement.title || !this.newAchievement.image) {
        alert('Mohon isi judul penghargaan dan unggah foto terlebih dahulu!');
        return;
      }
      this.achievements.unshift({ ...this.newAchievement });
      // Reset form
      this.newAchievement.title = '';
      this.newAchievement.year = '';
      this.newAchievement.desc = '';
      this.newAchievement.image = '';
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
      alert('Pencapaian berhasil diunggah!');
    },
    removeAchievement(index) {
      this.achievements.splice(index, 1);
    },
    openInstagram(username) {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        window.location.href = `instagram://user?username=${username}`;
        setTimeout(() => {
          window.open(`https://instagram.com/${username}`, '_blank');
        }, 500);
      } else {
        window.open(`https://instagram.com/${username}`, '_blank');
      }
    },
    submitPesan() {
      alert('Terima kasih! Pesan Anda berhasil disimulasikan terkirim.');
    }
  }
}
</script>