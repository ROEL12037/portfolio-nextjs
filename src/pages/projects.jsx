// import packages
import useSWR from "swr";

// import components
import Spinner from "@/components/Spinner";
import ProjectCard from "@/components/ProjectCard";
import GetReposError from "@/components/GetReposError";

// import utils
import { fetcher } from "@/lib/octokit";

export default function Projects({ starredRepos }) {
	// fetch data using the useSWR hook
	const { data, error } = useSWR("/api/get-starred-repos", fetcher, {
		initialData: starredRepos,
	});

	// display error component if there is an error with data retrieval
	if (error) {
		return <GetReposError error={error} />;
	}
	// display a spinner while data loads
	if (!data) {
		return <Spinner />;
	}
	// set appropriate bool val to isOdd by determining if mum of items in data is odd
	// add 1 to data.length to avoid division by 0 if data is empty
	const isOdd = (data.length + 1) % 2 !== 0;

	return (
		<main className="flex items-center justify-center w-full min-h-[92vh]">
			<section className="flex flex-col items-center mx-4 mb-4">
				<h2 className="mb-4 text-4xl text-cerulean font-medium">
					Recent Projects
				</h2>

				<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
					{/* iterate through returned data and render ProjectCard for each */}
					{data.map((repo) => {
						return (
							<ProjectCard
								repo={repo}
								key={repo.repo.id}
							/>
						);
					})}

					<ProjectCard
						repo={{
							repo: {
								name: "Want to see more?",
							},
						}}
						// depending on isOdd value, pass appropriate class to isOddClass
						isOddClass={isOdd ? "sm:col-span-2" : ""}
					/>
				</section>
			</section>
		</main>
	);
}
