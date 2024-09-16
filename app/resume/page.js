"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		page_info_function("My Skills<br>and History", "resume", "resume");
	}, []);
	return (
		<Layout>
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Communication</h6>
								<span className="trm-label trm-label-light">83%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Teamwork</h6>
								<span className="trm-label trm-label-light">76%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Problem-solving</h6>
								<span className="trm-label trm-label-light">84%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Adaptability</h6>
								<span className="trm-label trm-label-light">69%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p60" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">HTML</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">CSS</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">SCSS</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">React.js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Next js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Angular js</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">JavaScript</h6>
								<span className="trm-label trm-label-light">75%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Spring Boot</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Node js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Django</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">React Native</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Flutter</h6>
								<span className="trm-label trm-label-light">34%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* knowledge */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Knowledge <span data-number={2} />
					</h5>
				</div>
				<div className="col-lg-12">
					<div className="trm-card">
						<div className="row">
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Nodejs</li>
									<li>Django</li>
									<li>Spring Boot</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Gulp</li>
									<li>Sass</li>
									<li>Bootstrap</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>React Js</li>
									<li>Angular js</li>
									<li>Next js</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* history */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Employment History <span data-number={3} />
					</h5>
				</div>
				<div className="col-lg-6">
					{/* timeline */}
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											React Basics & Advanced React - (Coursera)
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Aug 2021 - Jan 2022</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									A comprehensive program that equips aspiring developers with
									the skills to navigate both frontend and backend technologies.
									This hands-on certificate provides a solid foundation in React.
									But react docs gave me indepth knowledge of react components
									and hooks.
								</div>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											Java Fullstack Developer - Coursera
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>April 2020 - Nov 2020</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									Designed to equip you with the skills to build robust and
									scalable web applications. Master Java programming, Angular 
									for responsive front-end web development, and Spring and Spring 
									Boot for robust back-end systems, culminating in a comprehensive 
									skillset to build, integrate, and deploy cloud-ready web applications.
								</div>
							</div>
						</div>
					</div>
					{/* timeline end */}
				</div>
				<div className="col-lg-6">
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">Web Developer - GikTek</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>April 2024 - Present</i>
										</div>
									</div>
								</div>
								<div>
									I am a fullstack developer with a focus on backend development, leveraging on my knowledge of Java, Spring Boot, Node js, Django and Angular js. 
									I have been able to build and deploy web applications that are scalable and robust. I also enjoy doing mobile applications with React Native.
								</div>
							</div>
							<div
								className="trm-timeline-item trm-scroll-animation trm-active-el"
								data-scroll
								data-scroll-offset={40}
							>
								<div className="trm-timeline-mark-light" />
								<div className="trm-timeline-mark" />
								<div className="trm-a trm-timeline-content">
									<div className="trm-card-header">
										<div className="trm-left-side">
											<h6 className="trm-mb-15">Freelancer & Web Developer - Freelance-Soko</h6>
											<div className="trm-text-sm trm-accent-color trm-mb-15">
												<i>Jan 2021 - April 2024</i>
											</div>
										</div>
									</div>
									<div>
										I have worked on several projects as a freelancer and web developer.
										I help solve code problems with tools like Java and Python. I also helped 
										build the freelance-soko website, first kenyan website meant for freelancers.
									</div>
								</div>
							</div>
							<div
								className="trm-timeline-item trm-scroll-animation trm-active-el"
								data-scroll
								data-scroll-offset={40}
							>
								<div className="trm-timeline-mark-light" />
								<div className="trm-timeline-mark" />
								<div className="trm-a trm-timeline-content">
									<div className="trm-card-header">
										<div className="trm-left-side">
											<h6 className="trm-mb-15">
												IT Volunteer, Web Developer - Duara Inc
											</h6>
											<div className="trm-text-sm trm-accent-color trm-mb-15">
												<i>jan 2020 - present</i>
											</div>
										</div>
									</div>
									<div>
										From Its inception, I have done the designs craft, made the logo,organization's profile, web-portfolio,
										and the website for the organization. I have also been able to maintain the website and 
										ensure it is up to date with the latest technologies.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Index;
