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
		<section className="max-container bg-white">
			<div className="flex w-full gap-2 justify-between">
				<div className="flex gap-4 flex-col">
					<h1 className="head-text">
						Hello, <br></br>I'm <span className="violet-gradient_text font-semibold drop-shadow"> Aiturgan!</span> 👋
					</h1>
					<div className="flex gap-3 items-center">
						<img src={mcr} alt="Microsoft" className="w-[60px]" />
						<p>'24 Software Engineer Intern and Asians @ Microsoft Mentoring International Program Recipient</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={uber} alt="Uber Career Prep" className="w-[60px]" />
						<p>'24 UCP Software Engineer Fellow</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={mlh} alt="MLH" className="w-[60px]" />
						<p>8 times hackathon winner with Mobile, VR and fullstack apps</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={umsl} alt="University of Missouri-St. Louis" className="w-[60px]" />
						<p>Bachelors Degree Student, Computer Science</p>
					</div>
					<div className="flex gap-3 items-center">
						<img src={stlcc} alt="St. Louis Community College" className="w-[60px]" />
						<p>"Pillar of STLCC" Award Recipient, Dean's List, 2024 President of TRIO Student Leadership Board, 2023 Women in STEM President</p>
					</div>
				</div>

				<img src={me} alt="Collage of photos" className="max-w-md" />
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
					<p>I enjoy working on challenging projects with talented people!</p>
				</div>

				<div className="mt-2 flex">
					<VerticalTimeline lineColor="#8634eb">
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: 'white', color: '#8634eb', border: '3px solid #8634eb' }}
								icon={
									<div className="flex justify-center items-center w-full h-full">
										<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
									</div>
								}
								contentStyle={{
									borderBottom: '8px',
									borderStyle: 'solid',
									borderBottomColor: '#8634eb',
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
									{experience.points.map((point, idx) => (
										<li key={`experience-point-${idx}`} className="text-black-500/50 font-normal pl-1 text-sm">
											{point}
										</li>
									))}
								</ul>

								{experience.company_name === 'Microsoft x Cyborg Mobile' && (
									<div className="mt-2 flex flex-col gap-2">
										<h4 className="text-sm text-violet-500 font-bold">Showcase Video:</h4>
										<iframe
											className="rounded-md border border-slate-300"
											width="100%"
											height="300"
											src="https://www.youtube.com/embed/zuoWSaAGSos?si=AA425xBW6q2KHkvk"
											title="Microsoft Internship Showcase"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
								)}
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>
			<hr className="border-violet-600" />
			<CTA />
		</section>
	);
};

export default About;
