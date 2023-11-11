import { InstagramLogo, LinkedInLogo, TwitterLogo, YoutubeLogo } from 'src/lib/assets/vectors';

export default {
	routes: [
		{ route: '/', label: 'Home' },
		{ route: '/about-us', label: 'About Us' },
		{ route: '/contact-us', label: 'Contact Us' },
		{ route: '/products', label: 'Products' },
		{ route: '/blog', label: 'Blog' },
		{ route: '/faqs', label: 'FAQs' }
	],
	footerSection: {
		paragraph:
			"We're a team of experienced E-commerce platforms professionals who are passionate about helping businesses succeed. We are dedicated to providing our clients with the tools and resources they need to succeed. We're so confident that you'll be happy with our E-commerce development services that we offer a 100% satisfaction guarantee.",
		socials: [
			{
				href: 'https://twitter.com/thdctech',
				label: 'Check out our Twitter',
				icon: TwitterLogo
			},
			{
				href: 'https://instagram.com/thdctech',
				label: 'Check out our Instagram',
				icon: InstagramLogo
			},
			{
				href: 'https://linkedin.com/thdctech',
				label: 'Check out our LinkedIn',
				icon: LinkedInLogo
			},
			{
				href: 'https://youTube.com/thdctech',
				label: 'Check out our YouTube',
				icon: YoutubeLogo
			}
		]
	}
};
