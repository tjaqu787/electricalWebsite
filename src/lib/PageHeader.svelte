<script lang="ts">
  export let title: string;
  export let subtitle: string = '';
</script>

<div class="relative text-white overflow-hidden" style="background-color: #07111F;">
  <!-- Subtle grid texture -->
  <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 48px 48px;"></div>
  <!-- Yellow left accent -->
  <div class="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>

  <div class="relative max-w-4xl mx-auto px-6 py-14 pl-10">
    <h1 class="text-4xl sm:text-5xl font-black leading-tight tracking-tight">{title}</h1>
    {#if subtitle}
      <p class="text-lg mt-3 leading-relaxed max-w-2xl" style="color: #7A9EBD;">{subtitle}</p>
    {/if}
  </div>
</div>
