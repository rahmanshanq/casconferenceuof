<script>
	const members = [
		{ role: 'Lead Organizer', name: 'Yelnura Tynysbekova', dept: 'MA, Middle Eastern Studies · University of Chicago' },
		{ role: 'Organizing Member', name: 'Atikah Adzhar', dept: 'PhD, Divinity School · University of Chicago' },
		{ role: 'Organizing Member', name: 'James Nee', dept: 'PhD, History · University of Chicago' },
		{ role: 'Organizing Member', name: 'Adam Laten Willson', dept: 'PhD, Slavic Languages and Literatures · Northwestern University' },
		{ role: 'Organizing Member', name: 'Banu Kayır', dept: 'PhD, Middle Eastern Studies · University of Chicago' },
		{ role: 'Organizing Member', name: 'Diana Wang', dept: 'MA, Divinity School · University of Chicago' }
	];

	const advisor = {
		role: 'Faculty Advisor',
		name: 'Dr. Kağan Arık',
		dept: 'Ayaslı Instructional Professor in Modern Turkish and Turkic Languages · University of Chicago',
		bio: 'Dr. Kağan Arık is the coordinator for the Modern Turkish language program at the University of Chicago since 2008. He has also been active as Lecturer in Uzbek and Central Asian Studies since 2000.'
	};
</script>

<section id="committee" class="py-24 md:py-[100px]" style="background-color: rgba(43, 46, 26, 0.90);">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-terracotta mb-3">Organizing Committee</div>
		<div class="font-heading text-cream mb-12 text-[clamp(1.8rem,3.5vw,2.8rem)]">The Team Behind the Conference</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
			{#each members as member}
				<div class="bg-white/[0.03] border border-white/[0.06] rounded-[10px] p-6 transition-colors hover:border-terracotta/25">
					<div class="text-[0.78rem] font-semibold tracking-[0.05em] uppercase text-terracotta mb-1">{member.role}</div>
					<div class="font-heading text-[1.15rem] text-cream mb-0.5">{member.name}</div>
					<div class="text-[0.82rem] text-text-muted italic">{member.dept}</div>
				</div>
			{/each}
		</div>

		<!-- Faculty Advisor -->
		<div class="mt-5 bg-terracotta/[0.04] border border-terracotta/20 rounded-[10px] p-6">
			<div class="text-[0.78rem] font-semibold tracking-[0.05em] uppercase text-terracotta mb-1">{advisor.role}</div>
			<div class="font-heading text-[1.15rem] text-cream mb-0.5">{advisor.name}</div>
			<div class="text-[0.82rem] text-text-muted italic">{advisor.dept}</div>
			<div class="text-[0.85rem] text-cream-muted mt-3 leading-relaxed">{advisor.bio}</div>
		</div>
	</div>
</section>
