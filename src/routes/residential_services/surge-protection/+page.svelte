<script>
  import PopupForm from '$lib/PopUpForm.svelte';

  const causes = ['Lightning strikes (common in Calgary\'s storm season)', 'ENMAX grid switching and utility fluctuations', 'Large appliances cycling on and off (AC, fridge, furnace)', 'Downed power lines', 'Electrical faults inside your home'];
  const protects = ['Smart TVs, computers, and home theatre systems', 'Refrigerators, dishwashers, and laundry appliances', 'EV chargers and garage door openers', 'Smart home devices and thermostats', 'Furnace control boards (expensive to replace)', 'Security systems and cameras'];

  const faqs = [
    { q: 'How much does whole-home surge protection cost in Calgary?', a: 'Whole-home surge protection installation runs approximately $300–$500 including the device and about an hour of labour. The cost varies by panel type and the SPD unit chosen. We\'ll give you a written quote before we start.' },
    { q: 'Is a whole-home surge protector worth it?', a: 'For most Calgary homes, yes. A single lightning strike or utility surge can destroy a furnace control board ($500–$1,500 to replace), a smart TV, or a refrigerator. The whole-home SPD costs a few hundred dollars and protects every circuit — including hardwired appliances a power bar can never reach.' },
    { q: 'Does a whole-home surge protector replace power bars?', a: 'It works alongside them, not instead of them. The whole-home SPD at your panel stops large surges from entering your home at all. Point-of-use power bars with surge protection add a second layer for sensitive electronics like computers and home theatre equipment. Both together give you the best protection.' },
    { q: 'How is a whole-home surge protector installed?', a: 'It installs directly at your main electrical panel — either as a breaker-style unit that snaps into a breaker slot, or a hardwired unit that connects to the panel lugs. Installation takes about an hour. An indicator light on the unit confirms it\'s active and working.' },
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
  <title>Whole Home Surge Protection Calgary | FusedBytes Electric</title>
  <meta name="description" content="Whole home surge protection in Calgary — one device at your panel protects every circuit. Guards appliances, EV chargers, and electronics from surges. Same-week booking." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="bg-slate-900 text-white py-14 px-6">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-black">Whole Home Surge Protection in Calgary</h1>
    <p class="text-slate-400 text-lg mt-3">One device at your panel protects every circuit in your home — including hardwired appliances no power bar can reach.</p>
  </div>
</div>

<section class="py-14 px-6 bg-slate-50">
  <div class="max-w-5xl mx-auto">

    <div class="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm mb-6">
      <h2 class="font-bold text-slate-900 text-lg mb-3">Why Not Just Use Power Bars?</h2>
      <p class="text-slate-600 text-sm leading-relaxed">Power bars only protect devices plugged into them. Surges enter your home through every circuit — the furnace, AC, range, and lighting are completely unprotected. A whole-home SPD (surge protective device) installs at your main panel and blocks surges before they reach any outlet or hardwired appliance.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">What Causes Surges in Calgary?</h2>
        <ul class="space-y-2">
          {#each causes as c}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{c}
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">What It Protects</h2>
        <ul class="space-y-2">
          {#each protects as p}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{p}
            </li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-2">Fast Installation — About 1 Hour</h2>
        <p class="text-slate-500 text-sm leading-relaxed">We install a breaker-style or hardwired SPD at your main panel. An indicator light lets you know it's active and working. Most jobs are booked within the same week and completed in about an hour.</p>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Surge Protection FAQ</h2>
      <div class="space-y-3">
        {#each faqs as faq, i}
          <div class="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
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
      <PopupForm buttonLabel="Book Surge Protector Installation" />
    </div>

  </div>
</section>
