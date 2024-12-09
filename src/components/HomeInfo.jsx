import React from 'react';
import headshot from '../assets/images/hs1.png';

const renderContent = {
	1: (
		<div className="sm:text-xl rounded-lg flex items-center shadow-md  sm:leading-snug text-center text-violet-900 py-4 px-8 bg-white   >">
			<img src={headshot} alt="Headshot" className="w-32 h-32 "></img>
			<h1 className="w-42 sm:text-xl  text-violet-900">Hey! I'm Aiturgan, software engineer and creative thinker!</h1>
		</div>
	),
	2: <h1>2</h1>,
	3: <h1>3</h1>,
	4: <h1>4</h1>,
};

const infoBox = ({ text, link, btnText }) => <div className="info-box">{text}</div>;

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;
