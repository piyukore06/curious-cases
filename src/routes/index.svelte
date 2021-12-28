<script context="module" lang="ts">
	import { allCases, cases } from '$lib/logic/cases';
	import * as codes from '$lib/logic/code';
	const getCode = () => {
		const code = document.querySelector('.code');
		const Prism = window.Prism;
		const c = `
	const ${state.from}To${state.to} = () => {
		${codes[state.from][state.to]}
	}
		`;
		code.innerHTML = Prism.highlight(c, Prism.languages.javascript, 'javascript');
		console.log(code, state.to)
	}
	let state = { from: 'camel', to: 'camel' };
	const fromChanged = (event) => {
		state.from  = event.target.value;
		getCode();
	}
	const toChanged = (event) => {
		state.to  = event.target.value;
		getCode();
	}

</script>

<svelte:head>
	<title>Curious Cases</title>
	<link href="https://fonts.googleapis.com/css2?family=Gwendolyn:wght@700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
	<link href="https://unpkg.com/prismjs@1.25.0/themes/prism.css" rel="stylesheet" />
	<script src="https://unpkg.com/prismjs@1.25.0/components/prism-core.min.js"></script>
	<script src="https://unpkg.com/prismjs@1.25.0/plugins/autoloader/prism-autoloader.min.js"></script>
	<script src="https://unpkg.com/prismjs@1.25.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
</svelte:head>
<section>

<div class="body">
	<div class="from">
		<select on:change={fromChanged} name="from" id="from-select">
			{#each cases as case1}
				<option disabled="{!case1.caseName || ['lower', 'upper'].indexOf(case1.caseName) !== -1}" selected={!case1.caseName} value="{case1.caseName}">{case1.case}</option>
			{/each}
		</select>
	</div>
	<div class="to">
		<select on:change={toChanged} name="to" id="to-select">
			{#each cases as case1}
				<option disabled="{!case1.caseName}" selected={!case1.caseName} value="{case1.caseName}">{case1.case}</option>
			{/each}
		</select>
	</div>

</div>

</section>
<section>
<pre data-prismjs-copy="Copy">
	<code class="code language-js">
		Select Cases to get conversion function!
	</code>
</pre>

</section>	


<style>
	section {
		display: flex;
		justify-content: center;
	}

	.body {
		display: flex;
	}
	.from, .to {
		margin: 1rem;
	}

	pre {
		background-color: rgba(255, 255, 255, 0.75);
	}
	select {
		height: 2rem;
		border-radius: 5px;
		border: none;
	}
</style>
