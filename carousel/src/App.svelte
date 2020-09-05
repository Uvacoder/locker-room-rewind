<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import Carousel from './Carousel.svelte';
	let ready = false;
	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 30000);
	});
	onDestroy(() => {
		ready = false;
	});
	const groups = [
		{
			teams: [
				{
					school: 'Wall',
					mascot: 'Hawks',
					score: '35',
				},
				{
					school: 'Cisco',
					mascot: 'Loboes',
					score: '14',
				},
			],
		},
		{
			teams: [
				{
					school: 'Lake View',
					mascot: 'Chiefs',
					score: '44',
				},
				{
					school: 'Pecos',
					mascot: 'Eagles',
					score: '41',
				},
			],
		},
		{
			teams: [
				{
					school: 'Ozona',
					mascot: 'Lions',
					score: '19',
				},
				{
					school: 'Wink',
					mascot: 'Wildcats',
					score: '35',
				},
			],
		},
		{
			teams: [
				{
					school: 'Eden',
					mascot: 'Bulldogs',
					score: '14',
				},
				{
					school: 'Leakey',
					mascot: 'Eagles',
					score: '64',
				},
			],
		},
		{
			teams: [
				{
					school: 'Sterling City',
					mascot: 'Eagles',
					score: '44',
				},
				{
					school: 'May',
					mascot: 'Tigers',
					score: '40',
				},
			],
		},
		{
			teams: [
				{
					school: 'Breckenridge',
					mascot: 'Buckaroos',
					score: '0',
				},
				{
					school: 'Ballinger',
					mascot: 'Bearcats',
					score: '13',
				},
			],
		},
		{
			teams: [
				{
					school: 'Mason',
					mascot: 'Punchers',
					score: '6',
				},
				{
					school: 'Comfort',
					mascot: 'Bobcats',
					score: '30',
				},
			],
		},
		{
			teams: [
				{
					school: 'Llano',
					mascot: 'Yellow Jackets',
					score: '41',
				},
				{
					school: 'Sonora',
					mascot: 'Broncos',
					score: '8',
				},
			],
		},
		{
			teams: [
				{
					school: 'Brady',
					mascot: 'Bulldogs',
					score: '7',
				},
				{
					school: 'Comanche',
					mascot: 'Indians',
					score: '28',
				},
			],
		},
		{
			teams: [
				{
					school: 'Christoval',
					mascot: 'Cougars',
					score: '23',
				},
				{
					school: 'Grape Creek',
					mascot: 'Eagles',
					score: '18',
				},
			],
		},
		{
			teams: [
				{
					school: 'Winters',
					mascot: 'Blizzards',
					score: '19',
				},
				{
					school: 'Eldorado',
					mascot: 'Eagles',
					score: '51',
				},
			],
		},
		{
			teams: [
				{
					school: 'Junction',
					mascot: 'Eagles',
					score: '40',
				},
				{
					school: 'TLCA',
					mascot: 'Eagles',
					score: '13',
				},
			],
		},
		{
			teams: [
				{
					school: 'Coahoma',
					mascot: 'Bulldogs',
					score: '49',
				},
				{
					school: 'Miles',
					mascot: 'Bulldogs',
					score: '0',
				},
			],
		},
		{
			teams: [
				{
					school: 'Menard',
					mascot: 'Yellowjackets',
					score: '6',
				},
				{
					school: 'McCamey',
					mascot: 'Badgers',
					score: '56',
				},
			],
		},
		{
			teams: [
				{
					school: 'Irion County',
					mascot: 'Hornets',
					score: '67',
				},
				{
					school: 'Robert Lee',
					mascot: 'Steers',
					score: '8',
				},
			],
		},
		{
			teams: [
				{
					school: 'Zephyr',
					mascot: 'Bulldogs',
					score: '32',
				},
				{
					school: 'Veribest',
					mascot: 'Falcons',
					score: '42',
				},
			],
		},
		{
			teams: [
				{
					school: 'Meadow',
					mascot: 'Broncos',
					score: '14',
				},
				{
					school: 'Blackwell',
					mascot: 'Hornets',
					score: '62',
				},
			],
		},
		{
			teams: [
				{
					school: 'Bronte',
					mascot: 'Longhorns',
					score: '53',
				},
				{
					school: 'Panther Creek',
					mascot: 'Hornets',
					score: '62',
				},
			],
		},
	];
