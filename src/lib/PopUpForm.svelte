<script lang="ts">
  export let buttonLabel: string;
  export let variant: 'primary' | 'outline-dark' | 'outline-light' = 'primary';

  let isOpen = false;
  let name = '';
  let email = '';
  let phone = '';
  let address = '';
  let description = '';

  function close() { isOpen = false; }

  function handleBackdrop(e: MouseEvent) {
    if (e.target === e.currentTarget) close();
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    console.log({ name, email, phone, address, description });
    close();
  }

  const btnClass = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all duration-150 cursor-pointer text-sm inline-flex items-center gap-2',
    'outline-dark': 'border-2 border-slate-800/40 hover:border-slate-800/70 bg-white/20 hover:bg-white/30 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all duration-150 cursor-pointer text-sm',
    'outline-light': 'border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-xl transition-all duration-150 cursor-pointer text-sm',
  };
</script>

<button on:click={() => isOpen = true} class={btnClass[variant]}>
  {#if variant === 'primary'}
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  {/if}
  {buttonLabel}
</button>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    on:click={handleBackdrop}
  >
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md ring-1 ring-black/5">
      <!-- Header -->
      <div class="flex items-center justify-between px-7 pt-6 pb-4 border-b border-slate-100">
        <div>
          <h2 class="text-xl font-black text-slate-900">Get a Free Quote</h2>
          <p class="text-slate-500 text-xs mt-0.5">We'll get back to you same day.</p>
        </div>
        <button
          on:click={close}
          class="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-lg hover:bg-slate-100"
          aria-label="Close"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form on:submit={handleSubmit} class="px-7 py-6 space-y-4">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5" for="pf-name">Name</label>
            <input
              id="pf-name" type="text" bind:value={name} required
              placeholder="Your name"
              class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all placeholder-slate-300"
            />
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5" for="pf-phone">Phone</label>
            <input
              id="pf-phone" type="tel" bind:value={phone} required
              placeholder="403-xxx-xxxx"
              class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all placeholder-slate-300"
            />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5" for="pf-email">Email</label>
          <input
            id="pf-email" type="email" bind:value={email} required
            placeholder="you@example.com"
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all placeholder-slate-300"
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5" for="pf-address">Calgary Address</label>
          <input
            id="pf-address" type="text" bind:value={address} required
            placeholder="Your street address"
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all placeholder-slate-300"
          />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5" for="pf-desc">What do you need?</label>
          <textarea
            id="pf-desc" bind:value={description} required rows="3"
            placeholder="Describe your electrical issue or project..."
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all resize-none placeholder-slate-300"
          ></textarea>
        </div>

        <div class="flex gap-3 pt-1">
          <button
            type="button" on:click={close}
            class="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-2.5 rounded-xl transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-2.5 rounded-xl transition-colors text-sm"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
