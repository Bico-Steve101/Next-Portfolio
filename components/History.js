const History = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Employment History <span data-number={7} />
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
										Full-Stack Web Development Certificate - Nucamp
									</h6>
									<div className="trm-text-sm trm-accent-color trm-mb-15">
										<i>Aug 2021 - Jan 2022</i>
									</div>
								</div>
							</div>
							<div className="trm-mb-20">
								A comprehensive program that equips aspiring developers with the
								skills to navigate both frontend & backend technologies. This
								hands-on certificate provides a solid foundation in HTML, CSS,
								JavaScript, & React, along with server-side technologies like
								Node.js, Express, & MongoDB.
							</div>
							<a
								data-fancybox
								href="files/diploma.jpg"
								className="trm-label trm-label-color"
							>
								Diploma <i className="fas fa-arrow-right" />
							</a>
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
										Software Development Certificate - Thinkful
									</h6>
									<div className="trm-text-sm trm-accent-color trm-mb-15">
										<i>April 2020 - Nov 2020</i>
									</div>
								</div>
							</div>
							<div className="trm-mb-20">
								Designed to equip you with the skills to build robust & scalable
								web applications. Through hands-on projects & personalized
								mentorship, you&apos;ll master both frontend & backend
								technologies, positioning yourself as a versatile & proficient
								full-stack developer in today&apos;s competitive tech landscape.
							</div>
							<a
								data-fancybox
								href="files/diploma.jpg"
								className="trm-label trm-label-color"
							>
								Diploma <i className="fas fa-arrow-right" />
							</a>
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
									<h6 className="trm-mb-15">Web Developer</h6>
									<div className="trm-text-sm trm-accent-color trm-mb-15">
										<i>April 2021 - Present</i>
									</div>
								</div>
							</div>
							<div>
								I leverage my skills to bring clients' visions to life, enjoying
								the flexibility to choose projects, set my own schedule, &
								constantly evolve in the ever-changing landscape of web
								development.
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
									<h6 className="trm-mb-15">Sales and Marketing</h6>
									<div className="trm-text-sm trm-accent-color trm-mb-15">
										<i>Oct 2016 - April 2021</i>
									</div>
								</div>
							</div>
							<div>
								I am a results-driven professional with a proven track record of
								developing & executing strategic sales & marketing initiatives.
								I excel in building & leading high-performance teams,
								cultivating client relationships, & implementing innovative
								campaigns to drive revenue growth & brand visibility.
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
									<h6 className="trm-mb-15">UI/UX Designer, Web Developer</h6>
									<div className="trm-text-sm trm-accent-color trm-mb-15">
										<i>jan 2018 - may 2020</i>
									</div>
								</div>
							</div>
							<div>
								I specialize in crafting seamless & visually engaging digital
								experiences. From intuitive user interfaces that prioritize
								functionality to thoughtfully designed user experiences, I merge
								creativity with user-centric design principles to enhance the
								overall usability & aesthetic appeal of web & mobile
								applications.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default History;
