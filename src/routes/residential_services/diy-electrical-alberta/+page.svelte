<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>DIY Electrical Work in Alberta — What's Allowed | FusedBytes Electric</title>
  <meta name="description" content="Can you do your own electrical work in Alberta? Find out what homeowners are legally allowed to do themselves, what requires a licensed electrician, and when a permit is needed." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">Can a Homeowner Do Their Own Electrical Work in Alberta?</h1>
  <p class="text-lg mb-6">Alberta has specific rules about what homeowners can and cannot do to their own home's electrical system. Getting this wrong can create safety hazards, fail inspection, and void your home insurance. Here's what you need to know.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">The Short Answer</h2>
        <p>Yes — Alberta homeowners can do some electrical work in their own primary residence. The key rules are:</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>The property must be your primary residence — not a rental</li>
          <li>Most work requires a permit from the municipality</li>
          <li>The work must pass inspection by a safety codes officer</li>
          <li>You cannot do electrical work in commercial properties</li>
          <li>You cannot hire an unlicensed person to do it for you</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Homeowners Can Do Themselves</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Replace an existing outlet or switch (like-for-like, copper wiring)</li>
          <li>Replace an existing light fixture on an existing box</li>
          <li>Replace a ceiling fan on an existing fan-rated box</li>
          <li>Replace a doorbell</li>
          <li>Install low-voltage wiring (doorbells, thermostats, data cable)</li>
        </ul>
        <p class="mt-2 text-sm">Even for these tasks, pull a permit if you're uncertain — it protects you.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Requires a Licensed Electrician</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Any work on your electrical panel or breakers</li>
          <li>Running new circuits or adding new wiring</li>
          <li>Installing new outlets or switches in new locations</li>
          <li>Any work in a rental property</li>
          <li>Service entrance work (meter base, service upgrade)</li>
          <li>Anything involving aluminum wiring</li>
          <li>EV charger installation (dedicated new circuit)</li>
          <li>Hot tub, pool, or sauna wiring</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">The Permit Rule</h2>
        <p>In Calgary, most electrical work beyond simple device replacements requires a permit. This applies to homeowners too. The permit triggers an inspection by a City of Calgary safety codes officer. Unpermitted electrical work is discovered during home sales and can cost far more to remediate than doing it right the first time.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">The Aluminum Wiring Exception</h2>
        <p>If your home was built between roughly 1965 and 1976, you may have aluminum wiring. Aluminum requires special anti-oxidant compound and compatible devices (marked CO/ALR). Work on aluminum wiring should always be done by a licensed electrician — improper connections are a leading cause of residential fires.</p>
        <a href="/residential_services/aluminum-wiring" class="btn btn-outline btn-sm mt-3">Learn About Aluminum Wiring</a>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Why Most Homeowners Still Call an Electrician</h2>
        <p>Even for permitted, technically-allowed DIY work, most homeowners find that a licensed electrician is faster, safer, and cheaper per hour than their own time spent researching, buying materials, and doing the work — then potentially having it fail inspection and redoing it. For anything beyond a basic device swap, calling a pro is usually the right move.</p>
      </div>
    </div>

  </div>

  <div class="card bg-base-200 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="text-2xl font-semibold mb-2">Not Sure? We'll Tell You Straight</h2>
      <p>If you're unsure whether your project needs a licensed electrician or a permit, call us. We'll give you an honest answer — even if it means telling you it's something you can do yourself.</p>
    </div>
  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Ask Us About Your Project" />
  </div>

</div>
