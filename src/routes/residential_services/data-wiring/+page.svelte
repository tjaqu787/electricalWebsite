<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const services = [
    { name: 'Ethernet (CAT6/CAT7)', desc: 'Hard-wired internet for gaming setups, home offices, and smart TVs. CAT6 and CAT7 installation with wall plates and network testing for optimal performance.' },
    { name: 'Wi-Fi Mesh Networking', desc: 'Eliminate dead zones by running Ethernet to strategic locations for Wi-Fi access points. We configure switches and ensure seamless roaming throughout your home.' },
    { name: 'Security Cameras', desc: 'Wired HD security camera installation with recording setup and mobile app integration. We run cables cleanly through walls and attics for a professional finish.' },
    { name: 'Thermostat Wiring', desc: 'Older homes often lack the C-wire needed for modern smart thermostats. We pull new thermostat wire and ensure your HVAC control system works reliably.' },
  ];

  const faqs = [
    { q: 'How much does Ethernet installation cost in Calgary?', a: 'Ethernet installation is billed at $100/hour. A single room run typically takes 1–2 hours depending on cable routing. A whole-home setup with multiple drops takes longer and we\'ll quote based on the number of locations and routing complexity.' },
    { q: 'Is it worth running wired Ethernet in your house?', a: 'Yes — wired Ethernet is significantly faster and more reliable than Wi-Fi, especially for gaming, video calls, and streaming 4K. It also reduces wireless interference. Hard-wired connections can\'t drop mid-stream or get congested by neighbours\' networks.' },
    { q: 'What\'s the difference between CAT6 and CAT7?', a: 'CAT6 supports up to 10 Gbps at 55 metres and is the standard for home use. CAT7 supports up to 10 Gbps at 100 metres with better shielding against interference. For most home runs, CAT6 is sufficient — CAT7 is worth it for longer runs or high-interference environments.' },
    { q: 'Do I need a permit for data or low-voltage wiring in Calgary?', a: 'Low-voltage work (data cables, security cameras, thermostats) does not require an electrical permit in most cases, as it runs on 12V or less. However, if you need a new 120V outlet added to power network equipment, that requires a permit. We\'ll advise on what applies to your job.' },
    { q: 'Can you install security cameras at the same time as Ethernet?', a: 'Yes — and this is the most efficient approach. We can run both Ethernet and camera cables in the same visit, routing them cleanly through walls and attics for a professional finish. Wired cameras are more reliable than wireless and don\'t depend on your Wi-Fi signal.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  let openFaq = -1;
  function toggleFaq(i) { openFaq = openFaq === i ? -1 : i; }
</script>

<svelte:head>
  <title>Ethernet & Low Voltage Wiring Calgary | FusedBytes Electric</title>
  <meta name="description" content="Ethernet, security camera, thermostat, and low voltage wiring in Calgary. CAT6/7 installation, Wi-Fi mesh runs, and wired camera setups. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Data & Low Voltage Wiring in Calgary"
  subtitle="Hard-wired internet, cameras, thermostats, and networking — clean installs with no exposed cables."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {#each services as s}
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 class="font-bold text-slate-900 text-lg mb-2">{s.name}</h2>
          <p class="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
        </div>
      {/each}
    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Data Wiring FAQ</h2>
      <div class="space-y-3">
        {#each faqs as faq, i}
          <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <button
              class="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              on:click={() => toggleFaq(i)}
            >
              <span class="font-semibold text-slate-900 pr-4">{faq.q}</span>
              <svg class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if openFaq === i}
              <div class="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <div class="text-center">
      <a href="/pricing" class="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm mr-4">View Pricing</a>
      <PopupForm buttonLabel="Get a Quote" />
    </div>
  </div>
</section>
