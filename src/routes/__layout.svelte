<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	Made with 🍹 at 🏖
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		font-family: 'Montserrat', sans-serif;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		border-top: 1px solid white;
		color: white;
	}

	@media (min-width: 480px) {
		footer {
			margin: 30px;
		}
	}
</style>
