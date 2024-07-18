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