</script>

<!-- <main> -->
{#if ready}
	<section
		class="carousel-container"
		transition:fly={{ x: 2000, duration: 500 }}>
		<Carousel
			loop="true"
			perPage="1"
			autoplay="20000"
			duration="500"
			easing="ease-out"
			startIndex="0"
			dots="false"
			controls="false">
			{#each groups as group}
				<div class="slide-content">
					{#each group.teams as team, index}
						<div
							class="team-container flat"
							style={index !== 0 ? 'flex-direction: row-reverse; padding-left: 2rem; margin-left: 1rem;' : 'flex-direction: row; padding-right: 2rem; margin-right: 1rem'}>
							<div
								class="team-logo"
								style={index !== 0 ? 'border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; border-left: 1px solid #fff;' : 'border-top-left-radius: 1rem; border-bottom-left-radius: 1rem; border-right: 1px solid #fff'}>
								<img
									src="images/{team.school
										.replace(/\s/g, '')
										.toLowerCase()}.png"
									alt={team.school} />
							</div>
							<div
								class="team-data"
								style={index !== 0 ? 'flex-direction: row-reverse; padding-right: 2rem;' : 'flex-direction: row; padding-left: 2rem;'}>
								<div
									class="team-info"
									style={index !== 0 ? 'text-align: right;' : 'text-align: left;'}>
									<h2>{team.school}</h2>
									<h1>{team.mascot}</h1>
								</div>
								<div class="team-score">
									<h1>{team.score}</h1>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</Carousel>
	</section>
{/if}
<!-- </main> -->

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
	}
	/* main {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0;
		margin: 0;
	} */
	.carousel-container {
		position: absolute;
		left: 4vmin;
		right: 4vmin;
		bottom: 5vmin;
		height: 15vmin;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.slide-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-grow: 1;
		margin: 0 2rem;
		text-shadow: 5px 5px 7px rgba(0, 0, 0, 0.6);
		border-radius: 1rem;
		margin: 0 2rem;
		border: 2px solid var(--white);
	}
	.gradient {
		background: rgb(255, 255, 255);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.6) 5%,
			rgba(70, 70, 75, 0.7) 30%,
			rgba(126, 126, 126, 0.7) 60%,
			rgba(234, 234, 234, 0.7) 95%,
			rgba(250, 250, 250, 0.7) 100%
		);
		background-color: #fff;
	}
	.flat {
		background-color: var(--gray-900);
	}
	.team-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-grow: 1;
		gap: 2rem;
		margin: 0;
		color: #fff;
		border: 2px solid #fff;
		border-radius: 1rem;
	}
	.team-logo {
		width: 15vmin;
		height: 15vmin;
		background-color: var(--dark-gray);
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.team-logo img {
		/* height: auto; */
		max-width: 15vmin;
		max-height: 15vmin;
		padding: 1rem;
		filter: drop-shadow(-2px 0px 0px rgba(255, 255, 255, 0.9))
			drop-shadow(0px -2px 0px rgba(255, 255, 255, 0.9))
			drop-shadow(2px 0px 0px rgba(255, 255, 255, 0.9))
			drop-shadow(0px 2px 0px rgba(255, 255, 255, 0.9));
	}
	.team-data {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-grow: 1;
	}
	h1,
	h2 {
		padding: 0;
		margin: 0;
	}
	h1 {
		font-size: 3.75rem;
	}
	h2 {
		font-size: 3rem;
		font-weight: 400;
	}
	.team-score h1 {
		font-size: 7rem;
	}
</style>
