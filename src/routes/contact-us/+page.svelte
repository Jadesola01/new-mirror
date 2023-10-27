<script>
	import { DocumentText, Inbox, StepIndicatorCircle } from 'src/lib/assets/vectors';
	import contactUsContents from './contact-us.contents';
	import './contact-us.scss';

	const { landing, stepSection } = contactUsContents;
</script>

<svelte:head>
	<title>THDC Tech - Contact Us</title>
</svelte:head>

<section class="contact-us-landing">
	<div class="content-restrictor contact-us-landing-restrictor">
		<div class="text-content">
			<h1>{landing.heading}</h1>
			<p>{landing.subHeading}</p>
		</div>
		<div class="socials">
			{#each landing.socials as { icon, href }}
				<a {href} target="_blank" rel="noopener noreferrer">
					<svelte:component this={icon} />
				</a>
			{/each}
		</div>
	</div>
</section>
<section class="form-section">
	<div class="content-restrictor form-section-restrictor">
		<div>
			<div class="text-content">
				<h2>{stepSection.textContent.heading}</h2>
				<p>{stepSection.textContent.subHeading}</p>
			</div>
			<div>
				<div>
					{#each stepSection.steps as _}
						<div>
							<StepIndicatorCircle />
							<i />
						</div>
					{/each}
				</div>
				<div class="steps-list">
					{#each stepSection.steps as { title, description }}
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="form-wrapper">
			<div>
				<div><Inbox /></div>
				<p>
					Write us a few words describing your project and we'll prepare a proposal for you within <span
						>40</span
					> hours.
				</p>
			</div>
			<form class="contact-form">
				<div>
					<input type="text" placeholder="Your Name" />
					<input type="email" placeholder="Your Email" />
					<input type="text" placeholder="Company" />
					<input type="text" placeholder="Budget" />
				</div>
				<div>
					<p>Optional</p>
					<textarea placeholder="Project details" rows="3" />
					<label for="document">
						<input type="file" id="document" />
						<div>
							<DocumentText />
						</div>
						<span>Attach Document</span>
					</label>
				</div>
				<button type="submit">
					<span>Send Message</span>
				</button>
			</form>
			<p>
				You can also send us a mail <a href="mailto:thdctechnologies@gmail.com"
					>THDCtechnologies@gmail.com</a
				> to talk to us!
			</p>
		</div>
	</div>
</section>
<section class="placeholder-section" />
