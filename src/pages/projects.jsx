import Image from "next/image";
import useSWR from "swr";
import Spinner from "@/components/Spinner";
import { formatDate } from "@/utils/dateHelpers";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

export default function Projects({ starredRepos }) {
	const { data, error } = useSWR("/api/get-starred-repos", fetcher, {
		initialData: starredRepos,
	});

	// console.log(data);

	if (error)
		return (
			<div className="flex flex-col items-center justify-center w-full min-h-[92vh]">
				<div>{`We are experiencing technical difficulties getting the project data.`}</div>
				<div>some gif</div>
				<div>{error && `More info: ${error.message}`}</div>
			</div>
		);

	if (!data) return <Spinner />;

	return (
		<main className="flex items-center justify-center w-full min-h-[92vh]">
			<section className="flex flex-col items-center mx-4 mb-4">
				<h2 className="mb-4 text-4xl text-cerulean">Recent Projects</h2>

				<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
					{data.map((repo) => {
						return (
							<section
								className="bg-white rounded-lg shadow-lg"
								key={repo.id}>
								<div className="px-6 py-4">
									<h3 className="font-bold text-gray-800 text-xl mb-2">
										{repo.repo.name}
									</h3>
									<Image
										src="https://via.placeholder.com/440x248"
										alt="card image"
										width={440}
										height={248}
										className=""
									/>
									<p className="text-gray-700 text-base">
										Demo:{" "}
										<a
											href={repo.repo.homepage}
											target="_blank"
											className="hover:text-cerulean underline font-semibold">
											{repo.repo.name}
										</a>
									</p>
									<p className="text-gray-700 text-base">
										Created: {formatDate(repo.repo.created_at)}
									</p>
								</div>
							</section>
						);
					})}
					<section className="bg-white rounded-lg shadow-lg">
						<div className="px-6 py-4">
							<h3 className="font-bold text-gray-800 text-xl mb-2">
								Want to see more?
							</h3>
							<Image
								src="https://via.placeholder.com/448x248"
								alt="card image"
								width={440}
								height={248}
							/>
							<p className="text-gray-700 text-base">
								Check out the rest of my public repositories{" "}
								<a
									href="https://github.com/ROEL12037?tab=repositories"
									className="hover:text-cerulean underline font-semibold"
									target="_blank">
									here
								</a>
								.
							</p>
						</div>
					</section>
				</section>
			</section>
		</main>
	);
}
