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
        description?: string;
        thumbnail?: string
	};
	const frontmatter = ast.attributes.frontmatter
		? (yaml.load(ast.attributes.frontmatter) as Frontmatter)
		: {};
</script>
<div
	class="flex justify-between px-8 text-text min-w-screen h-10 items-center bg-bgsecondary shadow-xl"
>
	<a href="/" class="font-bold">odd</a>
	<div class=" flex gap-10">
		<a href="/blog" class="font-normal">Blog</a>
	</div>
</div>
<div class="p-8 w-full flex flex-col items-center min-h-screen mt-4">
	<div class="max-w-45 flex flex-col flex-wrap justify-center">
		<div class="relative">
			<div class="flex max-w-[45rem] flex-wrap rounded-b-sm rounded-t-sm h-[20rem] max-h-[20rem] bg-cover" style="background-image: url('{frontmatter.thumbnail}');">
				<div class="w-full h-[10rem] bg-gradient-to-t  from-bgsecondary via-bgsecondary to-transparent bottom-0 rounded-b-sm absolute text-text">
					<div class="ml-2 absolute bottom-0 text-[1rem] mb-2">
						<p>{frontmatter.title}</p>
	
						<p class="text-[.80rem] mt-2 text-text">
							{frontmatter.date?.toLocaleString()}
						</p>
						<p class="text-[.80rem] mt-2 max-w-[25rem] text-[#a8a8a8]">
							{frontmatter.description}
						</p>
				</div>
				</div>
			</div>
		</div>
		<div class="text-center mt-2 ">
				<p class="text-text"> Article </p>
		</div>
		<div class="flex flex-wrap rounded-sm bg-bgsecondary mt-2 text-text px-12 py-12 max-w-[45rem]">
			<div class="flex flex-wrap">
				{@html html}
			</div>

			<p class="flex flex-start mt-4 text-sm text-[#a8a8a8]">by: {frontmatter.author}</p>
		</div>
	</div>
</div>

