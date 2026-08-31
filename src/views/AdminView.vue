<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-10 flex flex-col justify-center items-center">
    
    <!-- KONDISI 1: JIKA BELUM LOGIN -->
    <div v-if="!isAdminLoggedIn" class="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
      <div class="text-center mb-6">
        <span class="text-3xl">🔐</span>
        <h1 class="text-2xl font-bold text-white mt-2">Autentikasi Admin</h1>
        <p class="text-slate-400 text-sm mt-1">Masukkan password rahasia untuk mengakses panel kontrol.</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <input v-model="loginPassword" type="password" placeholder="Masukkan password admin..." class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition">
        </div>
        <button type="submit" class="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm rounded-xl transition cursor-pointer">
          Masuk ke Panel Admin
        </button>
      </form>

      <div class="mt-6 text-center">
        <router-link to="/" class="text-xs text-slate-500 hover:text-slate-400 transition">
          &larr; Kembali ke Website Utama
        </router-link>
      </div>
    </div>

    <!-- KONDISI 2: JIKA SUDAH LOGIN -->
    <div v-else class="w-full max-w-5xl mx-auto space-y-8">
      
      <!-- Header Admin -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-900 gap-4">
        <div>
          <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full">
            Keamanan Terproteksi
          </span>
          <h1 class="text-3xl font-extrabold text-white mt-2">Panel Kontrol Admin</h1>
        </div>
        <div class="flex items-center gap-3">
          <router-link to="/" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-medium rounded-xl transition">
            Kembali ke Website
          </router-link>
          <button @click="logout" class="px-4 py-2 bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 text-sm font-medium rounded-xl transition cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      <!-- Status Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <div class="text-xs text-slate-400 mb-1">Status Sistem</div>
          <div class="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Aktif & Terproteksi (Online Sync)
          </div>
        </div>
        <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <div class="text-xs text-slate-400 mb-1">Akses Pemilik</div>
          <div class="text-lg font-bold text-white">Kanzi Pratama</div>
        </div>
        <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex justify-between items-center">
          <div>
            <div class="text-xs text-slate-400 mb-1">Total Pesan Masuk</div>
            <div class="text-2xl font-bold text-cyan-400">{{ messages.length }} Pesan</div>
          </div>
          <button @click="loadMessages" class="px-3 py-1.5 bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 text-xs font-medium rounded-lg transition cursor-pointer">
            🔄 Refresh Inbox
          </button>
        </div>
      </div>

      <!-- Kotak Masuk Pesan Pengunjung -->
      <section class="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
        <h2 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span>📥</span> Kotak Masuk Pesan Pengunjung
        </h2>
        <p class="text-slate-400 text-sm mb-6">Daftar pesan dari pengunjung yang masuk secara real-time dari perangkat mana pun.</p>

        <!-- Daftar Pesan -->
        <div v-if="messages.length > 0" class="space-y-4">
          <div v-for="(msg, index) in messages" :key="msg.id || index" class="bg-slate-950 border border-slate-800/80 p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-3">
                <h3 class="font-bold text-white text-base">{{ msg.name }}</h3>
                <span class="text-xs text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">{{ msg.email }}</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed mt-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">{{ msg.message }}</p>
              <div class="text-[11px] text-slate-500 pt-1">Dikirim pada: {{ msg.date }}</div>
            </div>
            <button @click="deleteMessage(msg.id)" class="self-end md:self-center px-3 py-1.5 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/50 text-rose-400 text-xs font-medium rounded-lg transition cursor-pointer shrink-0">
              Hapus Pesan
            </button>
          </div>
        </div>

        <!-- Jika Belum Ada Pesan -->
        <div v-else class="text-center py-12 border border-dashed border-slate-800 rounded-xl text-slate-500 text-sm">
          Belum ada pesan baru. Coba kirim pesan melalui HP atau perangkat lain!
        </div>
      </section>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AdminView',
  data() {
    return {
      isAdminLoggedIn: false,
      loginPassword: '',
      messages: []
    }
  },
  mounted() {
    const sessionStatus = sessionStorage.getItem('kanziAdminAuth');
    if (sessionStatus === 'true') {
      this.isAdminLoggedIn = true;
      this.loadMessages();
    }
  },
  methods: {
    handleLogin() {
      const SECRET_ADMIN_PASSWORD = "kanzipratama123";

      if (this.loginPassword !== SECRET_ADMIN_PASSWORD) {
        alert("Password salah! Akses ditolak.");
        this.loginPassword = '';
        return;
      }

      sessionStorage.setItem('kanziAdminAuth', 'true');
      this.isAdminLoggedIn = true;
      this.loadMessages();
    },
    logout() {
      sessionStorage.removeItem('kanziAdminAuth');
      this.isAdminLoggedIn = false;
      this.loginPassword = '';
    },
    async loadMessages() {
      try {
        const response = await fetch('https://65a083f86017290bbc78db34.mockapi.io/api/v1/messages');
        if (response.ok) {
          const data = await response.json();
          this.messages = data.reverse(); // Urutkan dari yang terbaru
        }
      } catch (error) {
        // Fallback lokal jika offline
        const saved = localStorage.getItem('adminInboxMessages');
        if (saved) this.messages = JSON.parse(saved);
      }
    },
    async deleteMessage(id) {
      if (confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
        if (id) {
          try {
            await fetch(`https://65a083f86017290bbc78db34.mockapi.io/api/v1/messages/${id}`, {
              method: 'DELETE'
            });
          } catch (e) {
            console.error(e);
          }
        }
        this.loadMessages();
      }
    }
  }
}
</script>
