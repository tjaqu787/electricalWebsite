<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const faqs = [
    { q: 'Do I need a permit to install a bathroom fan in Alberta?', a: 'Replacing an existing fan (same location, same wiring) does not require a permit. Installing a brand-new fan where none existed before does — it requires new wiring and a City of Calgary electrical permit. We handle the permit on new installations.' },
    { q: 'How often should a bathroom fan be replaced?', a: 'Most bathroom fans last 10–15 years. Signs it\'s time to replace: grinding or rattling noise, weak airflow that no longer clears steam, or a fan that\'s stopped working entirely. Newer models are significantly quieter and more efficient.' },
    { q: 'What size bathroom fan do I need?', a: 'Bathroom fans are rated in CFM (cubic feet per minute). The standard rule is 1 CFM per square foot of bathroom floor space, with a minimum of 50 CFM for any bathroom. For bathrooms with separate toilet enclosures or high ceilings, go higher. We\'ll recommend the right unit for your space.' },
    { q: 'Can I install a bathroom fan myself in Alberta?', a: 'Replacing an existing fan (same wiring, same location) is something Alberta homeowners can technically do in their primary residence. However, if the fan needs new wiring or a new duct run, a licensed electrician is required. Given the tight ceiling access and wiring involved, most homeowners find it easier to just hire a pro.' },
    { q: 'Why does my new bathroom fan still have condensation problems?', a: 'The most common cause is improper exterior venting — the duct terminates in the attic rather than exhausting outside. This causes moisture to accumulate in the attic, leading to mould and frost in winter. We vent all new installations to the exterior with an insulated duct and a dampered cap.' },
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
  <title>Bathroom Fan Installation Calgary | FusedBytes Electric</title>
  <meta name="description" content="Bathroom fan installation and replacement in Calgary. Quiet, energy-efficient models with humidity sensors. Fixed price from $500. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Bathroom Fan Installation & Replacement in Calgary"
  subtitle="Fast, fixed-price bathroom fan jobs — most completed in under 3 hours."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Why Did It Stop Working?</h2>
        <ul class="space-y-2 text-sm text-slate-600">
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Burnt Out Motor:</strong> The motor wears out over time — typically after 10–15 years of use.</div></li>
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Improper Venting:</strong> If the fan wasn't vented to the outside, moisture buildup causes premature failure.</div></li>
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Frozen Damper:</strong> Calgary winters can freeze the exterior damper, straining or stopping the motor.</div></li>
        </ul>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Are New Models Better?</h2>
        <ul class="space-y-2 text-sm text-slate-600">
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Quieter:</strong> Modern fans are nearly silent — no more grinding or rattling.</div></li>
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">More Efficient:</strong> Uses significantly less electricity than fans from 10+ years ago.</div></li>
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Humidity Sensors:</strong> Auto-activating fans remove moisture before mold can form.</div></li>
          <li class="flex gap-2"><span class="text-yellow-500 font-bold">→</span><div><strong class="text-slate-800">Better Airflow:</strong> Higher CFM ratings actually clear steam and odors faster.</div></li>
        </ul>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-2">Replacement — $500</h2>
        <p class="text-slate-500 text-sm">Old fan removed and replaced with a new unit using the existing wiring and duct. Takes about 2.5 hours. Includes parts.</p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-2">New Installation — $600</h2>
        <p class="text-slate-500 text-sm">Never had a bathroom fan? We run the wiring, cut the ceiling, and install a new unit with proper exterior venting. Takes about 3.5 hours. Includes parts.</p>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Bathroom Fan FAQ</h2>
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
      <PopupForm buttonLabel="Book a Bathroom Fan Job" />
    </div>
  </div>
</section>
