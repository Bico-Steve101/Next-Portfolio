"use client";
import { useContext, useEffect, useState } from "react";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Fancybox = dynamic(() => import('@fancyapps/ui').then((mod) => mod.Fancybox), { ssr: false });

const portfolioItems = [
    { id: 1, img: "/img/portfolio/1.png", title: "Zap Secure", url: "https://zap-six-rho.vercel.app/" },
    { id: 2, img: "/img/portfolio/2.png", title: "Africa Travel", url: "https://africa-travel-template.netlify.app/" },
    { id: 3, img: "/img/portfolio/3.png", title: "Freelance Soko", url: "https://freelancesoko.com" },
    { id: 4, img: "/img/portfolio/4.png", title: "Keep Fit", url: "https://keepfit.com" },
    { id: 5, img: "/img/portfolio/5.png", title: "Estate Nexus", url: "https://estatenexus.com" },
    { id: 6, img: "/img/portfolio/6.png", title: "Geeks", url: "https://geeks.com" },
];

const Portfolio = () => {
    const { banner_image_function, page_info_function } = useContext(context);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        banner_image_function("/img/banner2.png");
        page_info_function("Recent projects", "portfolio", "portfolio");
        
        if (typeof window !== 'undefined') {
            Fancybox.bind("[data-fancybox]", {});
        }

        return () => {
            if (typeof window !== 'undefined') {
                Fancybox.unbind("[data-fancybox]");
            }
        };
    }, []);

    const handleItemClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (!isMounted) {
        return <div>Loading...</div>; // or a more sophisticated loading component
    }

    return (
        <Layout>
            <div className="row">
                {portfolioItems.map((item) => (
                    <PortfolioItem key={item.id} item={item} handleItemClick={handleItemClick} />
                ))}
                <div className="col-lg-12 mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link href="/portfolio-2" className="icon-circle pulse-effect mb-2">
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link href="/portfolio" className="icon-circle pulse-effect mb-2">
                            <i className="fas fa-home"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Portfolio;