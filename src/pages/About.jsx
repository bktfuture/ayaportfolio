import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiences, skills } from '../constants';

import CTA from '../components/CTA';
import mcr from '../assets/images/mc.png';
import me from '../assets/images/me.JPEG';
import mlh from '../assets/images/mlh.png';
import stlcc from '../assets/images/stl.jpg';
import uber from '../assets/images/uber.png';
import umsl from '../assets/images/umsl.png';

const About = () => {
	return (
		<section className="max-container">
			<div className="flex w-full gap-2 justify-between">
				<div className="flex gap-4 flex-col">
					<h1 className="head-text">
						Hello, <br></br>I'm <span className="violet-gradient_text font-semibold drop-shadow"> Aiturgan!</span> 👋
					</h1>
					<div className="flex gap-3 items-center">
						<img src={umsl} alt="University of Missouri-St. Louis" className="w-[60px]"></img>
						<p>Computer Science, Graduation date: 2027</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={stlcc} alt="St. Louis Community College" className="w-[60px]"></img>
						<p>"Pillar of STLCC" Award Recipient, Dean's List, 2024 President of TRIO Student Leadership Board, 2023 Women in STEM President</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={uber} alt="University of Missouri-St. Louis" className="w-[60px]"></img>
						<p>2024 UCP Software Engineer Fellow</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={mcr} alt="University of Missouri-St. Louis" className="w-[60px]"></img>
						<p>Asians @ Microsoft Mentoring International Program Recipient</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={mlh} alt="University of Missouri-St. Louis" className="w-[60px]"></img>
						<p>8 times hackathon winner with Mobile, VR and fullstack apps</p>
					</div>
				</div>

				<img src={me} alt="Collage of photos" className="max-w-md"></img>
			</div>

			<div className="mt-10 flex justify-center gap-3 text-slate-500">
				<p>🌟 Outside of academics, I enjoy everything cosmos and travel related! I love dancing, filming and hiking!</p>
			</div>
			<div className="py-10 flex flex-col">
				<h3 className="subhead-text">My Skills ⚙️</h3>

				<div className="mt-16 flex flex-wrap gap-12">
					{skills.map((skill) => (
						<div className="block-container w-20 h-20" key={skill.name}>
							<div className="btn-back rounded-xl" />
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="py-16">
				<h3 className="subhead-text">Work Experience 👩🏽‍💻</h3>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
				</div>

				<div className="mt-12 flex">
					<VerticalTimeline>
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: experience.iconBg }}
								icon={
									<div className="flex justify-center items-center w-full h-full">
										<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
									</div>
								}
								contentStyle={{
									borderBottom: '8px',
									borderStyle: 'solid',
									borderBottomColor: experience.iconBg,
									boxShadow: 'none',
								}}
							>
								<div>
									<h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
									<p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
										{experience.company_name}
									</p>
								</div>

								<ul className="my-5 list-disc ml-5 space-y-2">
									{experience.points.map((point, index) => (
										<li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>
			<hr className="border-slate-200" />
			<CTA />
		</section>
	);
};

export default About;
