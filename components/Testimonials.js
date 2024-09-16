import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

/**
 * Renders the Testimonials component.
 *
 * @return {JSX.Element} The Testimonials component
 */
const Testimonials = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Testimonials <span data-number={9} />
				</h5>

				{/* testimonials slider */}
				<Swiper
					{...sliderProps.testimonials}
					className="swiper-container trm-testimonials-slider trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					<SwiperSlide className="swiper-slide">
						<div
							className="trm-testimonial-card"
							data-swiper-parallax=""
							data-swiper-parallax-scale=".8"
							data-swiper-parallax-opacity={0}
							data-swiper-parallax-duration={800}
						>
							<div className="trm-testimonial-author">
								<img src="/img/testimonials/3.jpg" alt="Client" />
								<h6 className="trm-mb-15">Ochieng Dalmus</h6>
								<div className="trm-text-sm trm-accent-color">
									<i>Africa Travel</i>
								</div>
							</div>
							<div className="trm-testimonial-text">
								<p>
									Bico Steve is a good friend and a team player for the Africa Travel team. He is a great 
									asset to the team and I would recommend him for any web development opportunity. I have seen him develop UI
									components and he is very good at it. Then develop the frontend and now the backend.I&apos;m confident she will be
									a good addition to any team!
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div
							className="trm-testimonial-card"
							data-swiper-parallax=""
							data-swiper-parallax-scale=".8"
							data-swiper-parallax-opacity={0}
							data-swiper-parallax-duration={800}
						>
							<div className="trm-testimonial-author">
								<img src="/img/testimonials/2.jpg" alt="Client" />
								<h6 className="trm-mb-15">Mercel Auja</h6>
								<div className="trm-text-sm trm-accent-color">
									<i> Anansi Technology </i>
								</div>
							</div>
							<div className="trm-testimonial-text">
								<p>
									I mentored Bico Steve through his software development journey.
									I found him intelligent and eager to learn. I would highly
									recommend her for any web development opportunity.
								</p>
							</div>
						</div>
					</SwiperSlide>

					<div className="trm-slider-navigation">
						<div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
							<i className="fas fa-arrow-left" />
						</div>
						<div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
							<i className="fas fa-arrow-right" />
						</div>
					</div>
				</Swiper>
				{/* testimonials slider end */}
			</div>
		</div>
	);
};
export default Testimonials;
