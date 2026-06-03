<script>
  import PopupForm from '$lib/PopUpForm.svelte';

  const signs = [
    'Your home was built between 1965 and 1975',
    'Wiring in your panel or attic is silver-coloured',
    'Wires are labeled "AL" or "ALUM"',
    'Your home inspector flagged it in the report',
    'Your insurer is asking for remediation',
  ];

  const faqs = [
    { q: 'Is aluminum wiring covered by home insurance in Alberta?', a: 'Many Alberta insurers will cover a home with aluminum wiring, but some require a recent inspection, pigtailing report, or full remediation before issuing or renewing a policy. Some charge a higher premium. If your insurer is asking for remediation, we can provide a written report and certificate of completion.' },
    { q: 'How much does aluminum wiring remediation cost in Calgary?', a: 'Pigtailing a typical Calgary home runs $1,500–$3,500 depending on the number of outlets, switches, and light fixtures that need to be addressed. Larger homes with more devices cost more. We provide a written quote after assessing the scope — no surprise invoices.' },
    { q: 'What is pigtailing and does it actually make aluminum wiring safe?', a: 'Pigtailing connects a short copper wire to the aluminum wire at each device using an AlumiConn connector and anti-oxidant compound. The copper wire then connects to the outlet or switch. This eliminates the problematic aluminum-to-device connection that causes overheating. When done correctly, it is accepted by most Calgary insurers and meets the Canadian Electrical Code.' },
    { q: 'How do I know if my home has aluminum wiring?', a: 'The surest way is to look at the panel or attic wiring. Aluminum wiring is silver-coloured, while copper is orange-gold. Wires may also be stamped "AL" or "ALUM". Homes built between 1965 and 1975 in Calgary are the most likely to have it. Your home inspection report will flag it if present.' },
    { q: 'Is aluminum wiring dangerous if left untreated?', a: 'Aluminum wiring that has never been properly maintained is a fire risk. The connections at outlets, switches, and fixtures loosen over time due to expansion and contraction, creating arcing and overheating. This risk is manageable through proper remediation — but untreated aluminum wiring in a 50-year-old home is a legitimate safety concern.' },
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
  <title>Aluminum Wiring Remediation Calgary | FusedBytes Electric</title>
  <meta name="description" content="Aluminum wiring remediation in Calgary — pigtailing, CO/ALR device replacement, and full rewiring for homes built in the 1960s–70s. Insurance-accepted. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="bg-slate-900 text-white py-14 px-6">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-black">Aluminum Wiring Remediation in Calgary</h1>
    <p class="text-slate-400 text-lg mt-3">Safe, code-compliant solutions for Calgary homes built in the 1960s and 70s.</p>
  </div>
</div>

<section class="py-14 px-6 bg-slate-50">
  <div class="max-w-5xl mx-auto">

    <div class="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm mb-6">
      <h2 class="font-bold text-slate-900 text-lg mb-2">Why Is Aluminum Wiring a Concern?</h2>
      <p class="text-slate-600 text-sm leading-relaxed">Aluminum expands and contracts more than copper with temperature changes. Over decades, connections at outlets, switches, and fixtures loosen — creating arcing, overheating, and fire risk. Calgary insurance companies often require remediation before they'll insure or renew a policy on a home with aluminum wiring.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

      <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 class="font-bold text-slate-900 text-lg mb-4">How to Tell If You Have It</h2>
        <ul class="space-y-2">
          {#each signs as s}
            <li class="flex items-start gap-2 text-sm text-slate-600">
              <span class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>{s}
            </li>
          {/each}
        </ul>
      </div>

      <div class="space-y-4">
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 class="font-bold text-slate-900 mb-2">Option 1 — Pigtailing</h3>
          <p class="text-slate-500 text-sm leading-relaxed">The most common solution. A short copper wire is joined to the aluminum using an AlumiConn connector and anti-oxidant compound at each device. Accepted by most Calgary insurers and meets the Canadian Electrical Code.</p>
        </div>
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 class="font-bold text-slate-900 mb-2">Option 2 — CO/ALR Devices</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Replace all outlets and switches with CO/ALR-rated devices designed for direct aluminum connections. Another code-accepted remediation method.</p>
        </div>
        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 class="font-bold text-slate-900 mb-2">Option 3 — Full Rewiring</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Complete replacement with copper wiring — best done during a renovation when walls are already open.</p>
        </div>
      </div>

    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Aluminum Wiring FAQ</h2>
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
      <PopupForm buttonLabel="Get an Aluminum Wiring Quote" />
    </div>

  </div>
</section>
