<script>
  import PopupForm from '$lib/PopUpForm.svelte';
  import PageHeader from '$lib/PageHeader.svelte';

  const steps = [
    { num: '01', name: 'Planning & Design', desc: 'We work with you and your contractor to map out circuit locations, outlet placement, light positions, and any high-power appliance needs before a single wire is run.' },
    { num: '02', name: 'Running Wires & Setting Boxes', desc: 'With walls open, we run all electrical cables, set outlet and switch boxes, and install junction boxes for lighting — everything roughed-in cleanly before drywall goes up.' },
    { num: '03', name: 'City Inspection', desc: 'Most rough-in work in Calgary requires a City of Calgary electrical inspection before the walls are closed. We coordinate the permit and schedule the inspection for you.' },
    { num: '04', name: 'Trim-Out', desc: 'After drywall and painting, we return to install devices, cover plates, and fixtures — bringing everything live and code-compliant.' },
  ];

  const faqs = [
    { q: 'Do you need a permit for electrical work during a renovation in Calgary?', a: 'Yes. Any new wiring, new circuits, or changes to your electrical system during a renovation require a City of Calgary electrical permit. The permit triggers a rough-in inspection before the walls are closed. We pull the permit and coordinate the inspection — that\'s part of our service.' },
    { q: 'When should the electrician come during a renovation?', a: 'Twice — first for the rough-in (while walls are open, before drywall), and again for the trim-out (after painting, to install devices, plates, and fixtures). We coordinate with your general contractor on timing to keep the project on schedule.' },
    { q: 'How long does electrical rough-in take?', a: 'A typical basement development rough-in takes 1–2 days depending on square footage and the number of circuits. A kitchen renovation rough-in is usually half a day. We\'ll give you a timeline estimate when we review the project scope.' },
    { q: 'What is a rough-in inspection and do I need one?', a: 'A rough-in inspection is required in Calgary for any permitted electrical work before walls are closed with drywall. A City of Calgary safety codes officer inspects the wiring, boxes, and panel work to confirm it meets code. Without passing the inspection, drywall cannot legally go up. We schedule this as part of the job.' },
    { q: 'How much does electrical rough-in cost for a basement development?', a: 'A typical Calgary basement development electrical rough-in runs $2,500–$5,000 depending on the number of circuits, panel capacity, and scope of work. The trim-out (devices, fixtures, plates) is an additional cost. We provide a written quote covering both stages before work begins.' },
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
  <title>Renovation Electrician Calgary | FusedBytes Electric</title>
  <meta name="description" content="Electrical rough-in for Calgary renovations and basement developments. We handle the permit, rough-in, City inspection, and trim-out. Licensed Calgary electricians." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<PageHeader
  title="Electrical Rough-In & Renovation Service in Calgary"
  subtitle="The electrical foundation of your renovation — done properly, permitted, and inspected."
/>

<section class="py-14 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-4xl mx-auto">

    <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-8">
      <h2 class="font-bold text-slate-900 text-xl mb-3">What Is an Electrical Rough-In?</h2>
      <p class="text-slate-600 leading-relaxed">The electrical rough-in is the stage of construction where all wiring, boxes, and conduit are installed before the walls are closed with drywall. It lays the groundwork for every outlet, switch, light fixture, and appliance in the finished space. Doing it right at this stage is critical — mistakes are expensive to fix once the walls are closed.</p>
    </div>

    <div class="space-y-4 mb-10">
      {#each steps as step}
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex gap-5">
          <span class="text-2xl font-black text-yellow-400 shrink-0">{step.num}</span>
          <div>
            <h3 class="font-bold text-slate-900 text-lg mb-1">{step.name}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="mb-10">
      <h2 class="text-2xl font-black text-slate-900 mb-6">Renovation Electrical FAQ</h2>
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
      <PopupForm buttonLabel="Get a Renovation Quote" />
    </div>
  </div>
</section>
