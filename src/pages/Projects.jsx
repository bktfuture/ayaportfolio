import { FiLink } from 'react-icons/fi';
import { projects } from '../constants';
import { useState } from 'react';

const Projects = () => {
	const [activeTab, setActiveTab] = useState('Fullstack');
	const [popupImage, setPopupImage] = useState(null);

	const filteredProjects = projects.filter((project) => project.type === activeTab);

	return (
		<section className="max-container bg-white py-10">
			<div>
				<h1 className="text-4xl font-bold text-center">
					My <span className="violet-gradient_text drop-shadow font-semibold">Projects</span> 🎨
				</h1>
				<p className="text-slate-500 mt-4 text-center leading-relaxed max-w-3xl mx-auto">
					I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source,
					so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further
					enhancements. Your collaboration is highly valued!
				</p>

				{/* Tabs */}
				<div className="mt-10 flex justify-center gap-5">
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

				{/* Content Display */}
				<div className="mt-10">
					{activeTab === 'Fullstack' && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{filteredProjects.map((project) => (
								<div key={project.name} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between border">
									{/* Video */}
									{project.youtube && (
										<iframe
											width="100%"
											height="250"
											src={project.youtube.replace('watch?v=', 'embed/')} // Replace watch?v= with embed/
											title={project.name}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="rounded-md mb-4"
										></iframe>
									)}

									{/* Title */}
									<h4 className="text-2xl font-semibold mt-2 text-gray-800">{project.name} 🏆</h4>

									{/* Description */}
									<ul className="list-disc pl-5 mt-2 text-slate-600">
										{project.description?.map((point, index) => (
											<li key={index}>{point}</li>
										))}
									</ul>

									{/* Links */}
									<div className="mt-4 flex items-center justify-center gap-2">
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-purple-600 font-semibold hover:underline flex items-center gap-1"
											>
												<FiLink /> Link
											</a>
										)}
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-purple-600 font-semibold hover:underline"
											>
												GitHub
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					)}

					{/* Art Tab */}
					{activeTab === 'Art' && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{filteredProjects.map((project) => (
								<div
									key={project.name}
									className="relative group cursor-pointer"
									onClick={() => setPopupImage(project.picUrl)} // Set popup image
								>
									<img
										src={project.picUrl}
										alt={project.name}
										className="rounded-lg shadow-md w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<h4 className="mt-4 font-semibold text-center text-lg">{project.name}</h4>
								</div>
							))}
						</div>
					)}

					{/* UX/UI Tab */}
					{activeTab === 'UX/UI' && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{filteredProjects.map((project) => (
								<div
									key={project.name}
									className="relative group cursor-pointer"
									onClick={() => setPopupImage(project.picUrl)} // Set popup image
								>
									<img
										src={project.picUrl}
										alt={project.name}
										className="rounded-lg shadow-md w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<h4 className="mt-4 font-semibold text-center text-lg">{project.name}</h4>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Full-Screen Popup */}
			{popupImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
					onClick={() => setPopupImage(null)} // Close popup on background click
				>
					<div className="relative">
						<img src={popupImage} alt="Full Size" className="max-w-full max-h-screen rounded-lg" />
						<button
							className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full shadow-md font-bold hover:bg-gray-200"
							onClick={() => setPopupImage(null)} // Close popup
						>
							X
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Projects;
