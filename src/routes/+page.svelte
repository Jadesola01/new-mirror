<script>
	import { IconChevronRight, IconCircleArrowRight, IconMessage, SVG1 } from '$lib/assets/vectors';
	import HomeContents from './home.content';
	import './home.scss';

	const { hero, aboutUs, projects, testimonials, subscribe } = HomeContents;
</script>

<svelte:head>
	<title>THDC Tech</title>
</svelte:head>

<section class="home-landing-page">
	<div class="responsive-wrapper landing-page__content">
		<div class="landing-page__content__info">
			<div class="info-header">
				<h1 class="info-header__title">
					All-in-one <span class="highlighted">solution</span> for successful
					<span class="custom-decoration">E-commerce</span> stores.
				</h1>
				<p class="info-header__subtitle">{hero.subHeading}</p>
			</div>
			<a href="/get-a-quote" class="landing-page__link">
				<span>Get A Quote</span>
				<div>
					<IconChevronRight />
				</div>
			</a>
		</div>
		<div class="landing-page__illustration">
			<div class="illustration-container">
				<img class="landing__img" src={hero.image.src} alt={hero.image.alt} loading="eager" />
			</div>
		</div>
	</div>
	<div class="landing-page__content__partners">
		{#each hero.partnersList as partner}
			<svelte:component this={partner} class="landing__partner" />
		{/each}
	</div>
</section>
<section class="about-us">
	<div class="responsive-wrapper about-us__content">
		<div class="about-us__heading-container">
			<h2>-{aboutUs.heading}-</h2>
			<p>{aboutUs.subHeading}</p>
		</div>
		<ul class="about-us__content__doings">
			{#each aboutUs.doings as doing}
				<li class="about-us__doing">
					<div class="about-us__doing__icon">
						<svelte:component this={doing.icon} />
					</div>
					<h3 class="about-us__doing__title">{doing.title}</h3>
					<p class="about-us__doing__description">{doing.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
<section class="projects">
	<div class="responsive-wrapper projects__container">
		<div class="projects__header">
			<h2>-{projects.heading}-</h2>
			<p>{projects.subHeading}</p>
		</div>
		<ul class="projects__list">
			{#each projects.works as work}
				<li class="project">
					<div class="project__image-container">
						<div class="project__image-wrapper">
							<img src={work.img.src} alt={work.img.alt} loading="lazy" />
						</div>
					</div>
					<div class="project__details" data-flipped={Boolean(work.flipped)}>
						<h3 class="project__title">{work.title}</h3>
						<p class="project__description">{work.description}</p>
						<a class="project__link" href={work.route.to}>
							<span>{work.route.title}</span>
							<div>
								<IconChevronRight />
							</div>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
<section class="section">
	<div class="responsive-wrapper section__container">
		<div class="section__inner-container">
			<div class="illustration-wrapper">
				<SVG1 />
			</div>
			<div class="section__element">
				<div class="section__description">
					<h2>Have more questions to ask about us?</h2>
					<p>
						Contact us today to learn more about how we can help you with your E-commerce store.
					</p>
				</div>
				<a href="/get-a-quote" class="section__link">
					<span>Get A Quote</span>
					<div>
						<IconCircleArrowRight />
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
<section class="testimonials">
	<div class="responsive-wrapper testimonials__container">
		<div class="testimonials__header">
			<h2>{testimonials.heading}</h2>
			<p>{testimonials.subHeading}</p>
		</div>
		<ul class="testimonials__list">
			{#each testimonials.testimonials as testimonial}
				<li class="testimonials__list__item">
					<p class="testimonial__comment">
						<span>{testimonial.comment}</span>
					</p>
					<div class="testimonial__details">
						<div class="testimonial__avatar">
							<img src={testimonial.img.src} alt={testimonial.img.alt} />
						</div>
						<div class="testimonial__info">
							<h3 class="testimonial__name">{testimonial.name}</h3>
							<p class="testimonial__title-company">{testimonial.title}, {testimonial.company}</p>
							<div class="testimonial__rating">
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
<section class="subscribe">
	<div class="responsive-wrapper subscribe__container">
		<div class="subscribe__container__content">
			<h2>{subscribe.heading}</h2>
			<p>{subscribe.subHeading}</p>
		</div>
		<form class="subscribe__form">
			<label for="email" class="subscribe__label">
				<div class="subscribe__input-wrapper">
					<div>
						<IconMessage />
					</div>
					<input type="email" id="email" placeholder="Add your email address" autocomplete="off" />
				</div>
				<button type="submit" class="subscribe__button">
					<span>Subscribe</span>
					<div>
						<IconCircleArrowRight />
					</div>
				</button>
			</label>
		</form>
	</div>
</section>
