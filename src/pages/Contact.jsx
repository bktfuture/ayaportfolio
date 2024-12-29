import React, { useState } from 'react';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
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
		<section className="relative flex lg:flex-row flex-col max-container">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">My contact information, resume and more!</h1>
				<div className="">
					<a href="https://www.linkedin.com/in/aiturgantalant/" target="_blank">
						<FaLinkedin style={{ color: 'purple' }} />
					</a>
					<a href="https://github.com/bktfuture" target="_blank">
						<FaGithub style={{ color: 'purple' }} />
					</a>
				</div>

				<form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Alice"
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></input>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="AliceDoe@gmail.com"
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></input>
					</label>
					<label className="text-black-500 font-semibold">
						Your message
						<textarea
							rows={4}
							name="message"
							className="textarea"
							placeholder="I think you are great fit for the position! Let's talk!"
							required
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></textarea>
					</label>
					<button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
						{isLoading ? 'Sending..' : 'Send Message'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
