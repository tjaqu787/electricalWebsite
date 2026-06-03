<script>
  import PopupForm from '$lib/PopUpForm.svelte';

  const compatible = ['Tesla Model 3, Y, S, X, Cybertruck', 'Ford F-150 Lightning, Mustang Mach-E', 'Chevrolet, GMC, Cadillac EVs', 'Hyundai IONIQ, Kia EV6', 'BMW, Mercedes, VW, Rivian', 'All J1772 compatible vehicles'];
  const installed = ['Dedicated 240V circuit from your panel', '40A or 50A breaker as required', 'Hardwired EVSE or NEMA 14-50 outlet', 'Garage, carport, or outdoor installations'];

  const faqs = [
    { q: 'Do I need a permit for EV charger installation in Calgary?', a: 'Yes. A Level 2 EV charger requires a new dedicated 240V circuit, which requires an electrical permit from the City of Calgary. We pull the permit and handle the inspection for you — it\'s included in the job.' },
    { q: 'How long does EV charger installation take?', a: 'Most installations take 2–4 hours. A straightforward job — short cable run, panel has capacity — is typically done in 2 hours. If the run is longer, conduit is needed, or we discover the panel needs work, it takes longer. We\'ll give you an accurate estimate after seeing your setup.' },
    { q: 'Do I need to upgrade my electrical panel for an EV charger?', a: 'Only if your panel doesn\'t have a free 40–50 amp slot. We assess your panel during the quote at no charge. If an upgrade is needed, we\'ll tell you the cost before you commit to anything.' },
    { q: 'Can I install my own EV charger in Alberta?', a: 'Homeowners can do some electrical work in their primary residence in Alberta, but a Level 2 charger requires running new 240V wiring — work that must be permitted and inspected. Most EV charger warranties also require professional installation. We recommend using a licensed electrician.' },
    { q: 'What EV charger brand do you recommend?', a: 'For most Calgary homeowners we recommend the Grizzl-E (Canadian-made, built for cold winters), ChargePoint Home Flex (adjustable amperage, great app), or Emporia Energy (smart monitoring, excellent value). Tesla owners can also use the Tesla Wall Connector. We\'re happy to advise based on your vehicle and usage.' },
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
  <title>EV Charger Installation Calgary | FusedBytes Electric</title>
  <meta name="description" content="Level 2 EV charger installation in Calgary for all makes — Tesla, Ford, GM, Hyundai, and more. Licensed Calgary electricians. Permit included. Book online." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="bg-slate-900 text-white py-14 px-6">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-black">EV Charger Installation in Calgary</h1>
    <p class="text-slate-400 text-lg mt-3">Level 2 home charging for every electric vehicle — charge overnight and wake up to a full battery.</p>
  </div>
</div>

<section class="py-14 px-6 bg-slate-50">
  <div class="max-w-5xl mx-auto">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Level 1 vs. Level 2 Charging</h2>
        <div class="space-y-3 text-sm">
          <div class="p-3 bg-slate-50 rounded-xl">
            <p class="font-semibold text-slate-800 mb-1">Level 1 — 120V standard outlet</p>
            <p class="text-slate-500">Adds ~6–8 km/hr of range. Fine for plug-in hybrids, too slow for full EVs.</p>
          </div>
          <div class="p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p class="font-semibold text-slate-800 mb-1">Level 2 — 240V dedicated circuit ✓</p>
            <p class="text-slate-500">Adds 30–50 km/hr. Most EVs fully charge overnight. This is what we install.</p>
          </div>
        </div>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">What We Install</h2>
        <ul class="space-y-2">
          {#each installed as item}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Do You Need a Panel Upgrade First?</h2>
        <p class="text-slate-500 text-sm leading-relaxed mb-4">A Level 2 charger needs a dedicated 40–50A circuit. If your panel is full or only 100A, you may need an upgrade first. We assess your panel during the quote at no charge.</p>
        <a href="/residential_services/panel-upgrade" class="text-sm font-semibold text-yellow-600 hover:underline">Learn about panel upgrades →</a>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">Compatible With All EVs</h2>
        <ul class="space-y-1.5">
          {#each compatible as c}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{c}
            </li>
          {/each}
        </ul>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">EV Charger Installation FAQ</h2>
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
      <PopupForm buttonLabel="Book an EV Charger Install" />
    </div>

  </div>
</section>
