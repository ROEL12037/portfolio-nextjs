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

	console.log(data);

	if (error) return <div>Error loading starred repositories</div>;
	if (!data) return <Spinner />;

	return (
		<main className="flex items-center justify-center w-full min-h-[92vh]">
			<section className="flex flex-col items-center">
				<h2 className="mb-4 text-4xl text-cerulean">Recent Projects</h2>

				<section className="flex flex-wrap w-full sm:flex-row flex-col">
					{data.map((repo) => {
						return (
							<section
								className="w-full sm:w-1/2 h-1/2 p-2"
								key={repo.id}>
								<div className="bg-white rounded-lg shadow-lg min-h-[150px]">
									<div className="px-6 py-4">
										<h3 className="font-bold text-gray-800 text-xl mb-2">
											{repo.repo.name}
										</h3>
										<Image
											src="https://via.placeholder.com/640x360"
											alt="Card image"
											width={640}
											height={360}
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
								</div>
							</section>
						);
					})}
					<section className="w-full sm:w-1/2 h-1/2 p-2">
						<div className="bg-white rounded-lg shadow-lg min-h-[150px]">
							<div className="px-6 py-4">
								<h3 className="font-bold text-gray-800 text-xl mb-2">
									Want to see more?
								</h3>
								<Image
									src="https://via.placeholder.com/640x360"
									alt="Card image"
									width={640}
									height={360}
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
						</div>
					</section>
				</section>
			</section>
		</main>
	);
}

/* 
possible
c5fffd \ celeste
D6FFF6 / ming green

*/
