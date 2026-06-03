<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const signs = [
    'Breakers trip frequently or won\'t reset',
    'Panel is full with no room for new circuits',
    'Lights flicker when large appliances run',
    'Panel is over 30–40 years old',
    'Adding an EV charger, hot tub, or AC',
    'You have a Federal Pacific or Zinsco panel',
  ];

  const included = [
    'City of Calgary electrical permit',
    'Coordination with ENMAX for service disconnect',
    'New breaker panel and service entrance',
    'Circuit reconnection and labeling',
    'City inspection sign-off',
  ];

  const faqs = [
    { q: 'Do I need a permit for a panel upgrade in Calgary?', a: 'Yes. All panel upgrades require a City of Calgary electrical permit. We pull the permit and coordinate the City inspection for you — it\'s included in the job, not an add-on.' },
    { q: 'How long does a panel upgrade take?', a: 'Most upgrades are completed in a single day. Jobs requiring ENMAX to disconnect the service entrance may take slightly longer depending on their availability — we coordinate this for you.' },
    { q: 'Will my power be off during the upgrade?', a: 'Yes, your power will be off for a few hours while the panel is swapped. We work efficiently to minimize downtime — typically 3–5 hours depending on the size of the job.' },
    { q: 'How much does a panel upgrade cost in Calgary?', a: 'Most 100A to 200A residential upgrades run between $2,000 and $3,500 including labour, the new panel, permit, and inspection. Older homes with 60A service or panels in difficult locations may be higher. We provide a written quote before any work begins.' },
    { q: 'What size panel does my home need?', a: 'Most Calgary homes benefit from a 200 amp service. If you\'re adding an EV charger, in-floor heating, hot tub, or significant HVAC, 200A gives you the capacity you need without running out of breaker slots. We\'ll assess your current load and recommend the right size.' },
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
  <title>Electrical Panel Upgrade Calgary | FusedBytes Electric</title>
  <meta name="description" content="Electrical panel upgrades in Calgary — 100 amp to 200 amp service upgrades, sub-panel installation, and breaker panel replacement. Permit included. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Electrical Panel Upgrade in Calgary"
  subtitle="From 100A to 200A service upgrades to sub-panel additions — we handle the permit, ENMAX coordination, and City inspection."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">Signs You Need an Upgrade</h2>
        <ul class="space-y-2">
          {#each signs as s}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{s}
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">100A vs 200A Service</h2>
        <p class="text-slate-500 text-sm leading-relaxed mb-3">Homes built in the 1960s–70s often have 60 or 100 amp services — not enough for modern appliances, EV chargers, and air conditioning. A 200 amp upgrade gives your home the capacity it needs and adds resale value.</p>
        <p class="text-slate-500 text-sm leading-relaxed">We handle the full process including the City of Calgary permit and ENMAX reconnect.</p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Sub-Panel Installation</h2>
        <p class="text-slate-500 text-sm leading-relaxed">If your main panel is newer but full, a sub-panel is often the most cost-effective solution. We install sub-panels in garages, basements, and additions to give you the circuits you need without a full panel replacement.</p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">What's Included</h2>
        <ul class="space-y-2">
          {#each included as item}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{item}
            </li>
          {/each}
        </ul>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Panel Upgrade FAQ</h2>
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
      <PopupForm buttonLabel="Get a Panel Upgrade Quote" />
    </div>

  </div>
</section>
