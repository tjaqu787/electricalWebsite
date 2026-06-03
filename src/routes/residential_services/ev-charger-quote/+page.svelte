<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>EV Charger Installation Quote Calgary | FusedBytes Electric</title>
  <meta name="description" content="Get a quote for installing an electric vehicle charging station in Calgary. FusedBytes Electric installs Level 2 EV chargers for all makes — fast booking, transparent pricing." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">Get a Quote for Installing an Electric Vehicle Charging Station</h1>
  <p class="text-lg mb-6">Installing a Level 2 EV charger at home is one of the smartest electrical upgrades you can make. Here's everything that goes into the price — and how to get an accurate quote from a licensed Calgary electrician.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Affects Your EV Charger Installation Cost</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Panel capacity:</strong> Do you have a free 40–50 amp slot in your panel?</li>
          <li><strong>Distance from panel to garage:</strong> Longer runs mean more wire and conduit</li>
          <li><strong>Indoor vs. outdoor installation:</strong> Outdoor requires weatherproof conduit and fittings</li>
          <li><strong>Hardwired vs. outlet:</strong> Hardwired EVSE or NEMA 14-50 outlet</li>
          <li><strong>EVSE unit cost:</strong> Supply your own charger or we source one</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Typical Price Range in Calgary</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Simple installation (short run, panel capacity available):</strong> $400–$700 labour</li>
          <li><strong>Moderate installation (longer run, conduit required):</strong> $700–$1,200 labour</li>
          <li><strong>Panel upgrade required first:</strong> Add $2,000–$3,500 for the upgrade</li>
          <li><strong>EVSE unit (if supplying):</strong> $300–$900 depending on brand/features</li>
        </ul>
        <p class="mt-2 text-sm">These are general estimates. A quick call or site visit gives you an accurate quote.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What's Included in Our Quote</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Site assessment of your panel and garage</li>
          <li>40A or 50A dedicated circuit installation</li>
          <li>Conduit and wiring to charger location</li>
          <li>Hardwired EVSE or NEMA 14-50 outlet installation</li>
          <li>City of Calgary permit (if required)</li>
          <li>Testing and commissioning</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Compatible With All Electric Vehicles</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Tesla Model 3, Y, S, X, Cybertruck</li>
          <li>Ford F-150 Lightning, Mustang Mach-E</li>
          <li>Chevrolet, GMC, Cadillac EVs</li>
          <li>Hyundai IONIQ 5/6, Kia EV6/EV9</li>
          <li>BMW, Volkswagen, Rivian, Lucid</li>
          <li>All J1772 compatible vehicles</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Recommended EV Charger Brands</h2>
        <ul class="list-disc list-inside space-y-1">
          <li><strong>Grizzl-E:</strong> Canadian-made, built for cold Alberta winters</li>
          <li><strong>ChargePoint Home Flex:</strong> Adjustable amperage, excellent app</li>
          <li><strong>Emporia Energy:</strong> Smart monitoring, great value</li>
          <li><strong>Tesla Wall Connector:</strong> Best for Tesla owners</li>
        </ul>
        <p class="mt-2 text-sm">We're happy to advise on the best charger for your specific vehicle and usage.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">How to Get Your Quote</h2>
        <p>Getting a quote takes 5 minutes. Fill out the form below or call <strong>xxx-xxx-xxxx</strong>. Tell us your vehicle, panel age, and where you want the charger installed. We'll get back to you with a written estimate — no obligation, no pressure.</p>
        <a href="/residential_services/ev-charger" class="btn btn-outline btn-sm mt-3">Learn More About EV Charger Installation</a>
      </div>
    </div>

  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Get My EV Charger Quote" />
  </div>

</div>
