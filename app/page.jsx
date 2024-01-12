import Projects from "./Projects";
import Link from "next/link";
import Image from "next/image";
import csm from "./csm.jpg"
import henry from "./Certificado Henry.png";
import ingles from "./Certificado Ingles.png";
import {Navbar, NavbarContent, NavbarItem, Tooltip} from "@nextui-org/react";
import "./global.css";

const getXboxData = async () => {
	const response = await fetch(
		"https://doubtful-shrug-mite.cyclic.app/getgamehistory"
	);
	const data = await response.json();
	return data;
};

const HomePage = async () => {
	const lasGamePlayed = await getXboxData();

	return (
		<div className="gradient flex flex-col justify-center items-center  bg-[#141414] overflow-x-hidden ">
			<Navbar
				shouldHideOnScroll
				className="navbar mb-[-65px] w-[60%] h-[48px] md:w-[200px] rounded-[25px] top-6 flex justify-center items-center bg-[#7E3D81] bg-opacity-40  backdrop-blur-[5px] shadow-[0_4px_10px_0_rgba(178,103,181,0.2)]">
				<NavbarContent
					justify="center"
					className=" w-full flex gap-5 md:gap-12">
					<NavbarItem>
						<Link
							href="https://www.linkedin.com/in/sergio-correa-a85563267/"
							target="blank">
							<svg
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="hover:scale-110 hover:fill-white fill-[#FFFDEB] transition-transform hover:duration-200 h-[25px] fill-orange">
								<title>LinkedIn</title>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="https://github.com/SergioFCorrea" target="blank">
							<svg
								role="img"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="hover:scale-110 hover:fill-white fill-[#FFFDEB] transition-transform hover:duration-200 h-[25px] fill-orange">
								<title>GitHub</title>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
							</svg>
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className="relative lg:w-[70vw] h-[100vh] flex flex-col justify-center items-center ">
				{/* ------------------------------ */}
				<div className="red-dot opacity-35 absolute h-[150px] lg:h-[380px] w-[150px] lg:w-[380px] top-[200px] right-[20px] md:right-[-100px] rounded-full blur-2xl lg:transform-origin-right-lg"></div>
				{/* ---------------------------------------------- */}
				<div className="black-dot opacity-35 absolute bottom-[185px] right-[50px] h-[130px] lg:h-[350px] w-[130px] lg:w-[350px]  rounded-full blur-2xl"></div>
				{/* ---------------------------------------------- */}
				<div className="purple-dot opacity-35 absolute bottom-[120px] left-[60px] h-[168px] lg:h-[360px] w-[168px] lg:w-[360px] rounded-full blur-2xl"></div>
				{/* ----------------------- */}
				<div className="blue-dot opacity-35 absolute bottom-[120px] left-[30px] h-[168px] lg:h-[310px] w-[168px] lg:w-[310px] rounded-full blur-2xl"></div>
				{/* ----------------------------- */}
				<div className="relative flex flex-col justify-center items-center gap-8 lg:justify-between  w-full ] ">
					<span className="name text-[#FFFDEB] font-[Kilo] text-4xl lg:text-[80px] text-center  h-auto lg:leading-[80px]">
						Sergio Correa
					</span>
					<span className=" font-[Aleo] font-bold text-[#7E3D81] text-center text-[12px] md:text-medium lg:text-2xl">
						Full Stack Web Developer
					</span>
				</div>
			</div>
			<div className="pb-20 flex flex-col w-[75%] md:w-[70vw] lg:w-[65vw] justify-center items-center gap-[280px] ">
				{/* PROJECTS */}
				<div className="mt-20 md:mt-44 font-[Excelorate] w-full flex flex-col justify-center p-2 h-auto  bg-[#7E3D81]  text-transparent bg-clip-text text-4xl gap-16 ">
					<span className="lg:text-5xl text-center">My Projects</span>
					<div className="flex flex-col justify-center md:items-start items-center text-[#141414] font-[Anybody] font-medium text-medium lg:text-xl text-left">
						{/* <span>
							These are the most remarkable projects I’ve developed, in which I
							used all of my creativity. They are all fully functional and
							interactive.
						</span>
						<span>
							Technologies such as React, Node.js, Express, Tailwind, NextUI and
							other tools were used.
						</span> */}
					</div>
					<Projects />
				</div>
				{/* --------------------- */}

				{/* ABOUT ME */}
				<div className="h-auto w-full ">
					<div className="flex flex-col  justify-center items-center gap-32">
						<h2 className="font-[Excelorate] text-4xl lg:text-5xl text-[#7E3D81]">
							This is me
						</h2>
						<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[100px]">
							<div className="flex flex-col  justify-center items-center rounded-[25px] shadow-[2px_2px_5px_2px_rgba(0,0,0,0.3)]">
								<Image
									quality={100}
									width={250}
									height={250}
									alt="photo"
									src="https://res.cloudinary.com/dlmqrbnli/image/upload/v1691012542/PORTFOLIO%20IMAGES/IMG_3774-removebg-preview_s8q4tg.png"
									className="w-[250px] md:w-[300px] h-auto rounded-t-[25px] bg-white/10 backdrop-blur-[25px]"
								/>
								<div className="w-[250px] md:w-[300px] h-12 rounded-b-[25px] bg-[#7E3D81]/60 flex flex-row items-center justify-evenly">
									<Tooltip
										className="font-poppins"
										showArrow
										placement="bottom"
										content="My Spotify">
										<Link
											href="https://open.spotify.com/user/zergiocg?si=43c90e83e9ac4bf2"
											target="blank">
											<button>
												<svg
													className="w-7 h-7 fill-[#141414] hover:fill-[#1DB954] hover:scale-[105%] transition-transform hover:duration-300"
													role="img"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
												</svg>
											</button>
										</Link>
									</Tooltip>
									<Tooltip
										showArrow
										placement="bottom"
										content={
											<div className="relative h-[120px] w-[200px] bg-black/20 flex justify-center items-center font-[Poppins]">
												<Image
                                                    alt="background"
													src={csm}
													className="absolute opacity-50 rounded-lg"
												/>
												<div className="flex flex-col justify-center items-center gap-3">
													<span className="relative text-center">
														Watch my favorite anime on Crunchyroll
													</span>
													<Link href="https://www.crunchyroll.com/es/series/GVDHX8QNW/chainsaw-man">
														<button className="relative p-2 bg-[#B366B7] rounded-medium">
															Watch!
														</button>
													</Link>
												</div>
											</div>
										}>
										<Link
											href="https://www.crunchyroll.com/es/series/GVDHX8QNW/chainsaw-man"
											target="blank">
											<svg
												className="h-7 w-7 fill-[#141414] hover:fill-[#F47521] hover:scale-[105%] transition-transform hover:duration-300"
												role="img"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M2.933 13.467a10.55 10.55 0 1 1 21.067-.8V12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12h.8a10.617 10.617 0 0 1-9.867-10.533zM19.2 14a3.85 3.85 0 0 1-1.333-7.467A7.89 7.89 0 0 0 14 5.6a8.4 8.4 0 1 0 8.4 8.4 6.492 6.492 0 0 0-.133-1.6A3.415 3.415 0 0 1 19.2 14z" />
											</svg>
										</Link>
									</Tooltip>
									<Tooltip
										showArrow
										placement="bottom"
										content={
											<div className="font-[Poppins] w-32 h-[150px] flex flex-col justify-center items-center gap-4 py-3">
												<span className=" text-[#107C10] text-[12px] font-medium text-center">
													Last game I played
												</span>
												<div className=" flex flex-col justify-center items-center gap-1">
													<span className="text-white text-[10px]">
														{lasGamePlayed?.name}
													</span>
													<Image
														width={80}
														height={80}
                                                        alt="image of the last game played"
														src={lasGamePlayed?.displayImage}
														className="w-20 h-20 object-cover rounded-medium"
													/>
												</div>
											</div>
										}>
										<svg
											className="fill-[#141414] h-7 w-7 hover:fill-[#107C10] hover:scale-[105%] transition-transform hover:duration-300"
											role="img"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z" />
										</svg>
									</Tooltip>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center gap-5 lg:w-auto">
								<span className="font-poppins font-medium text-[18px] lg:text-xl lg:text-left text-[#B366B7]">
									Hi, let me tell you about how got into web development and
									some of my hobbies.
								</span>
								<p className="font-[Anybody] font-medium text-medium lg:text-xl  text-[#FFFDEB]">
									Unsure about career goals, I ventured into the IT world on a
									friend´s advice, starting in 2023, I learned the basics of web
									development through NodeJS and React, coding became a cool mix
									of creating things and fixing problems, this made front-end my
									favorite part of developing a web site since here is where I
									get to try all sorts of features.
								</p>
								{/* <p className="font-[Anybody] text-[#141414]">
									Coding became a cool mix of creating things and fixing
									problems, this made front-end my favorite part of developing a
									web site since here is where I get to try all sorts of
									features.
								</p> */}

								<p className="font-[Anybody] font-medium text-medium lg:text-xl  text-[#FFFDEB]">
									Outside of the coding, music is my daily therapy, anime and
									video games also play an important role in my life, and that
									is something I´d like to share with you!.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* ---------------------- */}

				{/* CERTIFICATES */}
				<div className="mt-[-100px] w-full h-auto flex flex-col  justify-center items-center gap-8 lg:gap-32 lg:mt-[100px]">
					<h2 className="font-[Excelorate] text-4xl lg:text-5xl text-[#7E3D81]">
						My Certificates
					</h2>
					<div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14">
						<Link
							href="https://certificates.soyhenry.com/new-cert?id=6eb3f58b6fed918b472f017eb049f23756fda648f40a7ee641185056241e1d9f"
							target="blank">
							<Image
								alt="certificate"
								className="w-[250px] md:w-[350px] lg:w-[550px] h-[170px] md:h-[250px] lg:h-[450px] object-cover rounded-xl hover:scale-[150%] lg:hover:scale-[108%] transition-transform hover:duration-300 hover:shadow-[4px_4px_8px_1px_rgba(126,61,129,0.7)]"
								src={henry}
							/>
						</Link>
						<Link href="https://www.efset.org/cert/9dXnQ9" target="blank">
							<Image
								alt="certificate"
								className="w-[250px] md:w-[350px] lg:w-[550px] h-[170px] md:h-[250px] lg:h-[450px] object-cover rounded-xl hover:scale-[150%] lg:hover:scale-[108%] transition-transform hover:duration-300 hover:shadow-[4px_4px_8px_1px_rgba(126,61,129,0.7)]"
								src={ingles}
							/>
						</Link>
					</div>
				</div>
				{/* ----------------- */}

				{/* CONTACT */}
				<div className="  backdrop-blur-[9px] w-full h-auto flex flex-col justify-center items-center gap-8  overflow-hidden">
					<div className=" flex flex-col md:flex-row justify-center items-center gap-[50px]">
						<Link href="mailto:sergio.correa.job@gmail.com" target="blank">
							<div className="bg-gradient-to-br from-[#B366B7]/50 to-[#7E3D81]/50  w-[130px] backdrop-blur-[9px] rounded-md h-[130px] flex justify-center items-center transition-transform hover:duration-200 hover:scale-[105%]">
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="   fill-[#FFFDEB]  h-16 fill-orange">
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
								</svg>
							</div>
						</Link>
						<Link
							href="https://www.linkedin.com/in/sergio-correa-a85563267/"
							target="blank">
							<div className="bg-gradient-to-br from-[#B366B7]/50 to-[#7E3D81]/50  w-[130px] backdrop-blur-[9px] rounded-md h-[130px] flex justify-center items-center transition-transform hover:duration-200 hover:scale-[105%]">
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="   fill-[#FFFDEB]  h-16 fill-orange">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</div>
						</Link>
						<Link href="https://github.com/SergioFCorrea" target="blank">
							<div className="bg-gradient-to-br from-[#B366B7]/50 to-[#7E3D81]/50 w-[130px] backdrop-blur-[9px] rounded-md h-[130px]  flex justify-center items-center transition-transform hover:duration-200 hover:scale-[105%]">
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="  fill-[#FFFDEB]  h-16 fill-orange">
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
							</div>
						</Link>
					</div>
				</div>
				{/* -------------------- */}
			</div>
		</div>
	);
};

export default HomePage;
