<script>
    let dropdownOpen = false;

    function toggleDropdown() {
      dropdownOpen = !dropdownOpen;
    }
</script>

<style>
    .dropdown-content {
      display: none;
    }

    .dropdown:hover .dropdown-content {
      display: block;
      z-index: 10;
    }
</style>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">
            <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
        </a>
    </div>
    <div class="flex-none">
        <!-- About Dropdown 
        <div class="dropdown dropdown-hover">
            <label class="btn m-1">About</label>
            <ul  class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/about/mission">Mission</a></li>
                <li><a href="/about/team">Team</a></li>
            </ul>
        </div>
        -->
        <!-- Residential Services Dropdown -->
        <div class="dropdown dropdown-hover">
            <label class="btn m-1">Residential Services</label>
            <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/residential_services/bathroom-fans">Bathroom Fans</a></li>
                <li><a href="/residential_services/data-wiring">Data Wiring</a></li>
                <li><a href="/residential_services/lighting">Lighting</a></li>
                <li><a href="/residential_services/repairs-and-troubleshooting">Repairs and Troubleshooting</a></li>
                <li><a href="/residential_services/rough-in">Rough-In</a></li>
                <li><a href="/pricing">Pricing</a></li>

            </ul>
        </div>
        <!-- Commercial Services Dropdown -->
        <div class="dropdown dropdown-hover">
            <label class="btn m-1">Pricing</label>
            <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/pricing">Pricing</a></li>
            </ul>
        </div>
        <!-- Portfolio Dropdown -->
         <!--
            <div class="dropdown dropdown-hover">
                <label tabindex="0" class="btn m-1">Portfolio</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/portfolio/projects">Projects</a></li>
                <li><a href="/portfolio/refrence">Reference</a></li>
                <li><a href="/portfolio/testimonials">Testimonials</a></li>
            </ul>
        </div>
        -->
    </div>
</div>
