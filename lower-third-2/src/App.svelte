<script>
	import { fade, fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import LowerThird from './LowerThird.svelte';

	const subjects = [
		{
			name: 'Ryan Reynolds',
			info: 'Sports Anchor, KLST',
		},
		{
			name: 'Jaydon Hart',
			info: 'Sports Director, KSAN',
		},
		{
			name: 'Coach Whatshisname',
			info: 'Some School, Some City',
		},
	];
</script>

<main>
	<section
		class="lower-third-container"
		transition:fly={{ x: 2000, duration: 300, delay: 200 }}>
		<LowerThird {subjects} />
	</section>
</main>

<style>
	main {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	.lower-third-container {
		position: absolute;
		bottom: 20vmin;
		left: 4vmin;
		right: 4vmin;
		height: 15vmin;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}
</style>
