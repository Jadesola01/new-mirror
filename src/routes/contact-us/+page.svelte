<script>
	import { IconTextDocument, IconInbox, SVG3 } from '$lib/assets/vectors';
	import contactUsContents from './contact-us.contents';
	import './contact-us.scss';

	const { hero, stepSection } = contactUsContents;
</script>

<svelte:head>
	<title>THDC Tech - Contact Us</title>
</svelte:head>

<section class="contact-us__landing-page">
	<div class="responsive-wrapper contact-us__landing-page__container">
		<div class="section__header">
			<h1>{hero.heading}</h1>
			<p>{hero.subHeading}</p>
		</div>
		<div class="section__socials">
			{#each hero.socials as { icon, href }}
				<a class="social-link" {href} target="_blank" rel="noopener noreferrer">
					<svelte:component this={icon} />
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="contact-us__form-section">
	<div class="responsive-wrapper contact-us__form-section__container">
		<div>
			<div class="section__header">
				<h2>{stepSection.textContent.heading}</h2>
				<p>{stepSection.textContent.subHeading}</p>
			</div>
			<div class="section__steps">
				<div class="section__steps__indicators">
					{#each stepSection.steps as _}
						<div class="step-indicator">
							<SVG3 />
							<i />
						</div>
					{/each}
				</div>
				<div class="section__steps__descriptions">
					{#each stepSection.steps as { title, description }}
						<div class="step">
							<h3 class="step__title">{title}</h3>
							<p class="step__description">{description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="contact-us__form-section__container__form-wrapper">
			<div class="form-wrapper__content">
				<div class="form-wrapper__content__header">
					<div class="icon-wrapper">
						<IconInbox />
					</div>
					<p>
						Write us a few words describing your project and we'll prepare a proposal for you within <span
							>40</span
						> hours.
					</p>
				</div>
				<form class="contact-us__form">
					<div class="contact-us__form__input-group">
						<input type="text" placeholder="Your Name" />
						<input type="email" placeholder="Your Email" />
						<input type="text" placeholder="Company" />
						<input type="text" placeholder="Budget" />
					</div>
					<div class="contact-us__form__optionals">
						<p>Optional</p>
						<textarea placeholder="Project details" rows="3" />
						<label for="document">
							<input type="file" id="document" />
							<div>
								<IconTextDocument />
							</div>
							<span>Attach Document</span>
						</label>
					</div>
					<button type="submit">
						<span>Send Message</span>
					</button>
				</form>
				<p class="contact-info">
					You can also send us a mail&nbsp;<a
						class="contact-info__email-link"
						href="mailto:contact@thdctech.com">contact@thdctech.com</a
					>&nbsp;to talk to us!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="blank-section" />
