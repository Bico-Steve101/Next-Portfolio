"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from 'next/link';

const portfolioItems = [
    { id: 1, img: "/img/portfolio/1.png", title: "Zap Secure", url: "https://zap-six-rho.vercel.app/" },
    { id: 2, img: "/img/portfolio/2.png", title: "Africa Travel", url: "https://africa-travel-template.netlify.app/" },
    { id: 3, img: "/img/portfolio/3.png", title: "Freelance Soko", url: "https://freelancesoko.com" },
    { id: 4, img: "/img/portfolio/4.png", title: "Keep Fit", url: "https://keepfit.com" },
    { id: 5, img: "/img/portfolio/5.png", title: "Estate Nexus", url: "https://estatenexus.com" },
    { id: 6, img: "/img/portfolio/6.png", title: "Geeks", url: "https://geeks.com" },
];

const Index = () => {
    const { banner_image_function, page_info_function } = useContext(context);
    useEffect(() => {
        banner_image_function("/img/banner2.png");
        page_info_function("Recent projects", "portfolio", "portfolio");
        
        Fancybox.bind("[data-fancybox]", {
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
            <div className="row">
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleItemClick(item.url);
                                    }}
                                >
                                    <i className="fas fa-eye" />
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
          <div className=" d-flex justify-content-end">
            <Link href="/portfolio-2" className="icon-circle pulse-effect mb-2">
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default Index;