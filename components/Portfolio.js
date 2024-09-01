import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const portfolioItems = [
	{ id: 1, img: "/img/portfolio/1.png", title: "Zap Secure", url: "https://zap-six-rho.vercel.app/" },
	{ id: 2, img: "/img/portfolio/2.png", title: "Africa Travel", url: "https://africatravel.com" },
	{ id: 3, img: "/img/portfolio/3.png", title: "Freelance Soko", url: "https://freelancesoko.com" },
	{ id: 4, img: "/img/portfolio/4.png", title: "Keep Fit", url: "https://keepfit.com" },
	{ id: 5, img: "/img/portfolio/5.png", title: "Estate Nexus", url: "https://estatenexus.com" },
	{ id: 6, img: "/img/portfolio/6.png", title: "Geeks", url: "https://geeks.com" },
];

const Portfolio = () => {
	React.useEffect(() => {
		Fancybox.bind("[data-fancybox]", {
			// Your custom options
		});

		return () => {
			Fancybox.destroy();
		};
	}, []);

	const handleItemClick = (url) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<div className="row">
			<div className="col-lg-12">
				<h5 className="trm-mb-40 trm-title-with-divider">
					Portfolio <span data-number={6} />
				</h5>
			</div>

			{portfolioItems.map((item) => (
				<div className="col-lg-6" key={item.id}>
					<div 
						className="trm-portfolio-item trm-scroll-animation" 
						data-scroll 
						data-scroll-offset={40}
						onClick={() => handleItemClick(item.url)}
					>
						<div className="trm-cover-frame">
							<img className="trm-cover" src={item.img} alt={item.title} />
						</div>
						<div className="trm-item-description">
							<h6>{item.title}</h6>
							<div className="trm-zoom-icon" onClick={(e) => e.stopPropagation()}>
								<a
									data-fancybox="portfolio"
									data-src={item.img}
									href="javascript:;"
								>
									<i className="fas fa-search-plus" />
								</a>
							</div>
							<div className="trm-zoom-icon" onClick={(e) => {
								e.stopPropagation();
								handleItemClick(item.url);
							}}>
								<i className="fas fa-eye" />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Portfolio;