<script lang="ts">
	import { IconChevronLeft, IconChevronRight, IconCircleArrowRight } from '@tabler/icons-svelte';
	import { DigitalOcean, Shopify } from 'src/lib/assets/vectors';
	import AboutUsContents from './about-us.content';
	import './about-us.scss';

	const { landing, whatWeDo } = AboutUsContents;
	let selectedTab = 'partners';
</script>

<svelte:head>
	<title>THDC Tech - About Us</title>
</svelte:head>

<section class="about-us-landing">
	<div class="content-restrictor about-us-landing-restrictor">
		<div class="text-content">
			<h1>{landing.heading}</h1>
			<div>
				<p>{landing.subHeading[0]}</p>
				<p>{landing.subHeading[1]}</p>
			</div>
		</div>
		<div class="stacked-images-wrapper">
			<div>
				<div class="top-image">
					<img src={landing.images.top.src} alt={landing.images.top.alt} />
				</div>
				<div class="bottom-image">
					<img src={landing.images.bottom.src} alt={landing.images.bottom.alt} />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="wwd-section">
	<div class="content-restrictor wwd-section-restrictor">
		<div class="text-content">
			<h2>What we do?</h2>
		</div>
		<div class="about-us-doings">
			{#each whatWeDo.doings as doing}
				<div class="doing-wrapper">
					<div>
						<svelte:component this={doing.icon} />
					</div>
					<p>{doing.title}</p>
				</div>
			{/each}
		</div>
		<a href="/see-all-services">
			<span>See all services</span>
		</a>
	</div>
</section>

<section class="our-process-section">
	<div class="content-restrictor our-process-section-restrictor">
		<div class="text-content">
			<h2>Our Process</h2>
		</div>
		<div class="sum-wrapper">
			<div>
				<label for="clients">
					<input type="radio" name="tab" id="clients" value="clients" bind:group={selectedTab} />
					<span>Our Happy Clients</span>
					<i />
				</label>
				<label for="partners">
					<input type="radio" name="tab" id="partners" value="partners" bind:group={selectedTab} />
					<span>Our Trusted Partners</span>
					<i />
				</label>
			</div>
			<div class={`happy-clients ${selectedTab === 'clients' ? 'in-view' : 'lg:hidden'}`}>
				<h3>Our Happy Clients</h3>
				<p>Just some of the leading brands that trust THDC Technologies</p>
				<div>
					<button type="button" title="Show previous clients">
						<IconChevronLeft />
					</button>
					<div class="clients">
						{#each [Shopify, DigitalOcean, Shopify, DigitalOcean] as client}
							<svelte:component this={client} />
						{/each}
					</div>
					<button type="button" title="Show next clients">
						<IconChevronRight />
					</button>
				</div>
			</div>
			<div class={`trusted-partners ${selectedTab === 'partners' ? 'in-view' : 'lg:hidden'}`}>
				<h3>Our Trusted Partners</h3>
				<div>
					<button type="button" title="Show previous partners">
						<IconChevronLeft />
					</button>
					<div class="partners">
						{#each [Shopify, DigitalOcean, Shopify, DigitalOcean] as partner}
							<svelte:component this={partner} />
						{/each}
					</div>
					<button type="button" title="Show next partners">
						<IconChevronRight />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="get-quote-section">
	<div class="content-restrictor get-quote-section-restrictor">
		<div class="text-content">
			<h2>Have a Project in Mind?</h2>
		</div>
		<a href="/get-a-quote">
			<span>Get A Quote</span>
			<IconCircleArrowRight />
		</a>
	</div>
</section>
