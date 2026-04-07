<script>
	let activeTab = $state('friday');

	const schedule = {
		friday: [
			{ time: '8:00 AM – 9:00 AM', title: 'Registration, Opening Remarks & Breakfast', type: 'break' },
			{
				time: '9:00 AM – 10:15 AM',
				title: 'Panel 1: Continuations of Traditional Culture: Performance, Patronage and Heritage',
				type: 'panel',
				moderator: 'Dr. Theodore C. Levin',
				speakers: [
					{ name: 'Diana Wang', affiliation: 'University of Chicago', talk: '\u201CBetween Minority and Nationalism: Transnational UNESCO Intangible Heritage Inscriptions in the Case of Kh\u00F6\u00F6mei and the Epic of Manas.\u201D' },
					{ name: 'Aibek Baiymbetov', affiliation: 'Wesleyan University', talk: '\u201CLiving Tradition in Action: The Chronotope of the Manas Epic Performance.\u201D' },
					{ name: 'Damon R. Postle', affiliation: 'Independent Scholar', talk: '\u201CThere Will Always Be Kh\u00F6\u00F6mei if Tyvans Are on the Land.\u201D Modern Identity and Transmission of Folksong in the Center of Asia.' }
				]
			},
			{
				time: '10:30 AM – 11:45 AM',
				title: 'Panel 2: Culture and Textile: Visual Representations of Identity',
				type: 'panel',
				moderator: 'Dr. Erica Warren',
				speakers: [
					{ name: 'James Nee', affiliation: 'University of Chicago', talk: '\u201CFashioning the Nation in Central Asia, 1886\u20131968.\u201D' },
					{ name: 'Ekaterina Kulinicheva', affiliation: 'Northwestern University', talk: '\u201C\u2018Eastern\u2019 Textiles, Identity Formation, and Agency in Early Soviet Central Asia.\u201D' },
					{ name: 'Dr. Elmira Gyul', affiliation: 'The Silk Road International Research Institute', talk: '\u201CVoices in Thread: Sufi Visual Codes and Spiritual Identity in the Art of Suzani.\u201D' }
				]
			},
			{
				time: '12:00 PM – 1:15 PM',
				title: 'Panel 3: Colonial Encounters in the Soviet Period',
				type: 'panel',
				moderator: 'Dr. Leah Feldman',
				speakers: [
					{ name: 'Elena Leonenko', affiliation: 'University of California, Berkeley', talk: '\u201CCutting Siberia, Assembling Central Asia: Viktor Ufimtsev\u2019s Collages.\u201D' },
					{ name: 'Aleksandra Khuzina', affiliation: 'University of Illinois-Chicago', talk: '\u201CStill Life or Landscape?: Nature in Turin\u2019s Turksib (1929).\u201D' },
					{ name: 'Ivan Cherniakov', affiliation: 'University of Illinois, Urbana-Champaign', talk: '\u201CThe Soviet Plantation: Was the Soviet Landscape Colonial?\u201D' }
				]
			},
			{ time: '1:15 PM – 2:30 PM', title: 'Lunch', type: 'break' },
			{
				time: '2:30 PM – 3:45 PM',
				title: 'Panel 4: Memory and Loss in Central Asia',
				type: 'panel',
				moderator: 'Dr. Holly Shissler',
				speakers: [
					{ name: 'Saadat Musabaeva', affiliation: 'Independent Scholar | Kellogg Institute for International Studies', talk: '\u201CBuilding Home in the Throat: Kyrgyz Folk Singing, Embodied Memory, and Intergenerational Trauma.\u201D' },
					{ name: 'Lolisanam Ulugova', affiliation: 'Independent Scholar | Art Curator', talk: '\u201CAnimating Silence: Animation, Trauma, and Cultural Voice in Tajikistan.\u201D' },
					{ name: 'Zhaina Meirkhan', affiliation: 'University of Michigan, Ann Arbor', talk: '\u201CThe Forced Migrations of Kazakhs in 20th Century Eurasian Steppe and Beyond.\u201D' }
				]
			},
			{
				time: '4:00 PM – 5:15 PM',
				title: 'Panel 5: Beyond the External Gaze: Challenging Marginalized Identity',
				type: 'panel',
				moderator: 'Dr. Michael Bechtel',
				speakers: [
					{ name: 'Dimitri Staszewski', affiliation: 'Independent Scholar | Documentary Photographer', talk: '\u201CThe World at Night: The Spiritual Place of Wolves in Kazakh Herding Culture.\u201D' },
					{ name: 'Michael Lindsey', affiliation: 'University of California, Santa Cruz', talk: '\u201CHeritage, Chops, and Humor: Glimpses of Identity among Professional Drummers in Kabul.\u201D' },
					{ name: 'Byambasuren Enkhee', affiliation: 'Independent Researcher', talk: '\u201CFinding one\u2019s own color,\u201D or, gender politics within the stand-up comedy industry in Ulaanbaatar.' }
				]
			},
			{
				time: '5:30 PM – 6:45 PM',
				title: 'Keynote Address \u2014 Gulnur Mukazhanova',
				type: 'keynote',
				talk: '\u201CContemporary Art from Kazakhstan: Identity, Memory and Cultural Transformation\u201D'
			},
			{ time: '6:45 PM – 7:45 PM', title: 'Dinner, Cello and Viola Performance', type: 'break' }
		],
		saturday: [
			{ time: '8:00 AM – 9:00 AM', title: 'Breakfast', type: 'break' },
			{
				time: '9:00 AM – 10:15 AM',
				title: 'Panel 6: Nomadic Identifiers: Imagining Identity Through Local, Regional, and Digital Scales',
				type: 'panel',
				speakers: [
					{ name: 'Gulzada Xan', affiliation: 'Carleton College', talk: '\u201CFrom Heated Rivalries to Shared Cheers: Sport and Identity in Central Asia.\u201D' },
					{ name: 'Munkh-Ochir Surenjav', affiliation: 'University of Cincinnati', talk: '\u201CMalchin (Herder) Starter Pack: Cultural Production of Rural Imaginaries in Mongolia through Social Media.\u201D' },
					{ name: 'Abdrasul Isakov, Mirlanbek Nurmatov', affiliation: 'Independent Researchers', talk: '\u201CThe Importance Of The Term \u2018Kyrgyz\u2019 As A Place Name In The Formation Of Kyrgyz Identity.\u201D' }
				]
			},
			{
				time: '10:30 AM – 11:45 AM',
				title: 'Panel 7: Musical Creativity through Time and Borders',
				type: 'panel',
				moderator: 'Dr. Philip V. Bohlman',
				speakers: [
					{ name: 'Dr. Dave Fossum', affiliation: 'Arizona State University', talk: '\u201CRemembered Innovation: Indigenous Turkmen Strategies for Historicizing Musical Creativity.\u201D' },
					{ name: 'Bita Takrimi', affiliation: 'Northwestern University', talk: '\u201CBetween Herat and Bukhara: Afghan Classical Music in the Persianate Cultural Sphere.\u201D' },
					{ name: 'Dr. Charlotte D\u2019Evelyn', affiliation: 'Skidmore College', talk: '\u201CThe Choor Fiddle and Sonic Imagination of the Past in Inner Mongolia, China.\u201D' }
				]
			},
			{ time: '11:45 AM – 12:30 PM', title: 'Lunch', type: 'break' },
			{
				time: '12:30 PM – 1:45 PM',
				title: 'Keynote Address \u2014 Dr. Theodore C. Levin',
				type: 'keynote',
				talk: '\u201CExploring Central Asia through the Arts: A Half-Century\u2019s Observations.\u201D'
			},
			{
				time: '2:00 PM – 3:45 PM',
				title: 'Panel 8: Women As The Agents Of Social Change In Kazakhstan: Voices Of Women In Art',
				type: 'panel',
				speakers: [
					{ name: 'Dr. Moldiyar Yerbekov', affiliation: 'Nazarbayev University', talk: '\u201CFemale Leadership and Collaboration in Contemporary Kazakh Cinema and Creative Industries.\u201D' },
					{ name: 'Aigerim Kussaiynkyzy', affiliation: 'Maqsut Narikbayev University', talk: '\u201CWomen, Voice, and Symbolic Capital: Positioning Female Artists in Kazakhstan\u2019s Contemporary Music Field.\u201D' },
					{ name: 'Dr. Zhazira Agabekova', affiliation: 'Nazarbayev University', talk: '\u201CConcepts of Rights and Freedom in the Poetic Space of Kazakh Women Poets.\u201D' },
					{ name: 'Dr. Funda G\u00FCven', affiliation: 'Nazarbayev University', talk: '\u201CFrom Abjection to Agency: Reconfiguring the Visibility of the Female Body in Contemporary Art in Kazakhstan.\u201D' }
				]
			},
			{
				time: '2:00 PM – 3:45 PM · Ida Noyes',
				title: 'Panel 9: Diaspora, Ethnography and Turkology',
				type: 'panel',
				moderator: 'Dr. Ka\u011Fan Ar\u0131k',
				speakers: [
					{ name: 'Tianyi Yuan', affiliation: 'University of Chicago', talk: '\u201CTian and Tengri on the K\u00FCl Tigin Monument: Bilingual Inscription and Nomadic Political Cosmology.\u201D' },
					{ name: 'Isa Youshe', affiliation: 'Harvard University', talk: '\u201CSeals, Colophons, and Community: Turki Manuscripts and Cultural Authority in the Tarim Oases.\u201D' },
					{ name: 'Andi Sun', affiliation: 'University of Chicago', talk: '\u201CThe Journey of Babur\u2019s Falcon: Central Asianness through Literary Transmission.\u201D' },
					{ name: 'Cai Jinfu', affiliation: 'Shihezi University', talk: '\u201CThe Sacred Construction of Historical Memory in Kazakhstan: A Case Study of the Ulytau.\u201D' }
				]
			},
			{
				time: '3:45 PM – 5:00 PM',
				title: 'Panel 10: Making Soviet Central Asia through Literature',
				type: 'panel',
				moderator: 'Adam Laten Willson',
				speakers: [
					{ name: 'Zhanyl Adisbekova', affiliation: 'Independent Scholar', talk: '\u201CWomen\u2019s Emancipation And The Formation Of Hybrid Identities In Soviet Central Asia: Chyngyz Aitmatov\u2019s The First Teacher.\u201D' },
					{ name: 'Eleanor Womack', affiliation: 'Yale University', talk: '\u201CExcavating Socialist Realism: Land and Literary Form in Ghabiden M\u016Bstafin\u2019s Qaraghandy.\u201D' },
					{ name: 'Assel Uvaliyeva', affiliation: 'University of Southern California', talk: '\u201CStone Witnesses: Material Culture and Counter-Memory in Abish Kekilbayev\u2019s Ballads of Forgotten Years.\u201D' }
				]
			},
			{ time: '5:15 PM – 6:15 PM', title: 'Dinner | Arzan Cafe | Closing Remarks', type: 'break' },
			{
				time: '6:15 PM – 8:30 PM',
				title: 'Alash and Tuvergen Concert',
				type: 'keynote',
				talk: 'Rockefeller Memorial Chapel · 5850 S Woodlawn Ave, Chicago, IL 60637'
			}
		]
	};
