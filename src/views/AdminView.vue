<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-10">
    
    <!-- Header Admin -->
    <div class="max-w-5xl mx-auto flex justify-between items-center mb-10 pb-6 border-b border-slate-900">
      <div>
        <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full">
          Keamanan Terproteksi
        </span>
        <h1 class="text-3xl font-extrabold text-white mt-2">Panel Kontrol Admin</h1>
      </div>
      <router-link to="/" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-medium rounded-xl transition">
        &larr; Kembali ke Website
      </router-link>
    </div>

    <!-- Main Dashboard Container -->
    <main class="max-w-5xl mx-auto space-y-8">

      <!-- Status Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <div class="text-xs text-slate-400 mb-1">Status Sistem</div>
          <div class="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Aktif & Terhubung
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
          <button v-if="messages.length > 0" @click="clearMessages" class="px-3 py-1.5 bg-rose-950/50 hover:bg-rose-900/50 border border-rose-800/60 text-rose-300 text-xs font-medium rounded-lg transition cursor-pointer">
            Hapus Semua
          </button>
        </div>
      </div>

      <!-- Kotak Masuk Pesan Pengunjung -->
      <section class="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
        <h2 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <span>📥</span> Kotak Masuk Pesan Pengunjung
        </h2>
        <p class="text-slate-400 text-sm mb-6">Daftar pesan yang dikirimkan oleh pengunjung melalui form "Mari Terhubung" di website utama.</p>

        <!-- Daftar Pesan -->
        <div v-if="messages.length > 0" class="space-y-4">
          <div v-for="(msg, index) in messages" :key="index" class="bg-slate-950 border border-slate-800/80 p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-3">
                <h3 class="font-bold text-white text-base">{{ msg.name }}</h3>
                <span class="text-xs text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">{{ msg.email }}</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed mt-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">{{ msg.message }}</p>
              <div class="text-[11px] text-slate-500 pt-1">Dikirim pada: {{ msg.date }}</div>
            </div>
            <button @click="deleteMessage(index)" class="self-end md:self-center px-3 py-1.5 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/50 text-rose-400 text-xs font-medium rounded-lg transition cursor-pointer shrink-0">
              Hapus Pesan
            </button>
          </div>
        </div>

        <!-- Jika Belum Ada Pesan -->
        <div v-else class="text-center py-12 border border-dashed border-slate-800 rounded-xl text-slate-500 text-sm">
          Belum ada pesan baru tersimpan di memori lokal saat ini. Coba kirim pesan melalui halaman utama!
        </div>
      </section>

    </main>

  </div>
</template>

<script>
export default {
  name: 'AdminView',
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    this.loadMessages();
  },
  methods: {
    loadMessages() {
      // Mengambil data pesan dari localStorage browser
      const savedMessages = localStorage.getItem('adminInboxMessages');
      if (savedMessages) {
        this.messages = JSON.parse(savedMessages);
      }
    },
    deleteMessage(index) {
      if (confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
        this.messages.splice(index, 1);
        localStorage.setItem('adminInboxMessages', JSON.stringify(this.messages));
      }
    },
    clearMessages() {
      if (confirm("Apakah Anda yakin ingin menghapus seluruh pesan masuk?")) {
        this.messages = [];
        localStorage.removeItem('adminInboxMessages');
      }
    }
  }
}
</script>