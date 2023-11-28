<script lang="ts">
	import meta from '$lib/data';

	const {
		meta: { title, description, purpose, requires, stripe, logo, xHandle, logoUrl, canonicalUrl },
		sections: { features, benefits, testimonials, faq, chat }
	} = meta;
	let e = $state<HTMLDivElement | undefined>(undefined);

	$effect(() => {
		if (!e) return;
		testimonials.ids.forEach((id) => {
			window.twttr.widgets.createTweet(id, e, {
				theme: 'dark',
				conversation: 'none',
				cards: 'hidden',
				dnt: true
			});
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={xHandle} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={logoUrl} />

	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={logoUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
</svelte:head>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<enhanced:img src={logo} alt={title} />
			<h1 class="text-5xl font-bold mt-10">{title}</h1>
			<h2 class="text-3xl font-bold mt-10">
				{description}
			</h2>
			<p class="mt-4 text-lg mt-10">
				{purpose}
			</p>
			<a class="btn btn-primary mt-10" href={stripe.url}>{stripe.text}</a>
			<p class="text-secondary mt-10">
				{requires}
			</p>
		</div>
	</div>
</div>

<!-- Features Section -->
{#if features.enabled}
	<section class="py-12 bg-primary">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each features.items as feature}
					<div class="p-6">
						<h3 class="text-xl font-semibold">{feature.title}</h3>
						<p class="mt-4">{@html feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Benefits Section -->
{#if benefits.enabled}
	<section class="py-12">
		<div class="container mx-auto text-center">
			<h2 class="text-3xl font-bold">{benefits.title}</h2>
			<ul class="mt-6 text-lg list-disc list-inside">
				{#each benefits.items as benefit}
					<li>{benefit.title}</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}

<!-- Testimonials Section -->
{#if testimonials.enabled}
	<section class="py-12 bg-primary">
		<div class="container mx-auto">
			<h2 class="text-3xl font-bold text-center">What People Are Saying</h2>
			<div bind:this={e} class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
		</div>
	</section>
{/if}

<!-- FAQ Section -->
{#if faq.enabled}
	<section class="py-12">
		<div class="container mx-auto">
			<h2 class="text-3xl font-bold mb-20">{faq.title}</h2>
			{#each faq.items as item}
				<div class="collapse collapse-arrow">
					<input type="radio" name="my-accordion-2" checked />
					<div class="collapse-title text-xl font-medium">{item.question}</div>
					<div class="collapse-content">
						<p>
							{@html item.answer}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

{#if chat.enabled}
	<section class="py-12 bg-primary">
		<div class="container mx-auto">
			<h2 class="text-3xl font-bold mb-20">{chat.title}</h2>
			{#each chat.items as item}
				<div class={`chat chat-${item.who === 'bot' ? 'start' : 'end'}`}>
					<div class="chat-image avatar">
						<div class="w-10 rounded-full">
							{#if item.who === 'bot'}
								<enhanced:img src={chat.botAvatar} />
							{:else}
								<enhanced:img src={chat.userAvatar} />
							{/if}
						</div>
					</div>
					<div class="chat-bubble">
						{@html item.content}
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section class="py-12">
	<div class="container mx-auto">
		<div role="alert" class="alert alert-info">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current shrink-0 w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span> {chat.continue}</span>
			<div>
				<a class="btn btn-primary mt-10" href={stripe.url}>{stripe.text}</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer Section -->
<footer class="bg-gray-700 py-6">
	<div class="container mx-auto text-center">
		<p class="text-gray-400">&copy; {new Date().getFullYear()} {title}</p>
	</div>
</footer>
