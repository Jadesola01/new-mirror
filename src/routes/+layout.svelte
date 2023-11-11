<script lang="ts">
	import { page } from '$app/stores';
	import { THDCTechLogo } from '$lib/assets/vectors';
	import { IconMenu2, IconX } from '@tabler/icons-svelte';
	import { Backdrop, NavLink } from 'src/lib/components';
	import LayoutContents from 'src/routes/layout.content';
	import 'src/routes/layout.scss';
	import '../app.scss';

	const { routes, footerSection } = LayoutContents;
	let menuVisible = false;
</script>

<header class="header">
	<div class="header__container">
		<a href="/" title="Go to home page" class="header__logo">
			<THDCTechLogo />
		</a>
		<label class="menu-toggle" for="menuToggle">
			<input
				type="checkbox"
				id="menuToggle"
				bind:checked={menuVisible}
				title={menuVisible ? 'Hide mobile nav' : 'Show mobile nav'}
			/>
			<svelte:component this={menuVisible ? IconX : IconMenu2} />
		</label>
		<nav aria-hidden={!menuVisible} class="header__container__nav">
			{#each routes as { route, label }}
				<NavLink
					to={route}
					cn="nav-link"
					active={$page.url.pathname.split(/\//gu)[1] === route.split(/\//gu)[1]}
				>
					<span class="header__nav-label">{label}</span>
				</NavLink>
			{/each}
		</nav>
		<a href="/contact-us" class="header__container__quote-link">
			<span>Contact Us</span>
		</a>
	</div>
</header>

<main class="main">
	<slot />
</main>

<footer class="footer">
	<div class="responsive-wrapper footer__container">
		<a href="/" title="Go to home page" class="footer__container__logo">
			<THDCTechLogo />
		</a>
		<p class="footer__container__paragraph">{footerSection.paragraph}</p>
		<div class="footer__social">
			<p class="footer__social-label">FOLLOW US</p>
			<div class="footer__social-icons">
				{#each footerSection.socials as { href, label, icon }}
					<a {href} aria-label={label} class="footer__social-link">
						<svelte:component this={icon} class="footer__social-icon" />
					</a>
				{/each}
			</div>
		</div>
		<hr class="footer__container__separator" />
		<div class="footer__links">
			<a href="/" class="footer__link">Terms and Service&nbsp;|&nbsp;Privacy Policy</a>
		</div>
	</div>
</footer>

<Backdrop clicked={() => (menuVisible = false)} show={menuVisible} />
