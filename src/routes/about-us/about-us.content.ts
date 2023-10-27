import { IconBrandAsana, IconBuilding, IconPalette, IconSettings } from '@tabler/icons-svelte';

export default {
	landing: {
		heading: 'About Us',
		subHeading: {
			0: "Our team of experienced professionals is passionate about helping our clients achieve their business goals. We take the time to understand each client's unique needs and develop customized solutions that deliver results.",
			1: 'We believe that every business has a story to tell, and we are committed to helping our clients tell their stories in a way that resonates with their target audience. We are also committed to providing our clients with the highest quality of service and support.'
		},
		images: {
			top: {
				src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjB3b3JraW5nJTIwYXQlMjBvZmZpY2UlMjBpbiUyMGZyb250JTIwb2YlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D',
				alt: ''
			},
			bottom: {
				src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb3VwJTIwd29ya2luZyUyMGF0JTIwb2ZmaWNlJTIwaW4lMjBmcm9udCUyMG9mJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
				alt: ''
			}
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
