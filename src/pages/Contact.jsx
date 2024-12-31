import React, { useState } from 'react';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import together from '../assets/images/together.jpg';
import { useRef } from 'react';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

				{
					from_name: form.name,
					to_name: 'Aiturgan',
					from_email: form.email,
					to_email: 'aiturgan888@yahoo.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setIsLoading(false);

				// TO DO: succes and hide alert

				setForm({ name: '', email: '', message: '' });
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);

				// TO DO: shoe the error message
			});
	};

	const handleFocus = () => {};
	const handleBlur = () => {};

	return (
		<section className="relative flex lg:flex-row flex-col max-container justify-center bg-purple-500 min-h-screen items-center">
			<div className="flex w-full justify-center ">
				<div className="flex-1 min-w-[50%] flex flex-col bg-white backdrop-blur-md shadow-lg rounded-xl p-8">
					<h1 className="head-text text-violet-900">My contact information 💜</h1>
					<div className="flex lg:flex-row flex-col w-full justify-between pt-7">
						<div className="flex gap-4 flex-col">
							<a href="aiturgan888@gmail.com" target="_blank" className="flex items-center gap-4 text-lg text-violet-900">
								<IoMdMail style={{ color: '#8f0eff', fontSize: '42px' }} />
								aiturgan888@gmail.com
							</a>
							<a
								href="https://www.linkedin.com/in/aiturgantalant/"
								target="_blank"
								className="flex items-center gap-4 underlined text-violet-900"
							>
								<FaLinkedin style={{ color: '#8f0eff', fontSize: '42px' }} />
								<span className="text-lg">linkedin.com/in/aiturgantalant/</span>
							</a>
							<a href="https://github.com/bktfuture" target="_blank" className="flex items-center gap-4 text-lg text-violet-900">
								<FaGithub style={{ color: '#8f0eff', fontSize: '42px' }} />
								github.com/bktfuture
							</a>
							<a
								href="https://drive.google.com/file/d/13z21ByAycHrfEei7a2-gw_cF99-5dvPA/view?usp=drive_link"
								target="_blank"
								className="flex items-center gap-4 text-lg text-violet-900"
							>
								<IoMdDocument style={{ color: '#8f0eff', fontSize: '42px' }} />
								resume
							</a>
						</div>
						<div className="flex flex-col gap-2">
							<img src={together} alt="Group photo at Polkadot Hackathon with Conor Daly" className="max-w-xs rounded-lg shadow-md"></img>
							<p className=" max-w-xs italic text-sm text-gray-700">
								Me and my friends at the Harvard Polkadot Hackthon with Conor Daly, IndyCar/NASCAR Driver
							</p>
						</div>
					</div>
					<h1 className="head-text text-violet-900">Get in touch! 💫</h1>
					<form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
						<label className="text-violet-900 font-semibold">
							Name
							<input
								type="text"
								name="name"
								className="input bg-white/90 backdrop-blur-sm"
								placeholder="Alice"
								required
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							></input>
						</label>
						<label className="text-violet-900 font-semibold">
							Email
							<input
								type="email"
								name="email"
								className="input bg-white/90 backdrop-blur-sm"
								placeholder="AliceDoe@gmail.com"
								required
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							></input>
						</label>
						<label className="text-violet-900 font-semibold">
							Your message
							<textarea
								rows={4}
								name="message"
								className="textarea bg-white/90 backdrop-blur-sm"
								placeholder="I think you are a great fit for the position! Let's talk!"
								required
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							></textarea>
						</label>
						<button
							type="submit"
							className="btn bg-violet-500 text-white hover:bg-violet-700 transition-all"
							onFocus={handleFocus}
							onBlur={handleBlur}
							disabled={isLoading}
						>
							{isLoading ? 'Sending..' : 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
