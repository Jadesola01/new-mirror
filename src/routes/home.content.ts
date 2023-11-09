import { IMG0, IMG1, IMG2, IMG4, IMG5, IMG6 } from '$lib/assets/images';
import { DigitalOceanLogo, SVG0, ShopifyLogo, IconMessage } from '$lib/assets/vectors';
import { IconStar, IconStarFilled } from '@tabler/icons-svelte';

export default {
	hero: {
		heading: 'All-in-one solution for successful E-commerce stores.',
		subHeading:
			'More than just an agency, we help businesses of all sizes create and grow their e-commerce stores with our innovative apps, themes, and expert support.',
		image: {
			src: SVG0,
			alt: ''
		},
		linkLabel: 'Get A Quote',
		partnersList: [
			ShopifyLogo,
			DigitalOceanLogo,
			ShopifyLogo,
			DigitalOceanLogo,
			ShopifyLogo,
			DigitalOceanLogo
		]
	},
	aboutUs: {
		heading: 'why choose us',
		subHeading: 'More than an agency, we are Your Partner in Success',
		doings: [
			{
				icon: IconMessage,
				title: 'Our expertise',
				description:
					'We have a deep understanding of popular e-commerce platforms like Shopify and woocommerce.'
			},
			{
				icon: IconMessage,
				title: 'Proven track record',
				description:
					'We have helped and are still helping hundreds of businesses succeed online with their e-commerce stores.'
			},
			{
				icon: IconMessage,
				title: 'Our passion',
				description:
					'We are committed to providing our customers with the highest quality services possible'
			}
		]
	},
	projects: {
		heading: 'what we offer',
		subHeading: 'E-commerce Solutions for Businesses of All Sizes',
		works: [
			{
				img: {
					src: IMG0,
					alt: ''
				},
				title: 'Design',
				description:
					"Your E-commerce store is the face of your business online, so it's important to make a good first impression. A well-designed store is easy to navigate, visually appealing, and optimized for conversions.",
				route: { to: '/contact-us', title: 'Get more details' }
			},
			{
				img: {
					src: IMG1,
					alt: ''
				},
				title: 'Development',
				description:
					"We understand that every business is different, so we tailor our E-commerce development services to meet your specific needs and budget. We'll work with you to understand your goals and develop a plan to help you achieve them. Whether you're just starting out with Shopify or you're looking to take your store to the next level, we can help!",
				route: { to: '/contact-us', title: 'Contact us now' }
			},
			{
				img: {
					src: IMG2,
					alt: ''
				},
				title: 'Design',
				description:
					"Your E-commerce store is the face of your business online, so it's important to make a good first impression. A well-designed store is easy to navigate, visually appealing, and optimized for conversions.",
				route: { to: '/contact-us', title: 'Find out how' }
			}
		].map((work, i) => ({ ...work, flipped: Boolean(i % 2) }))
	},
	testimonials: {
		heading: 'Our Happy Clients',
		subHeading:
			'At THDC Technologies, we are committed to providing our clients with the best possible experience. We are proud to say that our clients love working with us, and they have given us rave reviews.',
		testimonials: [
			{
				comment:
					'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
				img: {
					src: IMG4,
					alt: ''
				},
				name: 'Johnson B. Steven',
				title: 'CEO',
				company: 'Stripe',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			},
			{
				comment:
					'I was so impressed with the quality of work that THDC Technologies did for me. They were able to take my vision and turn it into a reality. I highly recommend them to anyone looking for a professional and reliable web development company.',
				img: {
					src: IMG5,
					alt: ''
				},
				name: 'Jane Doe',
				title: 'Owner',
				company: 'Jane Doe Photography',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStar]
			},
			{
				comment:
					'We were struggling to grow our online sales, but after working with the team, we saw a significant increase in traffic and conversions. They are experts in the field, and they helped us develop a strategy that worked for our business.',
				img: {
					src: IMG6,
					alt: ''
				},
				name: 'Peter Jones',
				title: 'Marketing Manager',
				company: 'Jones & Associates',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled]
			},
			{
				comment:
					"We've been working with the team at  THDC Technologies for over a year now, and we've been extremely happy with their services. They are always responsive to our needs, and they go the extra mile to help us succeed.",
				img: {
					src: IMG4,
					alt: ''
				},
				name: 'John Smith',
				title: 'CEO',
				company: 'Acme Corporation',
				rating: [IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled, IconStarFilled]
			}
		]
	},
	subscribe: {
		heading: 'Be among those that hear from us first.',
		subHeading:
			'Sign up for our email list to get first-hand information about new products, special offers, and expert advice that can help you take your E-commerce store to the next level.'
	}
};
