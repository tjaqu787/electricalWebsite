  <script>
    import PopUpForm from '$lib/PopUpForm.svelte';
import PopupForm from '$lib/PopUpForm.svelte';

  </script>
  
  <!-- Meta Information -->
  <svelte:head>
    <meta name="title" content="Electrician for Renovations">
    <meta name="description" content="Most renovations need electrical work including boxes and wiring while the walls are open.">
  </svelte:head>
  
  <!-- DaisyUI Container -->
  <div class="container mx-auto p-6">
  
    <!-- Page Title -->
    <h1 class="text-4xl font-bold mb-4">Rough-In Service</h1>
  
    <!-- Content -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl font-semibold mb-2">What is an Electrical Rough-In?</h2>
        <p class="mb-4">The electrical rough-in process involves installing all electrical boxes, wiring, and other infrastructure components before the walls are closed with drywall. This is a critical stage in any renovation, as it lays the groundwork for all future electrical elements, including outlets, switches, light fixtures, and appliances.</p>
        <PopupForm  buttonLabel ="Contact for a Quote"/>
      </div>
    </div>
    <div class="divider"/>
    <div class="grid grid-cols-1 gap-4">

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl font-semibold mb-2">Step 1: Planning & Design</h3>
          <p class="mb-4">We work with you to create a detailed plan that considers what you're looking for in your newly renovated space. This includes any special placement of outlets, light fixtures, or high-powered appliances.</p>
        </div>
      </div>
    
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl font-semibold mb-2">Step 2: The Build</h3>
          <p class="mb-4">This is the implementation step of the process. We will run wires, install electrical boxes for outlets, switches, and light fixtures, and ensure all connections are secure.</p>
        </div>
      </div>
    
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-xl font-semibold mb-2">Step 3: Inspection</h3>
          <p class="mb-4">Before the walls are closed up, an inspection by a city building inspector is often required to ensure all installations meet electrical codes and safety standards.</p>
        </div>
      </div>
      <PopUpForm buttonLabel="Contact for a Quote"/>
    </div>
  </div>
  