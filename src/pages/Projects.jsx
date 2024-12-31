import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { projects } from '../constants'; // Ensure projects are categorized by type
import { useState } from 'react';

const Projects = () => {
	const [activeTab, setActiveTab] = useState('Fullstack'); // Default tab is Fullstack

	// Filter projects based on the active tab
	const filteredProjects = projects.filter((project) => project.type === activeTab);

	return (
		<section className="max-container bg-white">
			<div>
				<h1 className="head-text">
					My <span className="violet-gradient_text drop-shadow font-semibold">Projects</span> 🎨
				</h1>
				<p className="text-slate-500 mt-2 leading-relaxed">
					I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source,
					so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further
					enhancements. Your collaboration is highly valued!
				</p>

				{/* Tabs */}
				<div className="mt-10 flex gap-5">
					{['Fullstack', 'UX/UI', 'Art'].map((tab) => (
						<button
							key={tab}
							className={`px-6 py-2 rounded-md font-semibold ${
								activeTab === tab ? 'bg-violet-600 text-white' : 'bg-gray-200 text-slate-600 hover:bg-gray-300'
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Projects Display */}
				<div className="flex flex-wrap my-20 gap-16">
					{filteredProjects.map((project) => (
						<div className="lg:w-[400px] w-full" key={project.name}>
							<div className="block-container w-12 h-12">
								<div className={`btn-back rounded-xl ${project.theme}`} />
								<div className="btn-front rounded-xl flex justify-center items-center">
									<img src={project.iconUrl} alt="project icon" className="w-1/2 h-1/2 object-contain" />
								</div>
							</div>

							<div className="mt-5 flex flex-col">
								<h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
								<p className="mt-2 text-slate-500">{project.description}</p>
								<div className="mt-5 flex items-center gap-2 font-poppins">
									<Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
										Live Link
									</Link>
									<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
								</div>
							</div>
						</div>
					))}
				</div>

				<hr className="border-slate-200" />
			</div>
		</section>
	);
};

export default Projects;
