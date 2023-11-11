import { IMG7 } from '$lib/assets/images';
import { IconSetting, IconDesign, IconBuilding, AsanaLogo } from '$lib/assets/vectors';

export default {
	hero: {
		heading: 'About Us',
		subHeading: {
			0: "We have a proven track record of success in helping businesses of all sizes create and grow their e-commerce stores. We've worked with clients in a wide range of industries, from fashion and beauty to food and beverage.",
			1: "We're committed to providing our clients with the highest quality apps, themes, and services. We're also passionate about helping our clients succeed. We offer a wide range of support resources, including blog posts, webinars, and one-on-one consultations."
		},
		image: {
			src: IMG7,
			alt: ''
		}
	},
	whatWeDo: {
		doings: [
			{ icon: IconBuilding, title: 'Web Development' },
			{ icon: IconDesign, title: 'Design' },
			{ icon: IconSetting, title: 'SEO Expertise' },
			{ icon: AsanaLogo, title: 'Project Management' }
		]
	}
};
