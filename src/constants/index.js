import {
	arrow,
	car,
	contact,
	css,
	estate,
	express,
	figma,
	flask,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	opencv,
	pricewise,
	python,
	react,
	redux,
	sass,
	snapgram,
	soundoff,
	soundon,
	summiz,
	tailwindcss,
	threads,
	twitter,
	typescript,
	unity,
} from '../assets/icons';

import mc from '../assets/images/mc.png';

export const skills = [
	{
		imageUrl: css,
		name: 'CSS',
		type: 'Frontend',
	},
	{
		imageUrl: express,
		name: 'Express',
		type: 'Backend',
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Version Control',
	},
	{
		imageUrl: github,
		name: 'GitHub',
		type: 'Version Control',
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend',
	},
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend',
	},
	{
		imageUrl: mongodb,
		name: 'MongoDB',
		type: 'Database',
	},
	{
		imageUrl: mui,
		name: 'Material-UI',
		type: 'Frontend',
	},
	{
		imageUrl: react,
		name: 'React',
		type: 'Frontend',
	},
	{
		imageUrl: redux,
		name: 'Redux',
		type: 'State Management',
	},
	{
		imageUrl: sass,
		name: 'Sass',
		type: 'Frontend',
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
		type: 'Backend',
	},
	{
		imageUrl: nextjs,
		name: 'Next.js',
		type: 'Frontend',
	},
	{
		imageUrl: motion,
		name: 'Motion',
		type: 'Animation',
	},
	{
		name: figma,
		type: 'Design',
	},
	{
		name: unity,
		type: 'AR/VR Development',
	},
	{
		name: python,
		type: 'Backend',
	},
	{
		name: opencv,
		type: 'Computer Vision',
	},
];

export const experiences = [
	{
		title: 'Software Engineer Intern',
		company_name: 'Microsoft x Cyborg Mobile',
		icon: mc,
		iconBg: '#a2d2ff',
		date: 'June 2024 - August 2024',
		points: [
			'Led a team of 5 in developing a full-stack web application leveraging OpenCV for advanced computer vision and MediaPipe for body recognition.',
			'Designed backend architecture using Flask, integrating AI models as API calls with an 85% success rate.',
			'Integrated Azure AI cognitive services to provide text-to-speech accessibility.',
		],
	},
	{
		title: 'Academic Coach, Math Tutor',
		company_name: 'TRIO Student Support Services',
		icon: shopify,
		iconBg: '#b7e4c7',
		date: 'September 2023 - June 2024',
		points: [
			'Mentored 25+ students in Math courses, helping them achieve GPAs of 3.0 - 4.0.',
			'Demonstrated study strategies and habits for success in STEM courses.',
		],
	},
];

export const projects = [
	{
		iconUrl: snapgram,
		theme: 'btn-back-pink',
		name: 'BobaBliss',
		description:
			'Developed a full-stack mobile app using React Native, Flask, and MongoDB, featuring a boba matching algorithm based on user preferences, location, and mood.',
		link: 'https://github.com/bktfuture/bobabliss',
	},
	{
		iconUrl: estate,
		theme: 'btn-back-blue',
		name: 'Cycle',
		description:
			'Led a team to build an AR app using Unity and Snapdragon Spaces SDK to educate users about recycling, with UI designed in Figma and Bard API integration for image recognition.',
		link: 'https://devpost.com/software/cycle-j4mrpa',
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Song Wars',
		description:
			'Built a karaoke mobile app using React Native and MySQL, allowing users to create lobbies, perform, and judge songs, with UI/UX ideated and designed by me.',
		link: 'https://devpost.com/software/song-wars',
	},
	{
		iconUrl: summiz,
		theme: 'btn-back-yellow',
		name: 'Cheat Checker',
		description:
			'Collaborated to build a web app using Django and Python with an AI eye-tracking model to help professors ensure academic integrity, with frontend developed in HTML/CSS.',
		link: 'https://devpost.com/software/cheat-checker',
	},
];

export const socialLinks = [
	{
		name: 'Contact',
		iconUrl: contact,
		link: '/contact',
	},
	{
		name: 'GitHub',
		iconUrl: github,
		link: 'https://github.com/bktfuture',
	},
	{
		name: 'LinkedIn',
		iconUrl: linkedin,
		link: 'https://www.linkedin.com/in/aiturgantalant',
	},
];
