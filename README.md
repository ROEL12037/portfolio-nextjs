# Portfolio

My portfolio website, showcasing an About Me, Projects, and Contact section.

A Next.js project bootstrapped with `create-next-app`.

Leverages React.js to build components, TailwindCSS for styling, swr to fetch data efficiently, and GitHub's Octokit library to gain access to repositories through its RESTful API.

This project is deployed on Vercel.

**Live Demo:** [roelcodes.com](https://www.roelcodes.com/)

## TECH USED

- Next.js
- React.js
- JavaScript
- TailwindCSS
- HTML
- swr
- octokit

## FUTURE OPTIMIZATIONS

- refactor ProjectCard.jsx to remove switch case
  - current: the component uses a switch case to determine an image URL based on the repository name.
  - expected: retrieve necessary data directly from Octokit instead of relying on conditional logic in the component.
