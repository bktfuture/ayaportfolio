import {
	arrow,
	car,
	contact,
	css,
	estate,
	express,
	figma,
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

import dev from '../assets/images/art/devnews.png';
import donut from '../assets/images/art/donut.png';
import flower from '../assets/images/art/flower.png';
import frog from '../assets/images/art/frog.png';
import glass from '../assets/images/art/glass.png';
import karoke from '../assets/images/art/songwars.png';
import mc from '../assets/images/mc.png';
import ocean from '../assets/images/art/ocean.jpg';
import python from '../assets/icons/python.svg';
import room from '../assets/images/art/room.png';
import social from '../assets/images/art/mobile.png';
import stlcc from '../assets/images/stl.jpg';

export const skills = [
	{
		imageUrl: python,
		name: 'Python',
		type: 'Backend',
	},
	{
		imageUrl: javascript,
		name: 'JavaScript',
		type: 'Frontend',
	},
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},

	{
		imageUrl: express,
		name: 'Express',
		type: 'Backend',
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
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
		imageUrl: nextjs,
		name: 'Next.js',
		type: 'Frontend',
	},
	{
		imageUrl: react,
		name: 'React',
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
		imageUrl: opencv,
		name: 'OpenCV',
		type: 'Computer Vision',
	},

	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},

	{
		imageUrl: motion,
		name: 'Motion',
		type: 'Animation',
	},
	{
		imageUrl: figma,
		name: 'Figma',
		type: 'Design',
	},
	{
		imageUrl: unity,
		name: 'Unity',
		type: 'AR/VR Development',
	},
];

export const experiences = [
	{
		title: 'Software Engineer Intern',
		company_name: 'Microsoft x Cyborg Mobile',
		icon: mc,
		iconBg: '#f7edff',
		date: 'June 2024 - August 2024',
		points: [
			'Led a team of 5 in developing a full-stack web application leveraging OpenCV for advanced computer vision and MediaPipe for body recognition',
			'Designed backend architecture using Flask, integrating two AI models as API calls with an 90% success rate',
			'Integrated Azure AI cognitive services to provide text-to-speech accessibility',
		],
	},
	{
		title: 'Academic Coach, Math Tutor',
		company_name: 'TRIO Student Support Services',
		icon: stlcc,
		iconBg: '#f7edff',
		date: 'September 2023 - June 2024',
		points: [
			'Conducted mentoring and tutoring sessions to assist 25+ students in various Math courses such as Quantitative Reasoning, Precalculus, and Statistics, helping them gain an overall 3.0 - 4.0 GPA average',
			'Assisted high school, not traditional, first-generation students with the transition to college',
			'Acted as a role model in demonstrating study strategies and habits necessary for success in specified academic areas',
		],
	},
];

export const projects = [
	{
		name: 'BobaBliss',
		description: [
			'Developed full-stack mobile application using React Native and Flask and MongoDB for backend',
			'Implemented multiple UI animations including Tinder swiping animation using React Native Reanimated',
			'Built boba matching algorithm that counts user’s prefereces, location and moods',
		],
		github: 'https://github.com/bktfuture/bobabliss',
		youtube: 'https://www.youtube.com/watch?v=ngFfV72BvRg',
		type: 'Fullstack',
	},
	{
		name: 'Tsunami Drill',
		description: [
			'In the team of two built winning VR application with Unity to scan surroundings and simulate Tsunami Drill',
			'Utilized C# Scripting to build oxygen levels logic and water interactions with the player',
			'Implemented Meta Depth API & Scene API to map water into the surroundings',
		],
		link: 'https://devpost.com/software/tsunami-simulator',
		youtube: 'https://www.youtube.com/watch?v=njj4bv4J_uo',
		github: 'https://github.com/CocoaMilka/Tsunami-Simulator2',
		type: 'Fullstack',
	},
	{
		name: 'EducateAll',
		description: [
			'Cooperated with a team of three to build a web app platform that helps tutors have engaging video call sessions',
			'Integrated WebRTC API to establish video, audio streaming with 31.0s live stream latency',
			'Designed backend with Next.js and Express ,WebSocket API and MySQL to store users’ data',
		],
		link: 'https://devpost.com/software/truhacks-2024',
		github: 'https://github.com/JasonXu314/truhacks-2024',
		youtube: 'https://www.youtube.com/watch?v=fsC-bcyBFTs',
		type: 'Fullstack',
	},
	{
		name: 'Cosmos VR',
		description: [
			'In the team of two created VR and web3 application that allows users to learn about cosmos and chat with the planets of the solar system with Gemini API',
			'Integrated Meta Voice and Dictation SDK to achieve seamless voice interactions with the app and the user',
			'Utilized NASA`s Context Data Ingestion to create function calls with Gemini 1.5 Flash to get the information about the stars',
		],
		link: 'https://devpost.com/software/cosmos-vr',
		youtube:
			'https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=Mjg2NjQsMTY0NTAz&v=YMfsDSSvXh4&feature=youtu.be',
		github: 'https://github.com/WilliamUW/cosmosVR/',
		type: 'Fullstack',
	},
	{
		name: 'Avatar Flower',
		picUrl: flower,
		type: 'Art',
	},
	{
		name: 'Ocean',
		picUrl: ocean,
		type: 'Art',
	},
	{
		name: 'Cozy Room',
		picUrl: room,
		type: 'Art',
	},
	{
		name: 'Cute Frog',
		picUrl: frog,
		type: 'Art',
	},
	{
		name: '3D Glass',
		picUrl: glass,
		type: 'Art',
	},
	{
		name: 'Dev News Website',
		picUrl: dev,
		type: 'UX/UI',
	},
	{
		name: '3D Assets Website',
		picUrl: donut,
		type: 'UX/UI',
	},
	{
		name: 'Mobile Karaoke App',
		picUrl: karoke,
		type: 'UX/UI',
	},
	{
		name: 'Mobile Social App',
		picUrl: social,
		type: 'UX/UI',
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
