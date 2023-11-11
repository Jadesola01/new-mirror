<script>
	import { IconCircleArrowRight, SVG2 } from '$lib/assets/vectors';
	import getAQuote from './get-a-quote.contents';
	import './get-a-quote.scss';

	const { hero } = getAQuote;
</script>

<svelte:head>
	<title>THDC Tech - Get A Quote</title>
</svelte:head>

<section class="gaq-page">
	<div class="responsive-wrapper gaq-page__responsive-wrapper">
		<div class="landing__image-container">
			<div>
				<SVG2 />
				<img src={hero.image.src} alt={hero.image.alt} loading="eager" />
			</div>
		</div>
		<div class="landing__content">
			<div class="text-container">
				<h1>{hero.heading}</h1>
				<p>{hero.subHeading}</p>
			</div>
			<div class="landing__image-container">
				<div>
					<SVG2 />
					<img src={hero.image.src} alt={hero.image.alt} loading="eager" />
				</div>
			</div>
			<form class="gaq-page__form">
				<div class="gaq-page__form-group">
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
				</div>
				<input type="email" placeholder="Email" />
				<input type="tel" placeholder="Phone Number" />
				<input type="text" placeholder="Company" />
				<input type="text" placeholder="Service(s) of Interest" />
				<textarea placeholder="Additional Information" />
				<button type="submit">
					<span>Submit Message</span>
					<IconCircleArrowRight />
				</button>
			</form>
		</div>
	</div>
</section>
