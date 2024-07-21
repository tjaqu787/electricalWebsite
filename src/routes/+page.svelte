<script>
  import "../app.css";
  import PopupForm from '$lib/PopUpForm.svelte';
  import { onMount } from 'svelte';

  let images = [
    { src: '/landing_picture_main.png', alt: 'Landing Meme', width: 300, height: 200 },
    { src: '/value_prop1.png', alt: 'Value Prop 1', width: 300, height: 200 },
    { src: '/value_prop2.png', alt: 'Value Prop 2', width: 300, height: 200 },
    { src: '/value_prop3.png', alt: 'Value Prop 3', width: 300, height: 200 },
    { src: '/safety.png', alt: 'Safety', width: 300, height: 200 }
  ];

  let imageLoaded = Array(images.length).fill(false);

  onMount(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        imageLoaded[index] = true;
      };
    });
  });
</script>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  .banner, .cta {
    padding: 1.25rem;
  }

  .card {
    width: 24rem;
    z-index: 0;
  }

  .card-body {
    padding: 1.25rem;
    z-index: 0;
  }

</style>

<div>
  <div class="flex flex-col gap-10">
    <!-- Banner -->
    <div class="banner bg-base-200">
      <div class="flex justify-between items-center">
        <!-- Card 1 -->
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Full Service Electrical Company</h2>
            <p>We have the expertise ad experience to fix any issue in Calgary.</p>
            <PopupForm buttonLabel={"Give Us A Shout"} />
          </div>
        </div>
        <!-- Card 2 -->
        <div class="card w-96 justify-end bg-base-100 shadow-xl">
          <figure>
            {#if imageLoaded[0]}
              <img src={images[0].src} alt={images[0].alt} width={images[0].width} height={images[0].height} />
            {/if}
          </figure>
        </div>
      </div>
    </div>
    <!-- Value Prop -->
    
    <div class="hero bg-base-100 shadow-xl">
      <div class="hero-content flex-col lg:flex-row">
        {#if imageLoaded[1]}
          <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="max-w-sm rounded-lg shadow-2xl" />
          {/if}
        <div>
          <h2 class="text-2xl font-bold">Convenience Mastered</h2>
          <p class="py-4">We offer evening and weekend appointments to accommodate your busy schedule.</p>
        </div>
      </div>
    </div>
    
    <div class="hero bg-base-100 shadow-xl">
      <div class="hero-content flex-col lg:flex-row">
        {#if imageLoaded[2]}
        <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="max-w-sm rounded-lg shadow-2xl" />
      {/if}
      <div>
        <h2 class="text-2xl font-bold">Trusted Service</h2>
        <p class="py-4">We have more than 10 years of electrical experience under our belt.</p>
      </div>
    </div>
  </div>
  <div class="hero bg-base-100 shadow-xl">
    <div class="hero-content flex-col lg:flex-row">
      {#if imageLoaded[3]}
        <img src={images[3].src} alt={images[3].alt} width={images[3].width} height={images[3].height} class="max-w-sm rounded-lg shadow-2xl" />
      {/if}
      <div>
        <h2 class="text-2xl font-bold">The Power of Experience</h2>
        <p class="py-4">We're here to solve your electrical problems with expertise and efficiency.</p>
      </div>
    </div>
  </div>
      
      <!-- Call to Action -->
    <div class="cta bg-base-200 flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold">Ready to Get Started?</h2>
        <PopupForm buttonLabel={"Have Something That Needs to Be Fixed?"} />
      </div>
      <div>
        {#if imageLoaded[4]}
          <img src={images[4].src} alt={images[4].alt} width={images[4].width} height={images[4].height} />
        {/if}
      </div>
    </div>
  </div>
</div>
