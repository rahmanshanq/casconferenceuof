<script>
	import '../app.css';
</script>

<!-- Fixed artwork background -->
<div class="fixed inset-0 bg-center bg-no-repeat" style="background-image: url('/img/artwork-bg.webp'); background-size: 150%; z-index: -1;"></div>

<!-- Content on top -->
<div>
	<slot />
</div>
