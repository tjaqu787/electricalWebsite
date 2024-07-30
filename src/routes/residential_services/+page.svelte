<script lang="ts">
    export let data;
</script>

<!-- Posts -->
<section class="posts">
    {#each data.posts as post}
        <div class="post">
            <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
					<a href={`/residential_services/${post.filename}`} class="title">{post.title}</a>
                    <p class="description">{post.excerpt}</p>
                </div>
            </div>
        </div>
    {/each}
</section>

<style>
    .posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    }


    .card {
        padding: 10px;
        border-radius: 8px;
        color: white;
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
