export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    excerpt: string
    filename : string
    ogImage: string
    url: string
    published: boolean
}