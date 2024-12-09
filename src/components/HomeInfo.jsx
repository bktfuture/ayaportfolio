import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import headshot from '../assets/images/hs1.png';

const InfoBox = ({ text, link, btntext }) => (
	<div className="sm:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white ">
		<p className=" w-42 sm:text-xl  text-violet-900 font-meduim"> {text}</p>
		<Link to={link} className="">
			{btntext}
			<FaLongArrowAltRight style={{ color: 'violet' }} />
		</Link>
	</div>
);

const renderContent = {
	1: (
		<div className="sm:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white   >">
			<img src={headshot} alt="Headshot" className="w-32 h-32 "></img>
			<h1 className="w-42 sm:text-xl  text-violet-900 font-meduim">Hey! I'm Aiturgan, software engineer and creative thinker!</h1>
		</div>
	),
	2: <InfoBox text="I have interned in Microsoft and have extensive technical and communication skills!" link="/about" btntext="Learn more!"></InfoBox>,
	3: <InfoBox text="I have built several hackathon winning projects. Moreover, I do art too!" link="/projects" btntext="Learn more!"></InfoBox>,
	4: <InfoBox text="If you would like to work with me, don't hestiate to reach out!" link="/contact" btntext="Contact!"></InfoBox>,
};

const HomeInfo = ({ currentStage }) => {
	console.log(currentStage);
	console.log(renderContent[currentStage]);
	return renderContent[currentStage] || null;
};

export default HomeInfo;
