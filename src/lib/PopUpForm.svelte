<script lang="ts">
  import { writable } from 'svelte/store';

  export let buttonLabel: string;

  const isOpen = writable(false);
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

<label for="my_modal_7" class="btn btn-primary">{buttonLabel}</label>

<input type="checkbox" id="my_modal_7" class="modal-toggle" bind:checked={$isOpen} />
<div class="modal">
  <div class="modal-box">
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
        <label class="btn btn-nuetral mr-2" for="my_modal_7">Cancel</label>
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
  <label class="modal-backdrop" for="my_modal_7"></label>
</div>
