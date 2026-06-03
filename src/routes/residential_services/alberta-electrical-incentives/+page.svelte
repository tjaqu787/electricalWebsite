<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>Alberta Electrical Rebates & Incentives | FusedBytes Electric</title>
  <meta name="description" content="What electrical rebates and incentives are available in Alberta? Learn about EV charger grants, home energy efficiency programs, and what Calgary homeowners can claim." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">Alberta Electrical Rebates & Incentives for Homeowners</h1>
  <p class="text-lg mb-6">Alberta homeowners may be eligible for rebates and incentives on electrical upgrades — particularly EV chargers, energy efficiency improvements, and solar-related work. These programs change frequently, so always verify current eligibility directly with the program before committing to a project.</p>

  <div class="alert alert-info shadow-lg mb-6">
    <div>
      <span>Incentive programs change. The information below reflects general program types — confirm current amounts and eligibility at the program websites before budgeting.</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Canada Greener Homes Grant & Loan</h2>
        <p>The federal Canada Greener Homes program offers interest-free loans (up to $40,000) and in some cases grants for home energy efficiency upgrades. Eligible work includes insulation, windows, and heat pumps — and in some cases, the electrical upgrades needed to support them (such as panel upgrades to accommodate a heat pump or EV charger).</p>
        <p class="mt-2 text-sm">Visit nrcan.gc.ca to check current program status and eligibility.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Alberta EV Charger Incentives</h2>
        <p>Various federal and provincial programs have offered rebates on EV charger hardware and installation. The Canada Infrastructure Bank has run programs for multi-unit residential buildings. Individual homeowners should check:</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>Your EV manufacturer's charger rebate program (many offer $200–$500)</li>
          <li>Federal iZEV program for EV purchase rebates</li>
          <li>Alberta-specific programs through Efficiency Alberta</li>
        </ul>
        <a href="/residential_services/ev-charger" class="btn btn-outline btn-sm mt-3">EV Charger Installation Details</a>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Efficiency Alberta Programs</h2>
        <p>Efficiency Alberta runs rebate programs for Alberta homeowners making energy-efficient upgrades. Programs have historically included rebates on smart thermostats, insulation, and heating systems — some of which require electrical work. Visit efficiencyalberta.ca for current offerings.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">City of Calgary Programs</h2>
        <p>The City of Calgary has offered programs related to home energy efficiency, solar installation, and EV charging infrastructure in multi-unit buildings. Visit calgary.ca/environment for the most current residential programs available to homeowners.</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Does a Panel Upgrade Qualify for Rebates?</h2>
        <p>A panel upgrade by itself typically does not qualify for a direct rebate. However, if the upgrade is required to support a qualifying improvement — like a heat pump, EV charger, or solar system — it may be considered part of the eligible project cost under certain programs. Ask your program administrator before starting work.</p>
        <a href="/residential_services/panel-upgrade" class="btn btn-outline btn-sm mt-3">Panel Upgrade Information</a>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Documentation We Can Provide</h2>
        <p>Many rebate programs require receipts, proof of licensed contractor work, and permit documentation. We provide:</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li>Detailed invoices with scope of work</li>
          <li>Permit documentation from the City of Calgary</li>
          <li>Proof of licensed electrician (Journeyman certificate)</li>
          <li>WCB and insurance certificates if required</li>
        </ul>
      </div>
    </div>

  </div>

  <div class="card bg-base-200 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="text-2xl font-semibold mb-2">Planning an Upgrade? Ask Us First.</h2>
      <p>If you're planning an electrical upgrade and want to know whether a rebate program might apply, mention it when you book. We'll work with you on documentation and timing to help you access whatever programs you qualify for.</p>
    </div>
  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Get a Quote for Your Upgrade" />
  </div>

</div>
