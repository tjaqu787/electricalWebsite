<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const issues = [
    { name: 'Lights Not Working', desc: 'The most common call we get. Usually a faulty dimmer switch, a tripped GFCI outlet upstream, or — believe it or not — a burnt-out bulb. We diagnose quickly so you\'re not paying for guesswork.' },
    { name: 'Dead Outlets', desc: 'Often caused by a tripped GFCI outlet elsewhere on the circuit. If not, we\'ll use a plug tester to trace the fault and replace the damaged device.' },
    { name: 'Breakers Tripping', desc: 'Could be an overloaded circuit, a failing appliance, a short, or deteriorating wiring. We identify the root cause — not just reset the breaker and leave.' },
    { name: 'Flickering Lights', desc: 'Usually a loose connection at the switch, fixture, or panel. Occasionally a sign of a larger wiring issue. We check all the way back to the panel if needed.' },
    { name: 'Burning Smell or Sparking', desc: 'This is an emergency — turn off the breaker immediately. We\'ll find the source: damaged wiring, a failing device, or a loose connection that\'s arcing.' },
    { name: 'GFCI Outlet Won\'t Reset', desc: 'A nuisance-trip from moisture, or the outlet has failed. Bathroom, kitchen, and outdoor GFCI outlets are code-required — we replace them and verify protection.' },
  ];

  const faqs = [
    { q: 'How much does electrical troubleshooting cost in Calgary?', a: 'Most electrical repair and troubleshooting jobs fall between $100–$300 at our flat $100/hour rate. Simple fixes like a dead outlet or tripped breaker typically take under an hour. More complex faults — like tracking down intermittent wiring issues — may take 1–2 hours.' },
    { q: 'What are the most common household electrical problems?', a: 'The most common issues we see are dead outlets, lights that won\'t work, breakers that trip repeatedly, and flickering lights. Most are quick fixes once diagnosed — a failed GFCI, a faulty dimmer, or an overloaded circuit.' },
    { q: 'When should I call an electrician instead of troubleshooting myself?', a: 'Call an electrician if you smell burning, see sparking or scorching, have a breaker that won\'t stay reset, or lose power to multiple circuits. These are signs of a potentially serious fault that needs a licensed diagnosis — not a DIY fix.' },
    { q: 'Can a homeowner fix electrical problems themselves in Alberta?', a: 'Alberta homeowners can do simple like-for-like device replacements (swapping an outlet or switch) in their primary residence. However, any wiring work, panel work, or troubleshooting that requires tracing faults through walls should be done by a licensed electrician.' },
    { q: 'How long does electrical repair take?', a: 'Most common repairs — replacing an outlet, fixing a light circuit, diagnosing a tripping breaker — take between 30 minutes and 2 hours. We\'ll give you a time estimate when you book and update you if the diagnosis reveals something more complex.' },
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
  <title>Electrical Repairs Calgary | FusedBytes Electric</title>
  <meta name="description" content="Electrical repair and troubleshooting in Calgary — dead outlets, tripping breakers, flickering lights, burning smells. Licensed Calgary electricians at $100/hr." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Electrical Repairs & Troubleshooting in Calgary"
  subtitle="We diagnose the root cause — not just the symptom. Billed at $100/hr with a 30-minute minimum."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {#each issues as issue}
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 class="font-bold text-slate-900 text-lg mb-2">{issue.name}</h2>
          <p class="text-slate-500 text-sm leading-relaxed">{issue.desc}</p>
        </div>
      {/each}
    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Common Questions About Electrical Repairs</h2>
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
      <PopupForm buttonLabel="Book a Repair" />
    </div>
  </div>
</section>
