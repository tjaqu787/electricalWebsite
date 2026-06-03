<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>Electrical Brands Trusted by Top Electricians | FusedBytes Electric</title>
  <meta name="description" content="What brands of electrical equipment do top residential electricians use? Learn which panel, breaker, and wiring brands are trusted by professional Calgary electricians." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">What Brands of Electrical Equipment Do Top Residential Electricians Use?</h1>
  <p class="text-lg mb-6">Not all electrical equipment is equal. Professional electricians are selective about the brands they install — because what goes inside your walls needs to last 20–40 years and protect your family. Here's what the trade actually uses and why.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Electrical Panels: Trusted Brands</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Square D (Schneider Electric):</strong> Industry standard. Homeline and QO series are widely trusted and readily available. Most commonly installed by professionals in Calgary.</li>
          <li><strong>Siemens:</strong> High-quality panels and breakers, excellent reliability. Common in commercial and high-end residential installations.</li>
          <li><strong>Eaton (Cutler-Hammer):</strong> Solid performer, good breaker availability, widely used.</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Panels to Avoid</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Federal Pacific (Stab-Lok):</strong> Linked to fires and failure to trip. No longer manufactured; replacement strongly recommended.</li>
          <li><strong>Zinsco / GTE-Sylvania:</strong> Known defects including breakers that weld shut. Same recommendation — replace.</li>
          <li><strong>Pushmatic:</strong> Outdated design, parts unavailable. Replace when upgrading.</li>
        </ul>
        <p class="mt-2 text-sm">If your home has one of these, call us for an assessment.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Outlets and Switches</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Leviton:</strong> The go-to for professional-grade devices. Decora series is widely used in renovations. Their GFCI outlets are known for reliability.</li>
          <li><strong>Lutron:</strong> Top choice for dimmers and smart switches. Known for silent operation and longevity.</li>
          <li><strong>Hubbell:</strong> Commercial-grade quality increasingly used in high-end residential.</li>
        </ul>
        <p class="mt-2 text-sm">We avoid cheap big-box store house brands — they fail faster and can create safety issues.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Wire and Cable</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Southwire:</strong> One of the largest and most trusted wire manufacturers in North America. Standard choice for most residential wiring.</li>
          <li><strong>Nexans:</strong> Common in Canada, high quality.</li>
        </ul>
        <p class="mt-2 text-sm">All wire we install is CSA-certified and meets Alberta electrical code requirements.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">EV Chargers (EVSE)</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Emporia Energy:</strong> Great value Level 2 charger with smart monitoring.</li>
          <li><strong>ChargePoint Home Flex:</strong> Reliable, flexible amperage, good app.</li>
          <li><strong>Tesla Wall Connector:</strong> Best for Tesla owners; works with all J1772 EVs with an adapter.</li>
          <li><strong>Grizzl-E:</strong> Canadian-made, rugged, well-regarded for Alberta winters.</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Surge Protection</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Square D Surgebreaker:</strong> Installs directly in the panel. Whole-home protection.</li>
          <li><strong>Siemens FS140:</strong> High-capacity whole-home surge protector, widely recommended.</li>
          <li><strong>Leviton panel protectors:</strong> Quality option compatible with most panels.</li>
        </ul>
      </div>
    </div>

  </div>

  <div class="card bg-base-200 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="text-2xl font-semibold mb-2">What We Install at FusedBytes Electric</h2>
      <p>We install Square D, Siemens, and Eaton panels. Devices are Leviton or Lutron. All wire is CSA-certified Southwire or equivalent. We never install counterfeit or uncertified equipment. If you're curious about the specific products going into your home, just ask — we're happy to walk you through it.</p>
    </div>
  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Book an Electrician" />
  </div>

</div>
