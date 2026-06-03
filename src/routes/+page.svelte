<script lang="ts">
  import PopupForm from '$lib/PopUpForm.svelte';

  const services = [
    {
      title: 'Panel Upgrades',
      desc: '100A to 200A upgrades, sub-panels, and breaker replacements.',
      href: '/residential_services/panel-upgrade',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />`,
    },
    {
      title: 'EV Charger Installation',
      desc: 'Level 2 home charging stations for all EV makes and models.',
      href: '/residential_services/ev-charger',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
    },
    {
      title: 'Lighting Installation',
      desc: 'Potlights, outdoor, under-cabinet, security, and accent lighting.',
      href: '/residential_services/lighting',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />`,
    },
    {
      title: 'Electrical Repairs',
      desc: 'Lights not working, broken plugs, tripping breakers — diagnosed fast.',
      href: '/residential_services/repairs-and-troubleshooting',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />`,
    },
    {
      title: 'Bathroom Fans',
      desc: 'Quiet, efficient bathroom fan installation and replacement.',
      href: '/residential_services/bathroom-fans',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />`,
    },
    {
      title: 'Aluminum Wiring',
      desc: 'Pigtailing and remediation for Calgary homes built in the 60s–70s.',
      href: '/residential_services/aluminum-wiring',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />`,
    },
    {
      title: 'Surge Protection',
      desc: 'Whole-home panel surge protectors to guard every circuit.',
      href: '/residential_services/surge-protection',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
    },
    {
      title: 'Data & Low Voltage',
      desc: 'Ethernet, security cameras, thermostat wiring, and Wi-Fi mesh.',
      href: '/residential_services/data-wiring',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />`,
    },
    {
      title: 'Emergency Service',
      desc: 'Urgent electrical issues — available evenings and weekends.',
      href: '/residential_services/emergency',
      urgent: true,
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />`,
    },
  ];

  const trustBadges = [
    'Licensed & Insured',
    '10+ Years Experience',
    'Evening & Weekend Available',
    'Upfront Pricing',
  ];

  const valuePropIcons = [
    {
      title: 'Convenience First',
      desc: 'Evening and weekend appointments — we work around your schedule, not the other way around.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    },
    {
      title: 'Trusted & Experienced',
      desc: 'Over 10 years of residential electrical experience in Calgary — licensed, insured, and background-checked.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
    },
    {
      title: 'Transparent Pricing',
      desc: 'Upfront quotes, no hidden fees. Fixed-price jobs where possible — you know what you\'re paying before we start.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />`,
    },
  ];

  const faqs = [
    { q: "How much does an electrician cost in Calgary?", a: "Our rates start at $100/hour with a half-hour minimum. Many common jobs like bathroom fan replacements are fixed-price — check our pricing page for details." },
    { q: "Do you offer emergency electrical service in Calgary?", a: "Yes. We offer evening and weekend appointments to accommodate urgent electrical issues across Calgary." },
    { q: "Do I need a permit for electrical work in Calgary?", a: "Most new wiring, panel upgrades, and rough-in work requires a permit from the City of Calgary. We handle the permit process for you on applicable jobs." },
    { q: "What is aluminum wiring and is it dangerous?", a: "Aluminum wiring was common in Calgary homes built in the 1960s–70s. It can be a fire hazard if connections are not properly maintained. We offer aluminum wiring remediation to bring your home up to current safety standards." },
    { q: "How do I know if I need an electrical panel upgrade?", a: "Signs include frequently tripping breakers, a full panel with no room for new circuits, or a panel over 40 years old. We can assess your panel and recommend the right solution." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  let openFaq = -1;
  function toggleFaq(i: number) { openFaq = openFaq === i ? -1 : i; }
</script>

<svelte:head>
  <title>Calgary Electrician | Residential Electrical Services | FusedBytes Electric</title>
  <meta name="description" content="FusedBytes Electric — trusted Calgary electricians for panel upgrades, EV charger installation, lighting, repairs, and more. Evening & weekend appointments. Call xxx-xxx-xxxx." />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<!-- Hero -->
<section class="relative text-white overflow-hidden" style="background-color: #06101C;">
  <!-- Grid texture -->
  <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 56px 56px;"></div>
  <!-- Yellow radial glow -->
  <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 60% 50% at 80% 20%, rgba(250,204,21,0.07) 0%, transparent 70%);"></div>

  <div class="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
    <div class="inline-flex items-center gap-2 border border-yellow-400/25 rounded-full px-4 py-1.5 mb-8" style="background-color: rgba(250,204,21,0.08);">
      <span class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
      <span class="text-yellow-400 text-sm font-semibold tracking-wide">Licensed Calgary Electricians</span>
    </div>

    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
      Calgary's Trusted<br>
      <span class="text-yellow-400">Residential</span><br class="hidden sm:block"> Electricians
    </h1>

    <p class="text-slate-300 text-xl max-w-2xl leading-relaxed mb-10">
      Panel upgrades, EV chargers, lighting, and repairs — done right, with evening and weekend availability.
    </p>

    <div class="flex flex-wrap gap-4 mb-12">
      <PopupForm buttonLabel="Get a Free Quote" />
      <a
        href="tel:xxx-xxx-xxxx"
        class="flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
      >
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call xxx-xxx-xxxx
      </a>
    </div>

    <!-- Trust chips -->
    <div class="flex flex-wrap gap-2.5">
      {#each trustBadges as badge}
        <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2">
          <svg class="w-3.5 h-3.5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-slate-300 text-xs font-medium">{badge}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services Grid -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="mb-12">
      <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">Residential Electrical Services<br class="hidden sm:block"> in Calgary</h2>
      <p class="text-slate-500 text-lg mt-3">Everything your home needs, handled by certified electricians.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each services as service}
        <a
          href={service.href}
          class="group flex flex-col bg-white border {service.urgent ? 'border-red-100 hover:border-red-200' : 'border-slate-200 hover:border-yellow-300'} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          <div class="w-11 h-11 {service.urgent ? 'bg-red-50' : 'bg-yellow-50'} rounded-xl flex items-center justify-center mb-4 shrink-0">
            <svg class="w-5 h-5 {service.urgent ? 'text-red-500' : 'text-yellow-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {@html service.icon}
            </svg>
          </div>
          <h3 class="font-bold text-slate-900 text-base mb-2">{service.title}</h3>
          <p class="text-slate-500 text-sm leading-relaxed flex-1">{service.desc}</p>
          <span class="text-sm font-semibold mt-5 inline-flex items-center gap-1 {service.urgent ? 'text-red-500' : 'text-yellow-600'} group-hover:gap-2 transition-all">
            Learn more
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Value Props -->
<section class="py-20 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each valuePropIcons as vp}
        <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div class="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {@html vp.icon}
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">{vp.title}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{vp.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="py-20 px-6 bg-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-2">Common Questions Calgary<br class="hidden sm:block"> Homeowners Ask</h2>
    <p class="text-slate-500 text-lg mb-10">Quick answers to what we hear most often.</p>
    <div class="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {#each faqs as faq, i}
        <div>
          <button
            class="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            on:click={() => toggleFaq(i)}
          >
            <span class="font-semibold text-slate-900 pr-4 text-sm sm:text-base">{faq.q}</span>
            <div class="w-7 h-7 rounded-lg {openFaq === i ? 'bg-yellow-400 text-slate-900' : 'bg-slate-100 text-slate-500'} flex items-center justify-center shrink-0 transition-all duration-200">
              <svg
                class="w-4 h-4 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {#if openFaq === i}
            <div class="px-6 pb-6 text-slate-600 text-sm leading-relaxed bg-slate-50 border-t border-slate-100 pt-4">
              {faq.a}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="py-20 px-6 relative overflow-hidden" style="background-color: #FACC15;">
  <!-- Subtle pattern on CTA -->
  <div class="absolute inset-0 pointer-events-none opacity-10" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 24px 24px;"></div>
  <div class="relative max-w-3xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Ready to Get Started?</h2>
    <p class="text-slate-700 text-lg mb-10">Calgary's trusted electricians — evening &amp; weekend availability across the city.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <PopupForm buttonLabel="Get a Free Quote" variant="outline-dark" />
      <a href="tel:xxx-xxx-xxxx" class="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call xxx-xxx-xxxx
      </a>
    </div>
  </div>
</section>
