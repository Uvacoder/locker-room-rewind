<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import LowerThird from './LowerThird.svelte';

	let ready = false;
	let bugReady = false;

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
			name: 'Jon Long',
			info: 'Head Coach, Eldorado High',
		},
	];

	function outro() {
		setTimeout(() => {
			ready = false;
			recycle();
		}, 10000);
	}

	function recycle() {
		setTimeout(() => {
			ready = true;
			outro();
		}, 120000); //set playback cycle for two minutes
	}

	onMount(() => {
		setTimeout(() => {
			ready = true;
			bugReady = true;
		}, 300);
		outro();
	});
</script>

<main>
	{#if ready}
		<section
			class="lower-third-container"
			transition:fly={{ x: 2000, duration: 500 }}>
			<LowerThird {subjects} />
		</section>
	{/if}
	{#if bugReady}
		<section
			class="bug-container"
			transition:fly={{ x: -500, duration: 500, delay: 500 }}>
			<img src="images/ChunkyNelms_logo.png" alt="Chunky Nelms Logo" />
		</section>
	{/if}
</main>

<style>
	.lower-third-container {
		position: absolute;
		bottom: 22vmin;
		left: 4vmin;
		right: 4vmin;
		margin: 0 3rem 0 2rem;
		height: 15vmin;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
	}
	.bug-container {
		position: absolute;
		top: 5vmin;
		left: 5vmin;
		width: 20vmin;
		height: 20vmin;
	}
	.bug-container img {
		max-width: 20vmin;
		max-height: 20vmin;
		filter: drop-shadow(-1px 0 0px rgba(255, 255, 255, 0.9))
			drop-shadow(0px -1px 0px rgba(255, 255, 255, 0.9))
			drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.9))
			drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.9));
	}
</style>
