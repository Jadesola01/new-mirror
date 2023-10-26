<script>
	import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-svelte"
	import { DocumentText, Inbox, StepIndicator } from 'src/lib/assets/vectors';
	import './contact-us.scss';
</script>

<svelte:head>
	<title>THDC Tech - Contact Us</title>
</svelte:head>

<section>
	<div class="content-restrictor pt-8 lg:pt-[120px] pb-10 lg:pb-[72px] lg:pl-10">
		<div
			class="text-content text-gray-6 text-center lg:text-left mb-3 lg:mb-[23px] w-[64%] lg:w-[38.98438%] lg:mx-0 mx-auto"
		>
			<h1 class="text-2xl font-medium text-gray-2 leading-tight lg:text-[40px] mb-2 lg:mb-[9px]">
				Contact Us
			</h1>
			<p class="font-light text-sm leading-snug lg:text-xl lg:leading-snug">
				Looking for a trusted agency for your projects? We're here!
			</p>
		</div>
		<div class="socials flex items-center justify-center gap-4 text-gray-6 lg:justify-start">
			<a href="https://facebook.com/thdctech" class="w-[18px] lg:w-6">
				<IconBrandFacebook />
			</a>
			<a href="https://instagram.com/thdctech" class="w-[18px] lg:w-6">
				<IconBrandInstagram />
			</a>
		</div>
	</div>
</section>
<section class="bg-white-1 text-gray-6">
	<div class="content-restrictor lg:pb-[112px] lg:flex justify-between">
		<div class="lg:ml-[39px] lg:mt-[88px] lg:mb-[120px] shrink-0 lg:w-[27.7343758%]">
			<div class="text-content text-center lg:text-left lg:mr-12 mb-6 lg:mb-14">
				<h2
					class="text-2xl leading-tight text-gray-2 font-medium lg:text-[44px] lg:leading-tight mb-1 lg:mb-[9px]"
				>
					What Process to follow?
				</h2>
				<p class="text-sm lg:text-xl lg:leading-[1.35] leading-[1.3] font-light">
					You are one bold step closer to building your perfect product.
				</p>
			</div>
			<div class="flex items-start justify-start">
				<StepIndicator class="h-[195px] lg:h-[309px] w-auto mr-[11px] lg:mr-6 shrink-0" />
				<div class="">
					<div class="mb-6">
						<h3
							class="text-gray-2 lg:text-xl lg:leading-tight mb-[6px] text-base font-medium leading-tight"
						>
							What Process to follow?
						</h3>
						<p class="text-[10px] lg:text-base font-light leading-[1.3]">
							You are one bold step closer to building your perfect product. You are one bold step
							closer to building your perfect product. You are one bold step closer.
						</p>
					</div>
					<div class="mb-6">
						<h3
							class="text-gray-2 lg:text-xl lg:leading-tight mb-[6px] text-base font-medium leading-tight"
						>
							What Process to follow?
						</h3>
						<p class="text-[10px] lg:text-base font-light leading-[1.3]">
							You are one bold step closer to building your perfect product. You are one bold step
							closer to building your perfect product. You are one bold step closer.
						</p>
					</div>
					<div>
						<h3
							class="text-gray-2 lg:text-xl lg:leading-tight mb-[6px] text-base font-medium leading-tight"
						>
							What Process to follow?
						</h3>
						<p class="text-[10px] lg:text-base font-light leading-[1.3]">
							You are one bold step closer to building your perfect product. You are one bold step
							closer to building your perfect product. You are one bold step closer.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="relative pt-8 lg:pt-0 pb-6 lg:mb-[42.5px] bg-white shrink-0 lg:w-[54.6875%]">
			<div
				class="lg:absolute lg:-translate-y-full flex gap-3 items-center lg:px-8 py-6 lg:py-[18px] px-4 bg-white-1 rounded-lg mx-3 lg:mx-0 lg:gap-6"
			>
				<div class="w-8 lg:w-[84px] lg:p-5 bg-purple-1 p-[7.62px] rounded-lg shrink-0">
					<Inbox />
				</div>
				<p class="text-xs lg:text-xl lg:leading-[1.35] font-light leading-tight">
					Write us a few words describing your project and we'll prepare a proposal for you within <span
						class="font-medium">40</span
					> hours.
				</p>
			</div>
			<form class="form">
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
			<p class="text-xs lg:text-base font-light text-center w-3/4 mx-auto mb-10 lg:mb-0">
				You can also send us a mail <a href="mailto:thdctechnologies@gmail.com" class="font-medium"
					>THDCtechnologies@gmail.com</a
				> to talk to us!
			</p>
		</div>
	</div>
</section>
<section class="hidden lg:block pb-[21%] bg-gray-2" />
