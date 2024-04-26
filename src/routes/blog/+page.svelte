<script lang="ts">
	export let data;
	console.log(data)
</script>

<div
	class="flex flex-wrap justify-between px-8 text-text min-w-screen h-10 items-center bg-bgsecondary shadow-xl"
>
	<a href="/" class="font-bold">Gin | Blog</a>
	<div class=" flex gap-10">
		<a href="/blog" class="font-normal">Blog</a>
	</div>
</div>

<div class="flex flex-col w-full gap-y-4 min-h-screen px-32">
	<div class="flex justify-center text-2xl mt-12 px-4 text-text">
		<span class="font-bold text-2xl text-center"> Latest Posts </span>
	</div>
	<div class="flex flex-col  items-center w-full gap-y-4 justify-center px-72 text-text">
		{#each data.posts as post }
			<div class="flex flex-col w-[340px] min-w-[240px] bg-bgsecondary">
				<img class="rounded-t-sm min-w-[240px] w-full h-[125px]" height="72" width="72" src={post.thumbnail} alt="">
				<div class="px-4 py-2">
						<a href="/blog/{post.path}" class="text-md font-semibold mt-8">{post.title}</a>
						<p class="text-xs text-[#a8a8a8] mt-2 mb-2 font-normal">{post.description}</p>
					<div class="flex flex-row justify-between mt-10 mb-2 items-center">
						<div class="flex flex-row items-center">
							<img src="https://i.pinimg.com/736x/55/ca/e2/55cae21af16ffd9d000d73e3c6577f5d.jpg" class="rounded-full w-4 h-4" alt=""> <p class="text-xs text-center ml-[0.20rem]">{post.author}</p>
						</div>
						<div>
							<p class="text-xs text-center">{post.date.toLocaleString()}</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
