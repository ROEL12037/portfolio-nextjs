import Image from "next/image";

export default function GetReposError(error) {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-[92vh]">
			<div className="text-center">{`We are experiencing technical difficulties getting the project data.`}</div>
			<div className="mx-4">
				<Image
					src="https://thumbs.gfycat.com/EvenAccomplishedEquestrian-size_restricted.gif"
					alt="will ferrell"
					width={400}
					height={400}
				/>
			</div>
			<div>{error.message && `More info: ${error.message}`}</div>
		</div>
	);
}
