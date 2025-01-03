import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import contact from '../assets/images/contact.PNG';
import headshot from '../assets/images/hs1.png';
import mic from '../assets/images/mic.PNG';
import work from '../assets/images/work.PNG';
const InfoBox = ({ text, link, btntext, imgsrc, imgalt }) => (
	<div className="sm:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white ">
		{imgsrc && <img src={imgsrc} alt={imgalt || 'Image'} className="w-32 h-32" />}
		<div className=" flex flex-col items-center gap-4">
			<p className=" w-42 sm:text-xl  text-violet-900 font-meduim"> {text}</p>
			<Link to={link} className="flex items-center gap-2 ">
				{btntext}
				<FaLongArrowAltRight style={{ color: 'violet' }} />
			</Link>
		</div>
	</div>
);

const renderContent = {
	1: (
		<div className="sm:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white   >">
			<img src={headshot} alt="Headshot" className="w-32 h-32 "></img>
			<h1 className="w-42 sm:text-xl  text-violet-900 font-meduim">
				Hey! I'm Aiturgan Talant, welcome to my portfolio! Long press on the screen to learn more about what I do!
			</h1>
		</div>
	),
	2: (
		<InfoBox
			imgsrc={mic}
			imgalt="Photo at Microsoft Headquarters"
			text="I am software engineer with expirience at Microsoft, UX/UI design hobbyist and hackathon enthusiast!"
			link="/about"
			btntext="Learn more about me!"
		></InfoBox>
	),
	3: (
		<InfoBox
			imgsrc={work}
			imgalt="OpenCV project"
			text="I enjoy fullstack developement and have built several hackathon winning projects! Moreover, I do art and design too!"
			link="/projects"
			btntext="See my work!"
		></InfoBox>
	),
	4: (
		<InfoBox
			imgsrc={contact}
			imgalt="Working together"
			text="If you would like to work with me, don't hestiate to reach out!"
			link="/contact"
			btntext="Contact!"
		></InfoBox>
	),
};

const HomeInfo = ({ currentStage }) => {
	console.log(currentStage);
	console.log(renderContent[currentStage]);
	return renderContent[currentStage] || null;
};

export default HomeInfo;
