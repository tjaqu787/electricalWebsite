import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types.ts'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('$lib/content/residential_services/*.md', { eager: true })
	for (const path in paths) {
		const file = paths[path]
		const fileName = path.split('/').at(-1)?.replace('.md', '')
		if (file && typeof file === 'object' && 'metadata' in file && fileName) {
			const metadata = file.metadata as Omit<Post, 'fileName'>;
			
			// Construct the Post object and push it to the posts array
			const post: Post = {
				title: metadata.title,
				excerpt: metadata.excerpt,
				filename: fileName,
				ogImage: metadata.ogImage,
				url: metadata.url,
				published: metadata.published

			};
			
			posts.push(post);
		}
	}

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}