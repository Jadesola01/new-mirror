<script>
	import { ThinkingWoman } from '$lib/assets/vectors';
	import { IconChevronRight, IconCircleArrowRight, IconMail } from '@tabler/icons-svelte';
	import HomeContents from './home.content';
	import './home.scss';

	const { landing, aboutUs, projects, testimonials, subscribe } = HomeContents;
</script>

<svelte:head>
	<title>THDC Tech</title>
</svelte:head>

<section class="landing">
	<div class="content-restrictor landing-restrictor">
		<div class="landing-top-section">
			<div class="landing-contents">
				<div>
					<h1>{landing.heading}</h1>
					<p>{landing.subHeading}</p>
				</div>
				<a href="/get-a-quote">
					<span>{landing.buttonText}</span>
					<IconChevronRight />
				</a>
			</div>
			<div class="hero-illustration-wrapper">
				<div>
					<img
						src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="three men in a workspace"
					/>
				</div>
			</div>
		</div>
		<div class="partners-list">
			{#each landing.partnersList as partner}
				<svelte:component this={partner} />
			{/each}
		</div>
	</div>
</section>

<section class="about-us">
	<div class="content-restrictor about-us-restrictor">
		<div>
			<h2 class="section-heading">
				{aboutUs.heading}
			</h2>
			<p class="section-subheading">
				{aboutUs.subHeading}
			</p>
		</div>
		<ul class="doings-list">
			{#each aboutUs.doings as doing}
				<li>
					<div>
						<svelte:component this={doing.icon} />
					</div>
					<h3>{doing.title}</h3>
					<p>{doing.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="our-works">
	<div class="content-restrictor our-works-restrictor">
		<div>
			<h2 class="section-heading">{projects.heading}</h2>
			<p class="section-subheading">{projects.subHeading}</p>
		</div>
		<ul class="works-list">
			{#each projects.works as work}
				<li>
					<div class="image-wrapper">
						<div>
							<img src={work.imgSrc} alt={work.imgAlt} />
						</div>
					</div>
					<div class={`work-description-wrapper${work.flip ? ' flipped' : ''}`}>
						<h3>{work.title}</h3>
						<p>{work.description}</p>
						<button type="button">
							<span>{work.btnText}</span>
						</button>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="cta">
	<div class="content-restrictor cta-restrictor">
		<div class="content-wrapper">
			<div class="illustration">
				<ThinkingWoman />
			</div>
			<div class="cta-main-contents">
				<p>Have more questions to ask about us?</p>
				<a href="/get-a-quote">
					<span>Get A Quote</span>
					<IconCircleArrowRight />
				</a>
			</div>
		</div>
	</div>
</section>

<section class="our-clients">
	<div class="our-clients-restrictor">
		<div>
			<h2 class="section-heading">
				{testimonials.heading}
			</h2>
			<p class="section-subheading">
				{testimonials.subHeading}
			</p>
		</div>
		<ul class="testimonials">
			{#each testimonials.testimonials as testimonial}
				<li>
					<p class="comment-wrapper">
						<span>{testimonial.comment}</span>
					</p>
					<div class="author-details">
						<div class="avatar-wrapper">
							<img src={testimonial.avatar.src} alt={testimonial.avatar.alt} />
						</div>
						<div class="author-info">
							<h3>{testimonial.name}</h3>
							<p>{testimonial.title}, {testimonial.company}</p>
							<div>
								{#each testimonial.rating as rating}
									<svelte:component this={rating} />
								{/each}
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="newsletter-subscription">
	<div class="content-restrictor newsletter-subscription-restrictor">
		<div>
			<h2 class="section-heading">
				{subscribe.heading}
			</h2>
			<p class="section-subheading">
				{subscribe.subHeading}
			</p>
		</div>
		<form>
			<label for="email">
				<div>
					<IconMail />
					<input type="email" id="email" placeholder="Add your email address" autocomplete="off" />
				</div>
				<button type="submit">
					<span>Subscribe</span>
					<IconCircleArrowRight />
				</button>
			</label>
		</form>
	</div>
</section>
