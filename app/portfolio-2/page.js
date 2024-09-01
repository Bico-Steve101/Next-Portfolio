"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const portfolioItems = [
	{ id: 1, img: "/img/portfolio/1.png", title: "Dictionary API" },
	{ id: 2, img: "/img/portfolio/2.png", title: "Unsplash API" },
	{ id: 3, img: "/img/portfolio/3.png", title: "City Tours" },
	{ id: 4, img: "/img/portfolio/4.png", title: "Galaxy Ventures" },
	{ id: 5, img: "/img/portfolio/5.png", title: "Unleashed" },
	{ id: 6, img: "/img/portfolio/6.jpg", title: "Redux Expeneses" },
];

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		page_info_function("Recent work<br>performed", "portfolio", "portfolio");
	}, []);
	return (
		<Layout>
			{portfolioItems.map((item) => (
				<a
					key={item.id}
					data-fancybox="portfolio"
					href={item.img}
					className="trm-portfolio-item trm-scroll-animation"
					data-scroll
					data-scroll-offset={40}
					data-cat="card"
				>
					<div className="trm-cover-frame">
						<img className="trm-cover" src={item.img} alt="item" />
					</div>
					<div className="trm-item-description">
						<h6>{item.title}</h6>
						<div className="trm-zoom-icon">
							<i className="fas fa-search-plus" />
						</div>
					</div>
				</a>
			))}
		</Layout>
	);
};
export default Index;
