<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const fixed = [
    { name: 'Bathroom Fan Replacement', desc: 'Replace an existing fan with a new quiet, efficient unit', price: '$500', time: '~2.5 hrs' },
    { name: 'New Bathroom Fan', desc: 'Install a bathroom fan where none existed before', price: '$600', time: '~3.5 hrs' },
    { name: 'Security Camera', desc: 'Wired camera installation per camera', price: '$300', time: '~1 hr each' },
  ];

  const hourly = [
    { name: 'Fix a Light That Isn\'t Working', desc: 'Troubleshoot and repair a non-functioning light fixture', time: '0.5–1 hr' },
    { name: 'Fix a Circuit That Isn\'t Working', desc: 'Diagnose and repair a dead outlet or circuit', time: '~1 hr' },
    { name: 'Install a Light Fixture', desc: 'Swap or upgrade an existing light fixture', time: '~20 min each' },
    { name: 'New Plug or Light Socket', desc: 'Add a new outlet or light box to a room with existing power', time: '1–2 hrs' },
    { name: 'Thermostat Wire', desc: 'Pull new thermostat wiring for your HVAC system', time: '~2 hrs' },
    { name: 'Ethernet Cable', desc: 'Run CAT6/7 Ethernet cable through walls', time: '~2 hrs' },
  ];
</script>

<svelte:head>
  <title>Electrician Pricing Calgary | FusedBytes Electric</title>
  <meta name="description" content="Transparent electrical pricing in Calgary. Fixed-price jobs from $300 and hourly rate of $100/hr. FusedBytes Electric — no hidden fees, upfront quotes." />
</svelte:head>

<PageHeader
  title="Pricing"
  subtitle="Transparent pricing — no surprises. Hourly rate of $100/hr with a half-hour minimum."
/>

<div class="py-16 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto space-y-14">

    <!-- Fixed price -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-black text-slate-900">Fixed-Price Services</h2>
          <p class="text-slate-500 text-sm">Includes parts</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each fixed as item}
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 class="font-bold text-slate-900 mb-2">{item.name}</h3>
            <p class="text-slate-500 text-sm mb-5 leading-relaxed">{item.desc}</p>
            <div class="flex items-end justify-between">
              <span class="text-3xl font-black text-slate-900">{item.price}</span>
              <span class="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1.5 rounded-lg">{item.time}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Hourly rate banner -->
    <div class="bg-yellow-50 border border-yellow-200 rounded-2xl px-6 py-5 flex flex-wrap items-center gap-4">
      <div class="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0">
        <svg class="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <p class="font-bold text-slate-900">Hourly Rate: <span class="text-yellow-700">$100/hr</span></p>
        <p class="text-slate-600 text-sm">Half-hour minimum · Parts billed at cost +10%</p>
      </div>
    </div>

    <!-- Hourly -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-black text-slate-900">Hourly Rate Services</h2>
          <p class="text-slate-500 text-sm">$100/hr · 30 min minimum</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each hourly as item}
          <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start justify-between gap-4">
            <div>
              <h3 class="font-bold text-slate-900 mb-1.5">{item.name}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
            <span class="shrink-0 text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1.5 rounded-lg whitespace-nowrap">{item.time}</span>
          </div>
        {/each}
      </div>
    </div>

  </div>
</div>

<!-- CTA -->
<section class="py-16 px-6 relative overflow-hidden" style="background-color: #FACC15;">
  <div class="absolute inset-0 pointer-events-none opacity-10" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 24px 24px;"></div>
  <div class="relative max-w-3xl mx-auto text-center">
    <h2 class="text-3xl font-black text-slate-900 mb-3">Not Sure What You Need?</h2>
    <p class="text-slate-700 text-lg mb-8">Send us a message and we'll give you a straight answer.</p>
    <PopupForm buttonLabel="Get a Quote" variant="outline-dark" />
  </div>
</section>
