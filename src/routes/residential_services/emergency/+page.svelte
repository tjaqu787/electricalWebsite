<script>
  import PopupForm from '$lib/PopUpForm.svelte';

  const callFor = [
    'Sparking or burning smell from outlets or panel',
    'Breaker won\'t reset after tripping',
    'Partial power loss throughout your home',
    'Outlets or switches warm to the touch',
    'Lights flickering across multiple rooms',
    'Water damage near electrical components',
    'Visible scorching or burn marks on outlets',
  ];

  const before = [
    'If you smell burning, turn off the main breaker',
    'Do not use the affected outlet or circuit',
    'Keep children and pets away from the area',
    'If there\'s fire or smoke — call 911 first',
    'Note when the issue started and what triggered it',
  ];

  const faqs = [
    { q: 'What counts as a true electrical emergency?', a: 'A burning smell from an outlet, switch, or wall; visible sparking; a breaker that won\'t stay reset; partial or total power loss; or outlets and switches that are warm to the touch. When in doubt, call — a quick phone conversation can tell you whether you need someone tonight.' },
    { q: 'Do you charge extra for evening and weekend calls?', a: 'No. Our rate is $100/hour regardless of when you call — evenings, weekends, or weekdays. There is no dispatch fee and no after-hours surcharge. You\'ll get a written estimate before we start any work.' },
    { q: 'How quickly can you respond?', a: 'Response time depends on our current schedule, but we prioritize urgent calls and aim to confirm availability within minutes of your call. We serve all Calgary quadrants and can typically arrive the same evening for urgent issues.' },
    { q: 'Should I call 911 for an electrical emergency?', a: 'If you see fire or smoke, call 911 first — before calling an electrician. If you smell burning with no visible flame, shut off your main breaker and call us. Don\'t re-enter an area that smells strongly of burning until it\'s been inspected.' },
    { q: 'What should I do while I wait for the electrician?', a: 'Shut off the circuit or main breaker if there\'s a burning smell. Unplug devices from the affected outlet. Keep people and pets away from the area. Note when the problem started and what you were doing — this helps us diagnose faster on arrival.' },
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
  <title>Emergency Electrician Calgary | FusedBytes Electric</title>
  <meta name="description" content="Emergency electrician in Calgary — available evenings and weekends for sparking outlets, tripped breakers, power outages, and burning smells. No after-hours surcharge. Call xxx-xxx-xxxx." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="bg-slate-900 text-white py-14 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center gap-2 mb-4">
      <span class="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
      <span class="text-red-400 text-sm font-semibold uppercase tracking-wide">Emergency Service Available</span>
    </div>
    <h1 class="text-4xl font-black">Emergency Electrician in Calgary</h1>
    <p class="text-slate-400 text-lg mt-3">Available evenings and weekends — call us at <a href="tel:xxx-xxx-xxxx" class="text-white font-bold underline decoration-yellow-400">xxx-xxx-xxxx</a>.</p>
  </div>
</div>

<!-- Alert bar -->
<div class="bg-red-600 text-white px-6 py-4">
  <div class="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
    <p class="font-bold">Electrical Emergency? Don't wait.</p>
    <a href="tel:xxx-xxx-xxxx" class="bg-white text-red-600 font-black px-5 py-2 rounded-xl text-sm hover:bg-red-50 transition-colors shrink-0">
      Call xxx-xxx-xxxx
    </a>
  </div>
</div>

<section class="py-14 px-6 bg-slate-50">
  <div class="max-w-5xl mx-auto">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">When to Call an Emergency Electrician</h2>
        <ul class="space-y-2">
          {#each callFor as item}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"></span>{item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">What to Do Before We Arrive</h2>
        <ul class="space-y-2">
          {#each before as item}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">Evening &amp; Weekend Availability</h2>
        <p class="text-slate-500 text-sm leading-relaxed">We offer evening and weekend appointments to handle urgent electrical issues. No need to wait until Monday when your home's safety is at risk.</p>
      </div>

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-3">No Surge Pricing</h2>
        <p class="text-slate-500 text-sm leading-relaxed">We charge our standard rate of <strong class="text-slate-800">$100/hour</strong> regardless of when you call — no surprise surcharges for evenings or weekends. You'll know the cost before we start.</p>
        <a href="/pricing" class="text-sm font-semibold text-yellow-600 hover:underline mt-3 inline-block">View pricing →</a>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Emergency Electrician FAQ</h2>
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
      <PopupForm buttonLabel="Request Emergency Service" />
    </div>

  </div>
</section>
