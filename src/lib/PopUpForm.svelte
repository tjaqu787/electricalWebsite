<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    export let buttonLabel: string;
  
    const isOpen = writable(true);
    const formData = writable({
      name: '',
      email: '',
      phone: '',
      address: '',
      description: ''
    });
  
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      const { name, value } = target;
      formData.update(current => ({
        ...current,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      // Perform form validation or submission here
      formData.subscribe(value => {
        console.log('Form submitted:', value);
      })();
      isOpen.set(false);
    };
  </script>
  
  <style>
    .modal {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 50;
    }
  
    .modal-content {
      background: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      width: 24rem;
    }
  </style>
  
  <button class="btn btn-primary" on:click={() => isOpen.set(true)}>
    {buttonLabel}
  </button>
  
  {#if $isOpen}
    <div class="modal">
      <div class="modal-content">
        <h2 class="text-xl font-bold mb-4">Input Form</h2>
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="name">Name</label>
            <input
              class="input input-bordered w-full"
              type="text"
              id="name"
              name="name"
              bind:value={$formData.name}
              on:input={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input
              class="input input-bordered w-full"
              type="email"
              id="email"
              name="email"
              bind:value={$formData.email}
              on:input={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="phone">Phone Number</label>
            <input
              class="input input-bordered w-full"
              type="tel"
              id="phone"
              name="phone"
              bind:value={$formData.phone}
              on:input={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="address">Address</label>
            <input
              class="input input-bordered w-full"
              type="text"
              id="address"
              name="address"
              bind:value={$formData.address}
              on:input={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="description">Description</label>
            <textarea
              class="textarea textarea-bordered w-full"
              id="description"
              name="description"
              bind:value={$formData.description}
              on:input={handleChange}
              required
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button class="btn btn-secondary mr-2" type="button" on:click={() => isOpen.set(false)}>
              Cancel
            </button>
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
  