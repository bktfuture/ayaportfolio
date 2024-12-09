import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import headshot from '../assets/images/hs1.png';

const infoBox = ({ text, link, btnText }) => (
	<div className="m:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white">
		<p className="font-medium"> {text}</p>
		<Link to={link} className=" neo-brutalism-white neo-btn">
			{btnText}
			<FaLongArrowAltRight style={{ color: 'red' }} />
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
	2: <infoBox text="I have interned in Microsoft and have extensive technical and communication skills!" link="/about" btnText="Learn more!"></infoBox>,
	3: <infoBox text="I have built several hackathon winning projects. Moreover, I do art too!" link="/projects" btnText="Learn more!"></infoBox>,
	4: <infoBox text="If you would like to work with me, don't hestiate to reach out!" link="/contact" btnText="Contact!"></infoBox>,
};

const HomeInfo = ({ currentStage }) => {
	console.log(currentStage);
	console.log(renderContent[currentStage]);
	return renderContent[currentStage] || null;
};

export default HomeInfo;
