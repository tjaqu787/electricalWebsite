<script>

import "../app.css";
import TopBar from '$lib/TopBar.svelte';
</script>

<div class="layout">
    <TopBar/>

<main class="container mx-auto">
    <slot />
  </main>
</div>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
