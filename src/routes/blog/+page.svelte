<script lang="ts">
	export let data;
</script>

<div
	class="flex justify-between px-8 text-text min-w-screen h-10 items-center border-b-2 border-b-primary border-dashed"
>
	<a href="/" class="font-bold"><span class="text-primary">Odd</span>baijanian</a>
	<div class=" flex gap-10">
		<a href="/about" class="font-normal">About</a>
		<a href="/blog" class="font-normal">Blog</a>
	</div>
</div>

<div class="flex w-full flex-col min-h-screen px-32">
	<div class="flex justify-start text-2xl mt-12 px-4 text-text">
		<span class="font-bold text-2xl"> Latest Posts </span>
	</div>
	<span class="border-b-2 border-b-primary w-full border-dashed px-2 mt-4 mb-8" />
	<div class="flex justify-start flex-col px-64 text-text">
		{#each data.posts as post}
			<div class="flex flex-col">
				<a href="/blog/{post.path}" class="text-text font-semibold text-2xl hover:cursor-pointer"
					>{post.title}</a
				>
				<span class="text-normal text-link no-underline text-sm">
					<p><span class="text-text">Author:</span> {post.author}</p></span
				>
				<span class="text-normal text-link no-underline text-sm">
					<p><span class="text-text">Uploaded At:</span> {post.date}</p></span
				>
				<span class="text-normal text-link no-underline text-sm">
					<p class="mt-2 mb-2">
						{#each post.categories as category}
							<span
								class="w-full bg-primary text-text text-xs font-medium mr-2 px-4 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
								>{category}</span
							>
						{/each}
					</p>
					<p class="text-text">{post.desc}</p>
				</span>
				<span class="border-b-2 border-b-primary w-full border-dashed px-2 mt-4 mb-8" />
			</div>
		{/each}
	</div>
</div>
