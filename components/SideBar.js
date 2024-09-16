import { typing } from "@/utility/typing";
import { useEffect } from "react";

const SideBar = () => {
	useEffect(() => {
		typing();
	}, []);

	return (
		<div className="col-lg-4">
			{/* main card */}
			<div className="trm-main-card-frame trm-sidebar">
				<div
					className="trm-main-card"
					data-scroll=""
					data-scroll-repeat=""
					data-scroll-sticky=""
					data-scroll-target="#content"
					data-scroll-offset={60}
				>
					{/* card header */}
					<div className="trm-mc-header">
						<div className="trm-avatar-frame trm-mb-20">
							<img className="trm-avatar" src="/img/avatar.png" alt="Avatar" />
						</div>
						<h5 className="trm-name trm-mb-10">Bico Steve </h5>
						<div className="trm-label">
							<span className="trm-typed-text">
								{/* Words for rotation: utility/typing.js line 77 */}
							</span>
						</div>
					</div>
					{/* card header end */}
					<div className="trm-divider trm-mb-40 trm-mt-20" />
					{/* sidebar social */}
					<div className="trm-social">
						<a
							href="https://www.linkedin.com/in/bico-101-steve/"
							target="_blank"
						>
							<i className="fab fa-linkedin-in" />
						</a>
						<a href="https://medium.com/@bicosteve101" target="_blank">
							<i className="fab fa-medium" />
						</a>
						<a href="https://github.com/Bico-Steve101" target="_blank">
							<i className="fab fa-github" />
						</a>
						<a href="https://dribbble.com/Bicol33" target="_blank">
							<i className="fab fa-dribbble" />
						</a>
					</div>

					{/* sidebar social end */}
					<div className="trm-divider trm-mb-20 trm-mt-20" />
					{/* info */}
					<ul className="trm-table trm-mb-20">
						{/* country */}
						<li>
							<div className="trm-label">Residence:</div>
							<div className="trm-label trm-label-light">Nairobi</div>
						</li>
						{/* city */}
						<li>
							<div className="trm-label">City:</div>
							<div className="trm-label trm-label-light">Ngong HillTop</div>
						</li>
						{/* age */}
						<li>
							<div className="trm-label">Age:</div>
							<div className="trm-label trm-label-light">22</div>
						</li>
					</ul>
					{/* info end */}
					<div className="trm-divider trm-mb-20 trm-mt-20" />
					{/* action button */}
					<div className="text-center">
						<a data-fancybox="" href="#trm-order" className="trm-btn">
							Contact me <i className="far fa-envelope" />
						</a>
					</div>
					{/* action button end */}
				</div>
			</div>
			{/* main card end */}
		</div>
	);
};
export default SideBar;
