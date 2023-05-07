export default function Form() {
	return (
		<form
			className="flex flex-col mb-4 p-1 bg-alice rounded-sm min-w-[90%] sm:min-w-[80%] md:min-w-[75%]"
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
				className="border-cerulean border-2 focus:outline-none text-black pl-1"
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
				className="border-cerulean border-2 focus:outline-none pl-1 text-black"
			/>

			<label
				htmlFor="message"
				className="text-cerulean">
				Message
			</label>
			<textarea
				className="border-cerulean border-2 focus:outline-none min-h-[30vh] pl-1 text-black"
				name="message"
				id="message"
				placeholder="Form submissions are currently disabled. You can get ahold of me through LinkedIn or Twitter."
				required></textarea>

			<button
				type="submit"
				className="bg-cerulean rounded-b-sm white hover:cursor-not-allowed"
				disabled>
				Submit Request
			</button>
		</form>
	);
}
