<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
    
    <div class="fixed top-4 right-4 z-50 flex gap-2">
      <router-link to="/admin" class="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-200 text-sm font-medium rounded-full shadow-lg hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300">
        <span>🔒</span>
        <span>Panel Admin</span>
      </router-link>
    </div>

    <header class="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
      <div class="w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20 shrink-0">
        <div class="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-4xl font-bold text-cyan-400">
          KP
        </div>
      </div>
      <div>
        <div class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/50 border border-cyan-800/50 rounded-full">
          Frontend Developer & Tech Enthusiast
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Hai, Saya <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kanzi Pratama</span>
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl leading-relaxed">
          Membangun antarmuka web yang modern, interaktif, dan responsif menggunakan teknologi terkini seperti Vue.js dan Tailwind CSS.
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 space-y-20 pb-24">

      <section class="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl">
        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span class="w-2 h-8 bg-cyan-500 rounded-full"></span>
          Tentang Saya
        </h2>
        <p class="text-slate-300 leading-relaxed text-base">
            Halo semuanya ,perkenalkan nama saya adalah Kanzi Pratama Putra Mahendra dan biasa di panggil kanzi atau cibil , saya adalah seorang mahasiswa yang sedang menempuh pendidikan di sekolah SMK YADIKA SOREANG dengan jurusan Rekayasa Perangkat Lunak (RPL) , saya memiliki ketertarikan di bidang teknlogi terutama di bidang pengembangan web dan desain antarmuka pengguna. Saya senang belajar hal-hal baru, terutama yang berkaitan dengan pemrograman dan teknologi web. Selain itu, saya juga selalu mengikuti kegiatan di sekolah dan berusaha untuk mengembangkan keterampilan saya di bidang ini. Saya percaya bahwa dengan kerja keras dan dedikasi, saya dapat mencapai tujuan saya dalam dunia teknologi.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-2 h-8 bg-cyan-500 rounded-full"></span>
          Keahlian & Teknologi
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div v-for="(skill, index) in skills" :key="index" class="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl text-center hover:border-cyan-500/50 transition-all duration-300 group">
            <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">{{ skill.icon }}</div>
            <div class="font-medium text-slate-200 text-sm">{{ skill.name }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ skill.level }}</div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-2 h-8 bg-blue-500 rounded-full"></span>
          Proyek Pilihan
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index" class="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-900/50">{{ project.category }}</span>
                <span class="text-xs text-slate-500">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">{{ project.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ project.desc }}</p>
            </div>
            <div>
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="(tag, tIdx) in project.tags" :key="tIdx" class="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  {{ tag }}
                </span>
              </div>
              <a :href="project.link" class="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                Lihat Detail &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 class="text-2xl font-bold text-white flex items-center gap-3">
            <span class="w-2 h-8 bg-emerald-500 rounded-full"></span>
            Pencapaian & Sertifikat
          </h2>
        </div>

        <div class="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl mb-8">
          <h3 class="text-md font-semibold text-slate-200 mb-4">Tambah Pencapaian Baru</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input v-model="newAchievement.title" type="text" placeholder="Judul Penghargaan / Sertifikat" class="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500">
            <input v-model="newAchievement.year" type="text" placeholder="Tahun (Contoh: 2026)" class="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500">
          </div>
          <div class="mb-4">
            <textarea v-model="newAchievement.desc" rows="2" placeholder="Deskripsi singkat pencapaian..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"></textarea>
          </div>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <input ref="fileInputRef" type="file" @change="handleImageUpload" accept="image/*" class="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-cyan-400 hover:file:bg-slate-700 cursor-pointer">
            
            <button type="button" @click="openPasswordModal('upload')" class="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition shadow-lg shadow-emerald-900/25 cursor-pointer">
              Upload Pencapaian
            </button>
          </div>
        </div>

        <div v-if="achievements.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(item, index) in achievements" :key="index" class="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group">
            <div v-if="item.image" class="h-48 overflow-hidden bg-slate-950 relative cursor-pointer" @click="openFullscreen(item.image, item.title)">
              <img :src="item.image" alt="Sertifikat" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-medium text-white gap-1.5">
                🔍 Klik untuk memperbesar
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-xs text-emerald-400 font-semibold">{{ item.year }}</span>
                <button @click="openPasswordModal('delete', index)" class="text-xs text-rose-400 hover:text-rose-300 cursor-pointer">Hapus</button>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">{{ item.title }}</h4>
              <p class="text-slate-400 text-sm">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-10 text-slate-500 text-sm border border-dashed border-slate-800 rounded-2xl">
          Belum ada pencapaian yang diunggah. Silakan tambahkan melalui form di atas.
        </div>
      </section>

      <section class="bg-gradient-to-b from-slate-900/80 to-slate-900/30 border border-slate-800 rounded-2xl p-8 md:p-12">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-white mb-3">Mari Terhubung</h2>
          <p class="text-slate-400 text-sm mb-6">Punya pertanyaan atau ingin berkolaborasi? Kirim pesan langsung, dan pesan akan masuk ke inbox panel admin.</p>
          
          <form @submit.prevent="kirimPesanKeAdmin" class="space-y-4 text-left">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1">Nama Anda</label>
                <input v-model="formContact.name" type="text" placeholder="Masukkan nama..." required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition">
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-400 mb-1">Email Anda</label>
                <input v-model="formContact.email" type="email" placeholder="nama@email.com" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition">
              </div>
            </div>
            <div>
              <label class="block text-xs font-medium text-slate-400 mb-1">Pesan</label>
              <textarea v-model="formContact.message" rows="4" placeholder="Tulis pesan Anda di sini..." required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"></textarea>
            </div>
            <button type="submit" class="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold rounded-xl hover:opacity-90 transition cursor-pointer">
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>
      </section>

    </main>

    <div v-if="showPasswordModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div class="bg-slate-900 border border-slate-800 p-6 rounded-2xl w-full max-w-md shadow-2xl">
        <h3 class="text-lg font-bold text-white mb-2">🔐 Verifikasi Pemilik Web</h3>
        <p class="text-slate-400 text-sm mb-4">Masukkan password rahasia untuk melanjutkan tindakan ini.</p>
        
        <input v-model="inputPassword" type="password" placeholder="Masukkan password..." @keyup.enter="verifyPassword" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 mb-6">
        
        <div class="flex justify-end gap-3">
          <button @click="showPasswordModal = false" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-xl transition cursor-pointer">
            Batal
          </button>
          <button @click="verifyPassword" class="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-xl transition cursor-pointer">
            Konfirmasi
          </button>
        </div>
      </div>
    </div>

    <div v-if="fullscreenImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md" @click="fullscreenImage = null">
      <div class="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" @click.stop>
        <button @click="fullscreenImage = null" class="absolute -top-12 right-0 text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer">
          ✕ Tutup
        </button>
        <img :src="fullscreenImage" alt="Fullscreen Preview" class="max-w-full max-h-[80vh] object-contain rounded-xl border border-slate-800 shadow-2xl">
        <p v-if="fullscreenTitle" class="mt-4 text-white text-base font-semibold">{{ fullscreenTitle }}</p>
      </div>
    </div>

    <footer class="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
      <p>&copy; 2026 Kanzi Pratama. Dibangun dengan Vue.js & Tailwind CSS.</p>
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
          desc: 'Halaman promosi produk lokal dengan galeri modern, katalog produk, dan tombol interaktif.',
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
      achievements: [],
      formContact: {
        name: '',
        email: '',
        message: ''
      },
      
      // State untuk Modal Password
      showPasswordModal: false,
      inputPassword: '',
      pendingAction: null,
      targetIndex: null,

      // State untuk Fullscreen Foto
      fullscreenImage: null,
      fullscreenTitle: ''
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
    openPasswordModal(action, index = null) {
      this.pendingAction = action;
      this.targetIndex = index;
      this.inputPassword = '';
      this.showPasswordModal = true;
    },
    verifyPassword() {
      const SECRET_PASSWORD = "kanzipratama123";

      if (this.inputPassword !== SECRET_PASSWORD) {
        alert("Akses ditolak! Password salah.");
        return;
      }

      this.showPasswordModal = false;

      if (this.pendingAction === 'upload') {
        this.executeUpload();
      } else if (this.pendingAction === 'delete') {
        this.executeDelete();
      }
    },
    executeUpload() {
      if (!this.newAchievement.title || !this.newAchievement.image) {
        alert('Mohon isi judul penghargaan dan pilih file foto terlebih dahulu!');
        return;
      }
      
      this.achievements.unshift({ ...this.newAchievement });
      
      this.newAchievement.title = '';
      this.newAchievement.year = '';
      this.newAchievement.desc = '';
      this.newAchievement.image = '';
      if (this.$refs.fileInputRef) {
        this.$refs.fileInputRef.value = '';
      }
      
      alert('Pencapaian berhasil diunggah!');
    },
    executeDelete() {
      if (this.targetIndex !== null) {
        this.achievements.splice(this.targetIndex, 1);
        alert('Pencapaian berhasil dihapus.');
      }
    },
    openFullscreen(imageSrc, title) {
      this.fullscreenImage = imageSrc;
      this.fullscreenTitle = title;
    },
    kirimPesanKeAdmin() {
      if (!this.formContact.name || !this.formContact.message) {
        alert('Mohon isi nama dan pesan terlebih dahulu!');
        return;
      }

      // Ambil daftar pesan lama dari localStorage (jika ada)
      let inbox = JSON.parse(localStorage.getItem('adminInboxMessages')) || [];
      
      // Tambahkan pesan baru lengkap dengan tanggal/waktu pengiriman
      const pesanBaru = {
        name: this.formContact.name,
        email: this.formContact.email || 'Tidak diisi',
        message: this.formContact.message,
        date: new Date().toLocaleString('id-ID')
      };

      inbox.unshift(pesanBaru);

      // Simpan kembali ke localStorage agar bisa dibaca di Panel Admin
      localStorage.setItem('adminInboxMessages', JSON.stringify(inbox));

      alert(`Terima kasih, ${this.formContact.name}! Pesan Anda berhasil dikirim ke inbox panel admin.`);
      
      // Reset form
      this.formContact.name = '';
      this.formContact.email = '';
      this.formContact.message = '';
    }
  }
}
</script>