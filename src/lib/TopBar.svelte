<script>
  let mobileOpen = false;
</script>

<nav class="text-white sticky top-0 z-40 shadow-xl border-b border-white/5" style="background-color: #07111F;">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

    <!-- Logo -->
    <a href="/" class="flex items-center shrink-0">
      <img src="/logo.png" alt="FusedBytes Electric — Calgary Electrician" class="h-9 w-auto" />
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">

      <!-- Residential Services dropdown -->
      <div class="group relative">
        <button class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-150 text-sm font-medium">
          Residential Services
          <svg class="w-3.5 h-3.5 text-slate-500 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <!-- Dropdown panel -->
        <div class="absolute hidden group-hover:block top-full left-0 pt-2 w-64">
          <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 overflow-hidden">
            <div class="px-4 pt-2 pb-1.5">
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Services</p>
            </div>
            <a href="/residential_services/panel-upgrade" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Panel Upgrades
            </a>
            <a href="/residential_services/ev-charger" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>EV Charger Installation
            </a>
            <a href="/residential_services/lighting" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Lighting Installation
            </a>
            <a href="/residential_services/bathroom-fans" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Bathroom Fans
            </a>
            <a href="/residential_services/repairs-and-troubleshooting" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Repairs &amp; Troubleshooting
            </a>
            <a href="/residential_services/data-wiring" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Data &amp; Low Voltage Wiring
            </a>
            <a href="/residential_services/renovations" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>Rough-In &amp; Renovations
            </a>
            <div class="border-t border-slate-100 my-1.5 mx-4"></div>
            <a href="/residential_services/aluminum-wiring" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>Aluminum Wiring
            </a>
            <a href="/residential_services/surge-protection" class="flex items-center gap-2.5 px-4 py-2.5 text-slate-700 hover:bg-slate-50 text-sm transition-colors">
              <span class="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>Surge Protection
            </a>
            <div class="border-t border-slate-100 my-1.5 mx-4"></div>
            <a href="/residential_services/emergency" class="flex items-center gap-2.5 px-4 py-2.5 text-red-600 hover:bg-red-50 text-sm font-semibold transition-colors">
              <span class="relative flex">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                <span class="relative w-2 h-2 rounded-full bg-red-500"></span>
              </span>
              Emergency Service
            </a>
          </div>
        </div>
      </div>

      <a href="/pricing" class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-150 text-sm font-medium">
        Pricing
      </a>

      <div class="w-px h-5 bg-white/10 mx-2"></div>

      <a href="tel:xxx-xxx-xxxx" class="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        xxx-xxx-xxxx
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button
      on:click={() => mobileOpen = !mobileOpen}
      class="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-colors"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if mobileOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden border-t border-white/5 px-6 py-5" style="background-color: #0D1B2E;">
      <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">Services</p>
      <div class="space-y-0.5 mb-5">
        <a href="/residential_services/panel-upgrade" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Panel Upgrades</a>
        <a href="/residential_services/ev-charger" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">EV Charger Installation</a>
        <a href="/residential_services/lighting" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Lighting Installation</a>
        <a href="/residential_services/bathroom-fans" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Bathroom Fans</a>
        <a href="/residential_services/repairs-and-troubleshooting" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Repairs &amp; Troubleshooting</a>
        <a href="/residential_services/data-wiring" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Data &amp; Low Voltage Wiring</a>
        <a href="/residential_services/renovations" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Rough-In &amp; Renovations</a>
        <a href="/residential_services/aluminum-wiring" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Aluminum Wiring</a>
        <a href="/residential_services/surge-protection" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Surge Protection</a>
        <a href="/residential_services/emergency" on:click={() => mobileOpen = false} class="flex items-center gap-2 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-white/5 text-sm font-semibold transition-colors">
          <span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>Emergency Service
        </a>
      </div>
      <div class="border-t border-white/5 pt-4 space-y-2">
        <a href="/pricing" on:click={() => mobileOpen = false} class="block px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm transition-colors">Pricing</a>
        <a href="tel:xxx-xxx-xxxx" class="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-4 py-3 rounded-xl text-sm text-center transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call xxx-xxx-xxxx
        </a>
      </div>
    </div>
  {/if}
</nav>
