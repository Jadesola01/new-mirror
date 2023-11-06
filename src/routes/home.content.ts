import { DigitalOcean, Shopify } from '$lib/assets/vectors';
import { IconMail, IconStar, IconStarFilled } from '@tabler/icons-svelte';
import { HomeHero } from 'src/lib/assets/images';

export default {
	hero: {
		heading: 'Design that tells your story.',
		subHeading:
			"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
		image: {
			src: HomeHero,
			alt: ''
		},
		linkLabel: 'Get A Quote',
		partnersList: [Shopify, DigitalOcean, Shopify, DigitalOcean, Shopify, DigitalOcean]
	},
	aboutUs: {
		heading: "It's more than an agency",
		subHeading:
			"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
		doings: Array(3).fill({
			icon: IconMail,
			title: "It's more than an agency.",
			description:
				"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
		})
	},
	projects: {
		heading: "It's more than an agency",
		subHeading:
			"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
		works: Array(3)
			.fill({
				image: {
					src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
					alt: ''
				},
				title: 'Share love',
				description:
					'We are a creative and innovative design agency that is passionate about helping our clients achieve their goals. We are also committed to providing excellent customer service. You get access to a team of experienced and talented experts that are really good at what they do.',
				link: { route: '/get-a-quote', label: 'Join the waitlist' }
			})
			.map((element, i) => (i % 2 ? { ...element, flipped: true } : element))
	},
	testimonials: {
		heading: 'Our Happy Clients',
		subHeading:
			"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success.",
		testimonials: [
			{
				comment:
					'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
				avatar: {
					src: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				},
				name: 'Johnson B. Steven',
				title: 'CEO',
				company: 'Stripe',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			},
			{
				comment:
					'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
				avatar: {
					src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				},
				name: 'Johnson B. Steven',
				title: 'CEO',
				company: 'Stripe',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			},
			{
				comment:
					'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
				avatar: {
					src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				},
				name: 'Johnson B. Steven',
				title: 'CEO',
				company: 'Stripe',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			},
			{
				comment:
					'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
				avatar: {
					src: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					alt: ''
				},
				name: 'Johnson B. Steven',
				title: 'CEO',
				company: 'Stripe',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			}
		]
	},
	subscribe: {
		heading: 'Be among those that hear from us first.',
		subHeading:
			"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
	}
};
