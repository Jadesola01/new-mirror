<script lang="ts">
	import {
		DigitalOceanLogo,
		IconChevronRight,
		IconCircleArrowRight,
		ShopifyLogo
	} from 'src/lib/assets/vectors';
	import AboutUsContents from './about-us.content';
	import './about-us.scss';

	const { hero, whatWeDo } = AboutUsContents;
	let selectedTab = 'partners';
</script>

<svelte:head>
	<title>THDC Tech - About Us</title>
</svelte:head>

<section id="about-us__landing">
	<div class="responsive-wrapper about-us__landing-content">
		<header class="about-us__landing-content__header">
			<h1>{hero.heading}</h1>
			<div class="landing__header__subheadings">
				<p>{hero.subHeading[0]}</p>
				<p>{hero.subHeading[1]}</p>
			</div>
		</header>
		<div class="about-us__landing-images">
			<div class="about-us__landing-images__container">
				<img src={hero.image.src} alt={hero.image.alt} loading="eager" />
			</div>
		</div>
	</div>
</section>
<section id="services">
	<div class="responsive-wrapper services__content">
		<header class="services__content-header">
			<h2>What we do?</h2>
		</header>
		<div class="services__doings">
			{#each whatWeDo.doings as doing}
				<div class="service">
					<div class="service__icon">
						<svelte:component this={doing.icon} />
					</div>
					<p class="service__title">{doing.title}</p>
				</div>
			{/each}
		</div>
		<a href="/see-all-services" class="services__link">
			<span>See all services</span>
		</a>
	</div>
</section>
<section id="our-process">
	<div class="responsive-wrapper our-process__content">
		<header class="our-process__content-header">
			<h2>Our Process</h2>
		</header>
		<div class="our-process__content__tabs">
			<div class="our-process__content__tabs-tab">
				<label for="clients" class="tab-label">
					<input type="radio" name="tab" id="clients" value="clients" bind:group={selectedTab} />
					<span class="tab-text">Our Happy Clients</span>
					<i class="tab-indicator" />
				</label>
				<label for="partners" class="tab-label">
					<input type="radio" name="tab" id="partners" value="partners" bind:group={selectedTab} />
					<span class="tab-text">Our Trusted Partners</span>
					<i class="tab-indicator" />
				</label>
			</div>
			<div class="our-process__content__tabs__tab-content">
				<div class="tab-pane" aria-hidden={selectedTab === 'clients'}>
					<h3>Our Happy Clients</h3>
					<p>Just some of the leading brands that trust THDC Technologies</p>
					<div class="tab-pane__slider">
						<button type="button" title="Show previous clients">
							<div>
								<IconChevronRight />
							</div>
						</button>
						<div class="tab-clients">
							<div>
								{#each [ShopifyLogo, DigitalOceanLogo, ShopifyLogo, DigitalOceanLogo] as clientLogo}
									<svelte:component this={clientLogo} />
								{/each}
							</div>
						</div>
						<button type="button" title="Show next clients">
							<IconChevronRight />
						</button>
					</div>
				</div>
				<div class="tab-pane" aria-hidden={selectedTab === 'partners'}>
					<h3>Our Trusted Partners</h3>
					<div class="tab-pane__slider">
						<button type="button" title="Show previous partners">
							<div>
								<IconChevronRight />
							</div>
						</button>
						<div class="tab-partners">
							<div>
								{#each [ShopifyLogo, DigitalOceanLogo, ShopifyLogo, DigitalOceanLogo] as partnerLogo}
									<svelte:component this={partnerLogo} />
								{/each}
							</div>
						</div>
						<button type="button" title="Show next partners">
							<IconChevronRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section id="project">
	<div class="responsive-wrapper project-content">
		<header class="project-content__header">
			<h2>Have a Project in Mind?</h2>
		</header>
		<a href="/get-a-quote" class="project-content__link">
			<span>Get A Quote</span>
			<IconCircleArrowRight />
		</a>
	</div>
</section>
