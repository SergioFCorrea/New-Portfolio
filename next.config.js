/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{protocol: "https", hostname: "res.cloudinary.com", port: "",},
			{protocol: "http", hostname: "store-images.s-microsoft.com", port: "",},
		],
	},
};
