<script>
	let mobileOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-green-dark/[0.92] backdrop-blur-md border-b border-terracotta/[0.15]">
	<div class="max-w-[1100px] mx-auto px-6 flex items-center justify-between py-3">
		<a href="#" class="flex items-center gap-3 font-heading text-[1.05rem] font-semibold text-cream no-underline">
			<img src="/img/cass-logo.png" alt="CASS" class="h-9" />
			CAS Conference 2026
		</a>

		<button
			class="md:hidden bg-transparent border-none text-cream text-2xl cursor-pointer"
			onclick={() => mobileOpen = !mobileOpen}
			aria-label="Toggle menu"
		>
			&#9776;
		</button>

		<div class="hidden md:flex gap-6 items-center">
			<a href="#about" class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider hover:text-terracotta-light transition-colors no-underline">About</a>
			<a href="#speakers" class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider hover:text-terracotta-light transition-colors no-underline">Speakers</a>
			<a href="#schedule" class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider hover:text-terracotta-light transition-colors no-underline">Schedule</a>
			<a href="#festival" class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider hover:text-terracotta-light transition-colors no-underline">Music Festival</a>
			<a href="#committee" class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider hover:text-terracotta-light transition-colors no-underline">Committee</a>
			<a href="#register" class="text-[0.78rem] font-medium text-terracotta-light uppercase tracking-wider hover:text-cream transition-colors no-underline">Register</a>
		</div>
	</div>

	{#if mobileOpen}
		<div class="md:hidden flex flex-col gap-3 px-6 pb-4 border-b border-terracotta/[0.15] bg-green-dark/[0.97]">
			<a href="#about" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider no-underline">About</a>
			<a href="#speakers" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider no-underline">Speakers</a>
			<a href="#schedule" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider no-underline">Schedule</a>
			<a href="#festival" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider no-underline">Music Festival</a>
			<a href="#committee" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-cream-muted uppercase tracking-wider no-underline">Committee</a>
			<a href="#register" onclick={() => mobileOpen = false} class="text-[0.78rem] font-medium text-terracotta-light uppercase tracking-wider no-underline">Register</a>
		</div>
	{/if}
</nav>
