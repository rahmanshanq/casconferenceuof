<script>
	const speakers = [
		{
			name: 'Dr. Theodore C. Levin',
			role: 'Arthur R. Virgin Professor of Music, Dartmouth College',
			photo: '/img/speaker-levin.jpg',
			bio: 'Theodore Levin is a longtime student of music, expressive culture, and traditional spirituality in Central Asia and Siberia. He served as the first executive director of the Silk Road Project, founded by cellist Yo-Yo Ma. His research and advocacy activities focus on the role of arts and culture in international development, and on the preservation and revitalization of musical heritage. Author of <em>The Music of Central Asia</em>.',
			link: 'https://faculty-directory.dartmouth.edu/theodore-levin',
			linkText: 'Faculty Profile'
		},
		{
			name: 'Gulnur Mukazhanova',
			role: 'Contemporary Artist · Kazakhstan / Berlin',
			photo: '/img/speaker-gulnur.jpg',
			bio: 'A distinguished artist born in Kazakhstan and based in Berlin, Gulnur Mukazhanova weaves together Central Asian heritage with contemporary artistic enquiry. Through textiles and symbolic materials, she evokes layers of cultural and historical memory. Her works unfold as dialogues between suppressed traditions and today\u2019s shifting realities, reflecting on postcolonial experience, feminism and globalization. Recent solo exhibitions include <em>Bosaga \u2013 Transition</em> (Tselinny Center, Almaty, 2025) and <em>\u00D6liara: The Dark Moon</em> (Mimosa House, London, 2022).',
			link: 'https://gulnurmukazhanova.com/',
			linkText: 'Artist Website'
		}
	];
</script>

<section id="speakers" class="py-24 md:py-[100px]" style="background-color: rgba(43, 46, 26, 0.90);">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-terracotta mb-3">Keynote Speakers</div>
		<div class="font-heading text-cream mb-4 text-[clamp(1.8rem,3.5vw,2.8rem)]">Distinguished Voices</div>
		<p class="text-cream-muted max-w-[680px] text-base leading-relaxed mb-12">Scholars and artists whose work bridges Central Asian heritage with global conversations.</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each speakers as speaker}
				<div class="bg-white/[0.03] border border-terracotta/[0.15] rounded-xl overflow-hidden transition-all hover:border-terracotta/[0.35] hover:-translate-y-0.5">
					<img src={speaker.photo} alt={speaker.name} class="w-[140px] h-[140px] object-cover object-[center_15%] rounded-full border-[3px] border-terracotta/30 mx-auto mt-8" />
					<div class="px-8 py-5 pb-8 text-center">
						<div class="text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-terracotta mb-3">Keynote Speaker</div>
						<div class="font-heading text-[1.6rem] text-cream mb-1">{speaker.name}</div>
						<div class="text-[0.85rem] text-text-muted italic mb-4">{speaker.role}</div>
						<div class="text-[0.88rem] text-cream-muted leading-relaxed text-left">{@html speaker.bio}</div>
						<a href={speaker.link} target="_blank" rel="noopener" class="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-medium text-terracotta-light hover:text-cream transition-colors no-underline">
							{speaker.linkText} →
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>