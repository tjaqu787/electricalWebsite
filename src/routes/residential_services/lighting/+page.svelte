<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const types = [
    { name: 'Potlights', desc: 'Recessed lights with a clean, modern look — perfect for kitchens, living rooms, and hallways. We cut, wire, and trim to a flawless finish.' },
    { name: 'Indoor Lighting', desc: 'Chandeliers, pendant lights, flush mounts — any fixture you choose, we\'ll install it safely and correctly.' },
    { name: 'Under-Cabinet Lighting', desc: 'Illuminate your kitchen countertops for easier food prep. LED strips or puck lights, hardwired for a clean no-cord look.' },
    { name: 'Outdoor Lighting', desc: 'Porch lights, soffit lighting, and landscape lighting to improve curb appeal and visibility.' },
    { name: 'Security Lighting', desc: 'Motion-activated floodlights for driveways and dark corners — deters intruders and lights your path.' },
    { name: 'Bathroom Lighting', desc: 'Vanity lights, heat lamps, and exhaust fan combos for a comfortable, well-lit bathroom.' },
    { name: 'Accent Lighting', desc: 'Highlight artwork, shelving, or architectural features with strategically placed accent lights.' },
    { name: 'General Lighting', desc: 'Replace old fluorescent fixtures, install new ceiling lights, or upgrade to LED — any room, any style.' },
  ];

  const faqs = [
    { q: 'How much does pot light installation cost in Calgary?', a: 'Pot light installation is billed at $100/hour. Most pot lights take 20–30 minutes each once the circuit is run. A typical 4-pot kitchen job runs 2–3 hours including circuit work. We\'ll give you an estimate before we start.' },
    { q: 'Do you need a permit to install pot lights in Calgary?', a: 'Adding pot lights on an existing circuit generally does not require a permit if no new wiring is run. However, adding a new circuit for lighting does require a City of Calgary electrical permit. We\'ll advise you on permit requirements specific to your job.' },
    { q: 'How many pot lights do I need per room?', a: 'A general rule is one pot light per 4–6 square feet of ceiling for even illumination. A 12×14 ft living room typically needs 6–8 lights. Placement also matters — we space them to avoid shadows and hot spots. We\'re happy to advise on layout during your booking.' },
    { q: 'Can I install my own light fixtures in Alberta?', a: 'Alberta homeowners can replace an existing light fixture on an existing ceiling box without a permit, as long as the wiring is copper and no new circuits are added. However, any new circuits, new ceiling boxes, or work on aluminum wiring must be done by a licensed electrician.' },
    { q: 'How long does lighting installation take?', a: 'A simple fixture swap takes 20–30 minutes. Installing 4–6 pot lights on an existing circuit takes 2–3 hours. A full room of new pot lights with a dedicated circuit typically takes 3–5 hours. We\'ll give you a time and cost estimate when you book.' },
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
  <title>Lighting Installation Calgary | FusedBytes Electric</title>
  <meta name="description" content="Professional lighting installation in Calgary — potlights, indoor, outdoor, security, under-cabinet, and accent lighting. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Lighting Installation Calgary"
  subtitle="From potlights to outdoor security lighting — we install, replace, and upgrade every type of lighting in your home."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {#each types as t}
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 class="font-bold text-slate-900 text-lg mb-2">{t.name}</h2>
          <p class="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
        </div>
      {/each}
    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Lighting Installation FAQ</h2>
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
      <PopupForm buttonLabel="Book a Lighting Install" />
    </div>
  </div>
</section>
