<script lang="ts">
    export let data;
</script>

<!-- Posts -->
<section class="posts">
    {#each data.posts as post}
        <a href={`/residential_services/${post.filename}`} class="post-link">
            <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                    <h2 class="title">{post.title}</h2>
                    <p class="description">{post.excerpt}</p>
                </div>
            </div>
        </a>
    {/each}
</section>

<style>
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        padding: 20px;
    }

    .post-link {
        text-decoration: none;
        color: inherit;
    }

    .card {
        padding: 10px;
        border-radius: 8px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
        color: black;
        text-decoration: none;
    }

    .description {
        margin-top: 8px;
        font-size: 14px;
        color: black;
    }
</style>
