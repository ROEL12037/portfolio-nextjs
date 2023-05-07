export default function Contact() {
	return (
		<main className="flex flex-col items-center justify-center w-full min-h-[92vh]">
			<h2 className="mb-4 text-4xl text-cerulean font-medium">Get in touch</h2>
			<form
				className="flex flex-col mb-4 min-w-[90vw] p-1 bg-alice rounded-sm"
				action=""
				method="post">
				<label
					htmlFor="name"
					className="text-cerulean">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name"
					required
					className="border-cerulean border-2 focus:outline-none placeholder:pl-1"
				/>

				<label
					htmlFor="email"
					className="text-cerulean">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Add your email address"
					required
					className="border-cerulean border-2 focus:outline-none placeholder:pl-1"
				/>

				<label
					htmlFor="message"
					className="text-cerulean">
					Message
				</label>
				<textarea
					className="border-cerulean border-2 focus:outline-none min-h-[30vh] placeholder:pl-1"
					name="message"
					id="message"
					placeholder="Type your message."
					required></textarea>

				<button
					type="submit"
					className="bg-cerulean rounded-b-sm white"
					disabled>
					Submit Request
				</button>
			</form>
		</main>
	);
}
