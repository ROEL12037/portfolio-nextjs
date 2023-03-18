/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["thumbs.gfycat.com", "res.cloudinary.com", "www.codewars.com"],
	},
};

module.exports = nextConfig;