</script>

<section id="schedule" class="py-24 md:py-[100px]" style="background-color: rgba(58, 61, 37, 0.92);">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-terracotta mb-3">Program Schedule</div>
		<div class="font-heading text-cream mb-4 text-[clamp(1.8rem,3.5vw,2.8rem)]">Conference Program</div>
		<p class="text-cream-muted max-w-[680px] text-base leading-relaxed mb-9">Two days of panels, keynote addresses, and conversation across disciplines.</p>

		<!-- Tabs -->
		<div class="flex gap-3 mb-9">
			<button
				onclick={() => activeTab = 'friday'}
				class="px-6 py-2.5 border rounded-md text-[0.85rem] font-medium transition-all {activeTab === 'friday' ? 'bg-terracotta border-terracotta text-cream' : 'bg-transparent border-terracotta/30 text-cream-muted hover:bg-terracotta hover:border-terracotta hover:text-cream'}"
			>
				Friday, April 17
			</button>
			<button
				onclick={() => activeTab = 'saturday'}
				class="px-6 py-2.5 border rounded-md text-[0.85rem] font-medium transition-all {activeTab === 'saturday' ? 'bg-terracotta border-terracotta text-cream' : 'bg-transparent border-terracotta/30 text-cream-muted hover:bg-terracotta hover:border-terracotta hover:text-cream'}"
			>
				Saturday, April 18
			</button>
		</div>

		<!-- Location -->
		<div class="text-[0.82rem] text-text-muted mb-7">Ida Noyes Library · 1212 E 59th St, Chicago, IL 60637</div>

		<!-- Timeline -->
		<div class="border-l-2 border-terracotta/25 pl-7 ml-2">
			{#each schedule[activeTab] as item}
				<div class="relative mb-2">
					<!-- Dot -->
					<div class="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-terracotta"></div>

					{#if item.type === 'break'}
						<div class="bg-terracotta/[0.06] rounded-md px-4 py-2.5 my-1">
							<div class="text-[0.78rem] font-semibold text-terracotta-light tracking-wide mb-1">{item.time}</div>
							<div class="font-heading text-[1rem] text-gold">{item.title}</div>
						</div>

					{:else if item.type === 'keynote'}
						<div class="bg-terracotta/[0.08] border border-terracotta/20 rounded-lg px-5 py-5 my-1">
							<div class="text-[0.78rem] font-semibold text-terracotta-light tracking-wide mb-1">{item.time}</div>
							<div class="font-heading text-[1.15rem] text-cream mb-1">{item.title}</div>
							{#if item.talk}
								<div class="text-[0.88rem] italic text-terracotta-light">{item.talk}</div>
							{/if}
						</div>

					{:else}
						<div class="py-4 border-b border-white/[0.04]">
							<div class="text-[0.78rem] font-semibold text-terracotta-light tracking-wide mb-1">{item.time}</div>
							<div class="font-heading text-[1.15rem] text-cream mb-1">{item.title}</div>
							{#if item.moderator}
								<div class="text-[0.8rem] text-text-muted italic mb-2">Moderator: {item.moderator}</div>
							{/if}
							{#if item.speakers}
								{#each item.speakers as speaker}
									<div class="text-[0.82rem] text-cream-muted py-1 leading-relaxed">
										<span class="text-cream font-medium">{speaker.name}</span>
										({speaker.affiliation}) – {speaker.talk}
									</div>
								{/each}
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="text-[0.78rem] text-text-muted mt-6 italic">* Panels #8 and #9 will occur concurrently.</div>
	</div>
</section>
