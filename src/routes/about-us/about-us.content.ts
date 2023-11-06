import { IconBrandAsana, IconBuilding, IconPalette, IconSettings } from '@tabler/icons-svelte';
import { AboutUsHero } from '$lib/assets/images';

export default {
	hero: {
		heading: 'About Us',
		subHeading: {
			0: "Our team of experienced professionals is passionate about helping our clients achieve their business goals. We take the time to understand each client's unique needs and develop customized solutions that deliver results.",
			1: 'We believe that every business has a story to tell, and we are committed to helping our clients tell their stories in a way that resonates with their target audience. We are also committed to providing our clients with the highest quality of service and support.'
		},
		image: {
			src: AboutUsHero,
			alt: ''
		}
	},
	whatWeDo: {
		doings: [
			{ icon: IconBuilding, title: 'Web Development' },
			{ icon: IconPalette, title: 'Design' },
			{ icon: IconSettings, title: 'SEO Expertise' },
			{ icon: IconBrandAsana, title: 'Project Management' }
		]
	}
};
