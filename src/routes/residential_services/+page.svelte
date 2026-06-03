<script lang="ts">
  import PageHeader from '$lib/PageHeader.svelte';
  export let data;
</script>

<svelte:head>
  <title>Residential Electrical Services Calgary | FusedBytes Electric</title>
  <meta name="description" content="Browse all residential electrical services offered by FusedBytes Electric in Calgary — panel upgrades, EV chargers, lighting, repairs, and more." />
</svelte:head>

<PageHeader
  title="Residential Electrical Services"
  subtitle="All the electrical services your Calgary home needs, done by licensed electricians."
/>

<section class="py-16 px-6" style="background-color: #F7F9FC;">
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.posts as post}
      <a
        href={`/residential_services/${post.filename}`}
        class="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-yellow-300 hover:-translate-y-0.5 transition-all duration-200"
      >
        <div class="w-9 h-9 bg-yellow-50 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="font-bold text-slate-900 text-base mb-2 group-hover:text-yellow-700 transition-colors">{post.title}</h2>
        <p class="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
        <span class="text-yellow-600 text-sm font-semibold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    {/each}
  </div>
</section>
