import { json } from '@sveltejs/kit';
import pMap from 'p-map';
import * as path from 'path';

export async function GET() {
	// Import all .md files in the directory
	const modules = import.meta.glob('../../../lib/blog/*');
	const posts: string[] = [];
	await pMap(Object.entries(modules), async function ([filename]) {
		posts.push(path.basename(filename, '.md').split('.md')[0]);
	});

	return json({
		posts
	});
}