<script>
	import Bento from "./Bento.svelte";
</script>

<div class="marquee">
	<div class="marquee__inner" aria-hidden="true">
		{#each Array.from(Array(18).keys()) as a}
			<span>
				About Me
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12V12ZM12.75 6.75C12.75 6.55109 12.671 6.36032 12.5303 6.21967C12.3897 6.07902 12.1989 6 12 6C11.8011 6 11.6103 6.07902 11.4697 6.21967C11.329 6.36032 11.25 6.55109 11.25 6.75V15.4395L8.031 12.219C7.89017 12.0782 7.69916 11.9991 7.5 11.9991C7.30084 11.9991 7.10983 12.0782 6.969 12.219C6.82817 12.3598 6.74905 12.5508 6.74905 12.75C6.74905 12.9492 6.82817 13.1402 6.969 13.281L11.469 17.781C11.5387 17.8508 11.6214 17.9063 11.7125 17.9441C11.8037 17.9819 11.9013 18.0013 12 18.0013C12.0987 18.0013 12.1963 17.9819 12.2874 17.9441C12.3786 17.9063 12.4613 17.8508 12.531 17.781L17.031 13.281C17.1718 13.1402 17.2509 12.9492 17.2509 12.75C17.2509 12.5508 17.1718 12.3598 17.031 12.219C16.8902 12.0782 16.6992 11.9991 16.5 11.9991C16.3008 11.9991 16.1098 12.0782 15.969 12.219L12.75 15.4395V6.75Z" fill="black" fill-opacity="0.5"/>
				</svg>
			</span>
		{/each}
	</div>
</div>
<div id="about">
	<div class="content">
		<div class="text">
			<span>I'm a Vancouver based developer who loves to add creativity and life into his work.</span>
			<br><br>
			I have a <span>Bachelor's degree</span> and a <span>PG Diploma</span> in my field and have worked as a software engineer for over an year. 
			My go-to tech stack is <span>Vanilla JavaScript</span> and <span>Sass</span> with <span>Webpack</span> for my projects.
			<br><br>
			I am a big-time musicophile with a passion for art and human psychology.
		</div>
	</div>
</div>

<style lang="scss">
	#about {
		padding: 10vw 2rem;
		color: #000;
		max-width: 70vw;
		margin: 0 auto;

		.content {
			display: flex;
			align-items: center;
			gap: 2rem;

			.text {
				color: inherit;
				font-size: 2.16rem;
				line-height: 2rem;
				font-weight: 200;
				flex: 5;
				line-height: 1.3;

				span {
					font-weight: 400;
				}

				@media screen and (max-width: 650px) {
					line-height: unset;
					font-weight: 200;
				}
			}
		}

		@media screen and (max-width: 650px) {
			padding: 5rem 1rem;
			max-width: unset;
			margin: unset;
		}
	}
	.marquee {
		position: relative;
		overflow: hidden;
		padding: 1rem 0;
		border: 1px solid rgba(0, 0, 0, 0.5);
		opacity: .5;

		.marquee__inner {
			width: fit-content;
			display: flex;
			animation: marquee 16s linear infinite;
		}

		span {
			font-size: 1.5rem;
			padding: 0 .5rem;
			width: max-content;
			display: flex;
			gap: 1rem;

			svg {
				height: 2rem;
    		width: auto;
			}

			@media screen and (max-width: 650px) {
				padding: 0 0.25rem;
				gap: .5rem;
			}
		}

		@keyframes marquee {
			0% {
				transform: translateX(0)
			}

			100% {
				transform: translateX(-50%)
			}
		}
	}
</style>