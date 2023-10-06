<script lang="ts">
	import Markdoc from '@markdoc/markdoc';
	import yaml from 'js-yaml';
	export let data;
	const ast = Markdoc.parse(data.document);
	const content = Markdoc.transform(ast);
	const html = Markdoc.renderers.html(content);
	type Frontmatter = {
		title?: string;
		author?: string;
		date?: Date;
		categories?: string | Array<string>;
		description?: string;
	};

	const frontmatter = ast.attributes.frontmatter
		? (yaml.load(ast.attributes.frontmatter) as Frontmatter)
		: {};

	if (frontmatter.categories) {
		const hashtag = frontmatter.categories.split(',');
		frontmatter.categories = hashtag;
	}
</script>

<div class="flex flex-col min-h-screen">
	<div
		class="flex justify-between px-8 text-text min-w-screen h-10 items-center border-b-2 border-b-primary border-dashed"
	>
		<a href="/" class="font-bold"><span class="text-primary">Odd</span>baijanian</a>
		<div class=" flex gap-10">
			<a href="/about" class="font-normal">About</a>
			<a href="/blog" class="font-normal">Blog</a>
		</div>
	</div>

	<div class="overflow-hidden w-full min-h-screen flex justify-center items-center">
		<article class="prose prose-h1:text-text prose-strong:text-text text-text">
			<span class="flex flex-row gap-2 text-center text-2xl font-semibold text-primary">
				{frontmatter.title}
			</span>
			<span class="flex flex-row gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#5d4de1"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user"
					><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
						cx="12"
						cy="7"
						r="4"
					/></svg
				>
				{frontmatter.author}
			</span>
			<span class="flex flex-row gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#5d4de1"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-calendar"
					><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line
						x1="16"
						x2="16"
						y1="2"
						y2="6"
					/><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg
				>
				{frontmatter.date}
			</span>
			<span class="flex flex-row mt-2 gap-2 mb-2">
				{#each frontmatter.categories as category}
					<a href="/" class="text-secondary hover:underline no-underline hover:cursor-pointer"
						>#{category}</a
					>
				{/each}
			</span>
			{@html html}
		</article>
	</div>
</div>
