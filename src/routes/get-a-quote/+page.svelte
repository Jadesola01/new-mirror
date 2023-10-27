<script>
	import { IconCircleArrowRight } from '@tabler/icons-svelte';
	import getAQuote from './get-a-quote.contents';
	import './get-a-quote.scss';

	const { landing } = getAQuote;
</script>

<svelte:head>
	<title>THDC Tech - Get A Quote</title>
</svelte:head>

<section>
	<div class="content-restrictor pt-8 pb-[72px] lg:flex">
		<div class="shrink-0">
			<div class="text-center mb-8 max-w-xs mx-auto">
				<h1 class="font-medium text-xl text-gray-2 leading-tight mb-6">{landing.heading}</h1>
				<p class="font-light text-gray-6 text-xs leading-tight">{landing.subHeading}</p>
			</div>
			<div class="mx-[37px] lg:mx-0">
				<div
					class="w-full lg:w-[43.35938%] relative overflow-hidden rounded-t-full pb-[calc((454/288)*100%)]"
				>
					<img
						class="absolute top-0 left-0 w-full h-full object-cover object-center"
						src={landing.image.src}
						alt={landing.image.alt}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<form class="quote-form">
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input type="tel" placeholder="Phone Number" />
			<input type="text" placeholder="Company" />
			<input type="text" placeholder="Service(s) of Interest" />
			<textarea placeholder="Additional Information" rows="4" />
			<button type="submit">
				<span>Submit Message</span>
				<IconCircleArrowRight />
			</button>
		</form>
	</div>
</section>
