import React from 'react';
import headshot from '../assets/images/headshot.jpeg';

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center text-violet-900 py-4 px-8 mx-5 bg-white">
			Hey! I'm Aiturgan, software engineer and creative thinker!
			<img src={headshot} alt="Headshot" className="w-32 h-32"></img>
		</h1>
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
