<script>
    import { onMount } from 'svelte';
    import PopupForm from '$lib/PopUpForm.svelte';
  
    let images = [
      { src: '/value_prop1.png', alt: 'Image 1', width: 300, height: 200 },
      { src: '/value_prop2.png', alt: 'Image 2', width: 300, height: 200 },
      { src: '/value_prop3.png', alt: 'Image 3', width: 300, height: 200 }
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
          <div class="card w-96 bg-base-100 shadow">
              <div class="card-body">
                  <h2 class="card-title">Full Service Electrical Company</h2>
                  <p>We have the expertise and experience to fix any issue in Calgary.</p>
                  <p class="text-2xl font-bold">$120/hour</p>
                  <p class="text-xs">Half Hour Minimum</p>
                  <PopupForm buttonLabel={"Give Us A Shout"} />
                </div>
            </div>
            <!-- Card 2 -->
            <div class="card w-96 bg-base-100 shadow">
                <figure>
                    {#if imageLoaded[0]}
                    <img src={images[0].src} alt={images[0].alt} width={images[0].width} height={images[0].height} />
                    {/if}
                </figure>
            </div>
        </div>
    </div>

    <h1 class="font-bold text-4xl mt-10">Fixed Price Residential Services</h1>
    <p class="text-xs mb-4">* Includes Parts</p>
  <div class="carousel w-full mt-10">
  <div id="slide1" class="carousel-item ml-3 relative w-1/3 snap-start">
    <div class="card-bordered w-full bg-base-100 shadow">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">A New Plug or New Light Socket*</h2>
            <p>Installing a new light box or a new plug in a room with existing power</p>
            <p>$150</p>
          </div>
          <!--
            {#if imageLoaded[1]}
            <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="ml-4" />
            {/if}
            -->
        </div>
      </div>
    </div> 
    <div id="slide2" class="carousel-item ml-3 relative w-1/3 snap-start">
    <div class="card-bordered w-full bg-base-100 shadow">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">Bathroom Fan Upgrade*</h2>
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
      <div id="slide3" class="carousel-item ml-3 relative w-1/3 snap-start">
        <div class="card-bordered w-full bg-base-100 shadow">
          <div class="card-body flex flex-row items-center">
            <div class="flex-1">
              <h2 class="card-title">New Bathroom Fan*</h2>
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
        <div class = "divider"/>

    <h1 class="font-bold text-4xl mt-10">Typical Time Required</h1>
  <div class="carousel w-full mt-10">
    
        <div id="slide5" class="carousel-item ml-3 relative w-1/3 snap-start">
          <div class="card-bordered w-full bg-base-100 shadow">
              <div class="card-body flex flex-row items-center">
                <div class="flex-1">
                  <h2 class="card-title">Fix a Light That isn't Working</h2>
                  <p>If you have a light that no longer works and you need someone to troubleshoot</p>
                  <p>0.5-1 hour</p>
                </div>
              <!--
                {#if imageLoaded[2]}
                  <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="ml-4" />
                {/if}
              -->
              </div>
            </div>
            </div>
            <div id="slide5" class="carousel-item ml-3 relative w-1/3 snap-start">
              <div class="card-bordered w-full bg-base-100 shadow">
                  <div class="card-body flex flex-row items-center">
                    <div class="flex-1">
                      <h2 class="card-title">Fix a Circuit That isn't Working</h2>
                      <p>If you have a plug or whole circuit that no longer works that you need someone to troubleshoot</p>
                      <p>~1 hour</p>
                    </div>
                  <!--
                    {#if imageLoaded[2]}
                      <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="ml-4" />
                    {/if}
                  -->
                  </div>
                </div>
                </div>
    <div id="slide4" class="carousel-item ml-3 relative w-1/3 snap-start">
        <div class="card-bordered w-full bg-base-100 shadow">
            <div class="card-body flex flex-row items-center">
              <div class="flex-1">
                <h2 class="card-title">Installing Lights</h2>
                <p>Upgrading an old light fixture</p>
                <p>~20 Minutes/Light</p>
              </div>
              <!--
                {#if imageLoaded[1]}
                <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="ml-4" />
                {/if}
                -->
            </div>
          </div>
        </div> 
  <div id="slide1" class="carousel-item ml-3 relative w-1/3 snap-start">
    <div class="card-bordered w-full bg-base-100 shadow">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">A New Plug or New Light Socket</h2>
            <p>Installing a new light box or a new plug in a room with existing power</p>
            <p>1-2 hours</p>
          </div>
          <!--
            {#if imageLoaded[1]}
            <img src={images[1].src} alt={images[1].alt} width={images[1].width} height={images[1].height} class="ml-4" />
            {/if}
            -->
        </div>
      </div>
    </div> 

    <div id="slide2" class="carousel-item ml-3 relative w-1/3 snap-start">
    <div class="card-bordered w-full bg-base-100 shadow">
        <div class="card-body flex flex-row items-center">
          <div class="flex-1">
            <h2 class="card-title">Bathroom Fan Upgrade</h2>
            <p>If you have an old bathroom fan that no longer works we will replace it</p>
            <p>3 hours</p>
          </div>
        <!--
          {#if imageLoaded[2]}
            <img src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} class="ml-4" />
          {/if}
        -->
        </div>
      </div>
      </div>
      <div id="slide3" class="carousel-item ml-3 relative w-1/3 snap-start">
        <div class="card-bordered w-full bg-base-100 shadow">
          <div class="card-body flex flex-row items-center">
            <div class="flex-1">
              <h2 class="card-title">New Bathroom Fan</h2>
              <p>If you have never had a bathroom fan we can install one!</p>

              <p>4 hours</p>
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
        <div class = "divider"/>
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
