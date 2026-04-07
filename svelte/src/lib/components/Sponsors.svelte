<script>
	const sponsors = [
		{ src: '/img/cass-logo.png', alt: 'Central Asian Studies Society' },
		{ src: '/img/cmes.png', alt: 'Center for Middle Eastern Studies' },
		{ src: '/img/ceas-color.png', alt: 'Center for East Asian Studies' },
		{ src: '/img/music-color.svg', alt: 'UChicago Department of Music' },
		{ src: '/img/franke.png', alt: 'Franke Institute for the Humanities' },
		{ src: '/img/ceeres.png', alt: 'CEERES' },
		{ src: '/img/art-history.png', alt: 'Department of Art History' },
		{ src: '/img/dova.png', alt: 'Department of Visual Arts' }
	];
</script>

<section id="sponsors" class="py-24 md:py-[100px]" style="background-color: rgba(245, 240, 227, 0.95);">
	<div class="max-w-[1100px] mx-auto px-6 text-center">
		<div class="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-terracotta-dark mb-3">Sponsors & Partners</div>
		<div class="font-heading text-green-dark mb-12 text-[clamp(1.8rem,3.5vw,2.8rem)]">Supported By</div>

		<div class="flex flex-wrap gap-12 justify-center items-center">
			{#each sponsors as sponsor}
				<img src={sponsor.src} alt={sponsor.alt} class="h-[60px]" />
			{/each}
		</div>
	</div>
</section>
