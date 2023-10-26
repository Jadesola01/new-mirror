import {
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube
} from '@tabler/icons-svelte';

export default {
	routes: [
		{ href: '/', label: 'Home' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/contact-us', label: 'Contact Us' },
		{ href: '/products', label: 'Products' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/faqs', label: 'FAQs' },
		{ href: '/get-a-quote', label: 'Get A Quote' }
	],
	footerSection: {
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod proin turpis malesuada montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod proin turpis malesuada montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod pro',
		socials: [
			{
				href: 'https://twitter.com/thdctech',
				label: 'Check out our Twitter',
				icon: IconBrandTwitter
			},
			{
				href: 'https://instagram.com/thdctech',
				label: 'Check out our Instagram',
				icon: IconBrandInstagram
			},
			{
				href: 'https://linkedin.com/thdctech',
				label: 'Check out our LinkedIn',
				icon: IconBrandLinkedin
			},
			{
				href: 'https://youTube.com/thdctech',
				label: 'Check out our YouTube',
				icon: IconBrandYoutube
			}
		]
	}
};
