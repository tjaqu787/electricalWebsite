<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>Electrician FAQ: Quotes, Rates & What to Ask | FusedBytes Electric Calgary</title>
  <meta name="description" content="Common questions about hiring an electrician in Calgary answered. Do electricians charge for quotes? What should you ask before hiring? FusedBytes Electric has straight answers." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">Electrician FAQ — Common Questions Answered</h1>
  <p class="text-lg mb-6">Hiring an electrician for the first time can feel uncertain. Here are honest answers to the questions Calgary homeowners ask most often.</p>

  <div class="grid grid-cols-1 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Do Electricians Charge for Quotes?</h2>
        <p>It depends on the company and the scope of the job. For simple jobs — replacing an outlet, swapping a switch, installing a light — most reputable electricians will quote you over the phone or by a quick site visit at no charge.</p>
        <p class="mt-2">For larger jobs like panel upgrades, basement wiring, or whole-home inspections, some companies charge a diagnostic or assessment fee, especially if detailed troubleshooting is needed to generate the quote. This is reasonable — it's paid professional time.</p>
        <p class="mt-2"><strong>FusedBytes Electric:</strong> We provide free quotes for most residential jobs. For complex jobs requiring a site assessment, we'll tell you before we visit.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Questions Should I Ask Before Hiring an Electrician?</h2>
        <div class="space-y-3 mt-2">
          <div>
            <p class="font-semibold">1. Are you licensed and insured?</p>
            <p class="text-sm">Ask for their Journeyman Electrician certificate number and confirm they carry WCB and general liability insurance. Any legitimate electrician will provide this without hesitation.</p>
          </div>
          <div>
            <p class="font-semibold">2. Will you pull a permit for this job?</p>
            <p class="text-sm">Most electrical work in Calgary requires a permit. If an electrician suggests skipping it "to save money," walk away.</p>
          </div>
          <div>
            <p class="font-semibold">3. Is there a service call or dispatch fee?</p>
            <p class="text-sm">Some companies charge $75–$150 just to show up. Know this before they arrive.</p>
          </div>
          <div>
            <p class="font-semibold">4. How are materials billed?</p>
            <p class="text-sm">Are they at cost, or marked up? A 40% markup on a $300 panel adds $120 to your bill.</p>
          </div>
          <div>
            <p class="font-semibold">5. Can I get a written estimate?</p>
            <p class="text-sm">A professional electrician will always provide this. If they won't put it in writing, that's a red flag.</p>
          </div>
          <div>
            <p class="font-semibold">6. How long will the job take?</p>
            <p class="text-sm">Helps you plan your day and sanity-check the final invoice.</p>
          </div>
          <div>
            <p class="font-semibold">7. Is the work guaranteed?</p>
            <p class="text-sm">Reputable electricians stand behind their workmanship. Ask what's covered and for how long.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">How Long Will the Work Take?</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Replace an outlet or switch: 30–45 minutes</li>
          <li>Install a ceiling light: 45–90 minutes</li>
          <li>Troubleshoot a tripping breaker: 1–2 hours</li>
          <li>Add a new circuit: 2–4 hours</li>
          <li>Panel upgrade: 4–8 hours (full day)</li>
          <li>EV charger installation: 2–4 hours</li>
          <li>Basement rough-in: multiple days depending on scope</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Do I Need to Be Home During the Work?</h2>
        <p>For most jobs, yes — you'll need to be present at the start to discuss the scope and at the end to review the work and pay. For longer jobs, many electricians are fine if you leave after the work is underway. Ask your electrician about their preference when booking.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Will My Power Be Off During the Work?</h2>
        <p>For work involving the panel or new circuits: yes, partially or fully, for a portion of the job. For outlet or switch replacements: we switch off the individual circuit breaker for that area only — most of your home stays powered. We'll always tell you what to expect before we start.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What If the Problem Takes Longer Than Quoted?</h2>
        <p>A reliable electrician will call you before exceeding the quoted scope and get your approval. If the actual problem turns out to be more complex once work starts, we'll explain what we found, what it will take to fix it, and what it will cost — before we proceed. You always have the option to stop work at any point.</p>
      </div>
    </div>

  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Ask Us Your Question" />
  </div>

</div>
