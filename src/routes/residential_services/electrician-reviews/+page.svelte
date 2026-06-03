<script>
  import PopupForm from '$lib/PopUpForm.svelte';
</script>

<svelte:head>
  <title>Calgary Electrician Reviews | FusedBytes Electric</title>
  <meta name="description" content="Reviews of Calgary electrical contractors offering round-the-clock support. Learn what to look for in reviews, what our customers say, and why FusedBytes Electric is trusted for after-hours electrical service." />
</svelte:head>

<div class="container mx-auto p-6">

  <h1 class="text-4xl font-bold mb-4">Reviews of Electrical Contractors Offering Round-the-Clock Support in Calgary</h1>
  <p class="text-lg mb-6">When you're searching for a reliable electrician available after hours, reviews tell the real story. Here's how to evaluate what you read — and what Calgary homeowners say about FusedBytes Electric.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">How to Read Electrician Reviews</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Look for reviews that mention specific after-hours jobs — not just "great service"</li>
          <li>Check how the company responds to negative reviews</li>
          <li>Prioritize Google and HomeStars reviews — harder to fake than website testimonials</li>
          <li>Beware of accounts with dozens of 5-star reviews posted in the same week</li>
          <li>Recent reviews matter more than old ones — companies change</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Good After-Hours Reviews Look Like</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Mentions of the electrician arriving quickly in the evening or on a weekend</li>
          <li>Honest communication about the problem and repair options</li>
          <li>Final bill matched the estimate</li>
          <li>Problem was fully resolved in one visit</li>
          <li>Reviewer felt safe and didn't feel rushed</li>
        </ul>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">What Our Customers Say</h2>
        <div class="space-y-3">
          <blockquote class="border-l-4 border-primary pl-4">
            <p>"Called FusedBytes on a Saturday night — sparking outlet in the kitchen. They were at my door within the hour. Fixed, cleaned up, fair price. Exactly what you want in an emergency."</p>
            <footer class="text-sm mt-1">— Calgary homeowner, NW Calgary</footer>
          </blockquote>
          <blockquote class="border-l-4 border-primary pl-4">
            <p>"My panel breaker wouldn't hold on a Sunday. FusedBytes came out, diagnosed a failing breaker, replaced it same day. No nonsense, clear pricing. Will use again."</p>
            <footer class="text-sm mt-1">— Calgary homeowner, SW Calgary</footer>
          </blockquote>
          <blockquote class="border-l-4 border-primary pl-4">
            <p>"Appreciated that they answered the phone directly — not a call centre. Came out the same evening, fixed the issue, and walked me through what caused it."</p>
            <footer class="text-sm mt-1">— Calgary homeowner, SE Calgary</footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-semibold mb-2">Why We Have Strong After-Hours Reviews</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>We answer calls directly — no call centre</li>
          <li>We give honest estimates before starting work</li>
          <li>No after-hours surcharge — standard $100/hour rate</li>
          <li>Licensed Journeyman Electricians on every job</li>
          <li>We explain the problem clearly before and after the repair</li>
        </ul>
      </div>
    </div>

  </div>

  <div class="card bg-base-200 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="text-2xl font-semibold mb-2">See Our Reviews</h2>
      <p>Check our Google reviews to see what Calgary homeowners say about our after-hours service. We're proud of our reputation and stand behind every job we do. If something isn't right, we make it right.</p>
    </div>
  </div>

  <div class="flex justify-center">
    <PopupForm buttonLabel="Book an Electrician" />
  </div>

</div>
