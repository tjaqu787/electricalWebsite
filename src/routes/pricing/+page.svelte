<script>
    import { onMount } from 'svelte';
    import PopupForm from '$lib/PopUpForm.svelte';
  
    let images = [
      { src: '/path/to/image1.jpg', alt: 'Image 1', width: 300, height: 200 },
      { src: '/path/to/image2.jpg', alt: 'Image 2', width: 300, height: 200 },
      { src: '/path/to/image3.jpg', alt: 'Image 3', width: 300, height: 200 }
    ];
  
    let imageLoaded = [false, false, false];
  
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
  <div class="banner bg-base-200 p-10">
      <div class="flex justify-between items-center">
          <!-- Card 1 -->
          <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                  <h2 class="card-title">Full Service Electrical Company</h2>
                  <p>We have the expertise and experience to fix any issue in Calgary.</p>
                  <p class="text-2xl font-bold">$120/hour</p>
                  <p class="text-xs">Half Hour Minimum</p>
                  <PopupForm buttonLabel={"Give Us A Shout"} />
                </div>
            </div>
            <!-- Card 2 -->
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                    {#if imageLoaded[0]}
                    <img src={images[0].src} alt={images[0].alt} width={images[0].width} height={images[0].height} />
                    {/if}
                </figure>
            </div>
        </div>
    </div>

    <h1 class="font-bold text-4xl">Fixed Price Residential Services</h1>
    <p class="text-xs mb-4">* Does not include parts</p>
  <div class="carousel w-full mt-10">
    <div id="slide4" class="carousel-item relative w-1/3 snap-start">
        <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body flex flex-row items-center">
              <div class="flex-1">
                <h2 class="card-title">Installing Lights*</h2>
                <p>Upgrading an old light fixture</p>
                <p>$60/light</p>
              </div>
              <!--
                {#if imageLoaded[1]}
                <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="ml-4" />
                {/if}
                -->
            </div>
          </div>
        </div> 
  <div id="slide1" class="carousel-item relative w-1/3 snap-start">
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">A New Plug or New Light Socket</h2>
            <p>Installing a new light box or a new plug in a room with existing power</p>
            <p>$180</p>
          </div>
          <!--
            {#if imageLoaded[1]}
            <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="ml-4" />
            {/if}
            -->
        </div>
      </div>
    </div> 
    <div id="slide2" class="carousel-item relative w-1/3 snap-start">
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">Bathroom Fan Upgrade</h2>
            <p>If you have an old bathroom fan that no longer works we will replace it</p>
            <p>$500</p>
          </div>
        <!--
          {#if imageLoaded[2]}
            <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="ml-4" />
          {/if}
        -->
        </div>
      </div>
      </div>
      <div id="slide3" class="carousel-item relative w-1/3 snap-start">
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="card-body flex flex-row items-center">
            <div class="flex-1">
              <h2 class="card-title">New Bathroom Fan</h2>
              <p>If you have never had a bathroom fan we can install one!</p>

              <p>$600</p>
            </div>
          <!--
            {#if imageLoaded[2]}
              <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="ml-4" />
            {/if}
          -->
          </div>
        </div>
        </div>
        </div>
        <div class="banner bg-base-200 p-10">
        </div>
  
<style lang="postcss">
    .card-body {
      display: flex;
      align-items: center;
    }
  </style>
  