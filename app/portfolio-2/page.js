"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from 'next/link';

const portfolioItems = [
    { id: 1, img: "/img/portfolio/9.png", title: "Zap Dashboard", url: "https://zap-dashboard-woad.vercel.app/"  },
];

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
    useEffect(() => {
        banner_image_function("/img/banner3.png");
        page_info_function("Recent projects", "portfolio", "portfolio");
        
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
        <Layout>
           {portfolioItems.map((item) => (
                    <div className="col-lg-6" key={item.id}>
                        <div 
                            className="trm-portfolio-item trm-scroll-animation"
                            data-scroll
                            data-scroll-offset={40}
                            data-cat="icon"
                            onClick={() => handleItemClick(item.url)}
                        >
                            <div className="trm-cover-frame">
                                <img className="trm-cover" src={item.img} alt="item" />
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
                                   <a>
									<i className="fas fa-eye" />
								   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="col-lg-12 mt-5">
                <div className="d-flex justify-content-end">
                    <Link href="/portfolio" passHref>
                        <a className="icon-circle pulse-effect mb-2">
                            <i className="fas fa-arrow-left"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};
export default Index;