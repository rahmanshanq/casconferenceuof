<script>
	let days = $state('--');
	let hours = $state('--');
	let mins = $state('--');
	let secs = $state('--');
	let isLive = $state(true);

	function updateCountdown() {
		const target = new Date('2026-04-17T08:00:00-05:00');
		const now = new Date();
		const diff = target - now;
		if (diff <= 0) {
			isLive = true;
			return;
		}
		days = Math.floor(diff / 86400000);
		hours = Math.floor((diff % 86400000) / 3600000);
		mins = Math.floor((diff % 3600000) / 60000);
		secs = Math.floor((diff % 60000) / 1000);
	}

	$effect(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<section id="home" class="min-h-screen flex items-center justify-center text-center pt-[120px] pb-20 px-5 relative overflow-hidden">
	<div class="absolute inset-0 bg-green-dark/[0.75]"></div>

	<div class="relative z-10 w-full max-w-[1100px] mx-auto">
		<div class="inline-block text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2 rounded-full mb-6 bg-gold/[0.06]">
			Inaugural Conference
		</div>

		<h1 class="font-heading font-normal text-cream max-w-[820px] mx-auto mb-5 leading-tight text-[clamp(1.6rem,5.5vw,4rem)]">
			Voices through Art &amp; Culture: <em class="italic text-terracotta-light">Identity Formation in Central Asia, from Music to Architecture</em>
		</h1>

		<p class="text-[0.95rem] md:text-[1.1rem] text-cream-muted mb-8 font-light px-2">
			<strong class="text-gold font-medium">The first</strong> <strong class="text-cream font-medium">Central Asian Studies Conference</strong> at the <strong class="text-cream font-medium">University of Chicago</strong><br />
			<strong class="text-cream font-medium">April 17–18, 2026</strong> · Ida Noyes Library, University of Chicago
		</p>

		{#if isLive}
			<div class="font-heading text-[1.4rem] text-terracotta-light italic mb-10">The conference has concluded. Thank you for joining us!</div>
		{:else}
			<div class="flex gap-2 md:gap-5 justify-center mb-10 flex-wrap">
				{#each [['days', days, 'Days'], ['hours', hours, 'Hours'], ['mins', mins, 'Minutes'], ['secs', secs, 'Seconds']] as [, value, label]}
					<div class="text-center border border-gold/30 bg-gold/[0.06] rounded-lg px-3 md:px-5 py-3 min-w-[64px] md:min-w-[80px]">
						<div class="font-heading text-[2.2rem] md:text-[3.2rem] font-bold text-terracotta-light leading-none">{value}</div>
						<div class="text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.12em] text-text-muted mt-1.5">{label}</div>
					</div>
				{/each}
			</div>
		{/if}

		<div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
			<a href="#schedule" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-terracotta text-cream px-7 py-3.5 rounded-md text-[0.9rem] font-medium tracking-wide hover:bg-terracotta-dark transition-all hover:-translate-y-0.5 no-underline">
				View the Program →
			</a>
		</div>

		<div class="w-[60px] h-px bg-terracotta/50 mx-auto mt-12"></div>
	</div>
</section>
