<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	export let subjects;
</script>

<article class="lower-third" transition:fly={{ x: 2000, duration: 300 }}>
	<div class="logo">
		<img src="images/lrr-logo.png" alt="logo" />
	</div>
	<section class="subjects-section">
		{#each subjects as subject, index}
			<div
				class="subject"
				in:fly={{ delay: index * 300, duration: 300, y: 1500 }}>
				<h2>{subject.name}</h2>
				<h3>{subject.info}</h3>
			</div>
		{/each}
	</section>
</article>

<style>
	.lower-third {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		gap: 2rem;
		border: 2px solid #fff;
		border-radius: 1rem;
		background-color: var(--gray-900);
		color: #fff;
		text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6);
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 15vmin;
		height: 15vmin;
		padding: 1rem;
		border-right: 2px solid #fff;
		background-color: var(--dark-gray);
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}
	.logo img {
		max-width: 15vmin;
		max-height: 15vmin;
	}
	.subjects-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		flex-grow: 1;
	}
	.subject {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		flex-grow: 1;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2rem;
		font-weight: 300;
	}
</style>
