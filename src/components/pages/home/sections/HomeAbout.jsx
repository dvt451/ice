import React, { useContext, useEffect, useRef, useState } from 'react'
import CircleLink from '../../../../widgets/links/CircleLink'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { MyContext } from '../../../../shared/hooks/MyContextProvider';
import TitleComponent from '../../../../features/TitleAnimation/TitleComponent';

export default function HomeAbout() {
	const image1Ref = useRef();
	const image2Ref = useRef();
	const image3Ref = useRef();
	const titleRef = useRef();
	const sectionRef = useRef();
	const _ = useContext(MyContext)

	useEffect(() => {
		const section = sectionRef.current;

		// Create trigger and save reference
		const trigger = ScrollTrigger.create({
			trigger: section,
			start: '-47px top',
			end: 'bottom top',
			onEnter: () => _.setDark(true),       // Scrolling down into section
			onEnterBack: () => _.setDark(true),   // Scrolling up into section
			onLeave: () => _.setDark(false),      // Scrolling down out of section
			onLeaveBack: () => _.setDark(false),  // Scrolling up out of section
		});

		const titleAnim = gsap.fromTo(
			titleRef.current,
			{ transform: 'translateY(50%) translate(-50%)' },
			{
				transform: 'translateY(0%) translate(-50%)',
				scrollTrigger: {
					trigger: titleRef.current,
					start: '-150% bottom',
					end: '-0% top',
					scrub: true,
				},
			}
		);

		// Animations with their own ScrollTriggers
		const anim1 = gsap.fromTo(
			image1Ref.current,
			{ top: 300 },
			{
				top: 0,
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			}
		);

		const anim2 = gsap.fromTo(
			image2Ref.current,
			{ scale: 1 },
			{
				scale: 1.5,
				scrollTrigger: {
					trigger: image2Ref.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}
		);

		const anim3 = gsap.fromTo(
			image3Ref.current,
			{ top: 200 },
			{
				top: 0,
				scrollTrigger: {
					trigger: section,
					start: '20% top',
					end: 'bottom top',
					scrub: true,
				},
			}
		);

		return () => {
			trigger.kill();
			anim1.scrollTrigger?.kill();
			anim3.scrollTrigger?.kill();
			anim1.kill();
			anim2.kill();
			anim3.kill();
			titleAnim.kill();

		};
	}, []);

	return (
		<div ref={sectionRef} className='home-about'>
			<div className="home-about__clouds">
				<div className='clouds'>
					<div className='clouds__block'>
						<div className='clouds__cloud'><img src="/img/clouds.webp" alt="" /></div>
						<div style={{ alignSelf: 'end' }} className='clouds__cloud'><img src="/img/cloud_small.webp" alt="" /></div>
					</div>
					<div className='clouds__block'>
						<div className='clouds__cloud'><img src="/img/clouds.webp" alt="" /></div>
						<div style={{ alignSelf: 'end' }} className='clouds__cloud'><img src="/img/cloud_small.webp" alt="" /></div>
					</div>
				</div>
			</div>
			<div className="home-about__container">
				<h2 ref={titleRef} className="home-about__title">

					<TitleComponent text={'This is Mr. Ice.'} />
					<TitleComponent text={"He'll come in even to those"} />
					<TitleComponent text={'who are completely indifferent'} />
					<TitleComponent text={'to ice cream.'} />
				</h2>
				<div className="home-about__columns">

					<div className="home-about__col">
						<img src="/img/about_1.webp" alt="picture"
							ref={image1Ref}
						/>
					</div>
					<div className="home-about__col home-about-content">
						<div className="home-about-content__picture">
							<img ref={image2Ref} src="/img/about_2.jpg" alt="picture" />
						</div>
						<h3 className="home-about-content__title">
							<TitleComponent text={`Who has tried it, knows everything. Those who haven't - get ready for the dopamine thirst of "that very taste"`} />

						</h3>
						<div className="home-about-content__texts">
							<div className="home-about-content__text">
								<TitleComponent text={`Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it.`} />
							</div>
							<div className="home-about-content__text">
								<TitleComponent text={`How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production. Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety.`} />
							</div>
						</div>
						<CircleLink href={'/'} text={'About us'} nameClass={'home-about-content__link'} />
					</div>
					<div className="home-about__col">
						<img
							ref={image3Ref}
							src="/img/about_3.webp" alt="picture" />
					</div>
				</div>
			</div>
		</div>
	)
}
