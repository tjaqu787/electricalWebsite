<script>
import "../app.css";
import TopBar from '$lib/TopBar.svelte';
import Footer from '$lib/Footer.svelte';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectricalContractor"],
  "name": "FusedBytes Electric",
  "telephone": "xxx-xxx-xxxx",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "areaServed": { "@type": "City", "name": "Calgary" },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
};
</script>

<svelte:head>
  <title>FusedBytes Electric | Calgary Electrician</title>
  <meta name="description" content="FusedBytes Electric — licensed residential electricians serving Calgary, AB. Panel upgrades, EV chargers, lighting, repairs, and more. Call xxx-xxx-xxxx." />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>

<div class="flex flex-col min-h-screen">
  <TopBar />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
