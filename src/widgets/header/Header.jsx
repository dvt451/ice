import React, { useContext, useEffect, useRef, useState } from 'react'
import HeaderLogo from '../logos/HeaderLogo'
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../shared/hooks/MyContextProvider';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const burgerBodyRef = useRef(null);
	const _ = useContext(MyContext);
	const menuDisable = true;

	const menuToggle = () => {
		setIsOpen(!isOpen)
	}

	const linkClick = () => {
		if (!menuDisable) {
			setIsOpen(false)
		}
		_.setLoadingState(false)
	}

	const menu = [
		{ name: 'Home', path: menuDisable ? '#' : '/' },
		{ name: 'About us', path: menuDisable ? '#' : '/about' },
		{ name: 'Catalog', path: menuDisable ? '#' : '/catalog' },
		{ name: 'FAQ', path: menuDisable ? '#' : '/faq' },
		{ name: 'Contacts', path: menuDisable ? '#' : '/contacts' },
	];
	return (
		<header className="header">
			<HeaderLogo />
			<div className="header-container">
				<nav className="header__menu menu">
					<div style={{ '--buttonTextColor': 'var(--primary)', '--buttonSecondaryColor': 'var(--colBackground)' }} className="style-menu menu__card menu-card">
						<div className='style-menu__front'>
							<div className="menu-card__col">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 6.25V3.75C6.25001 3.31116 6.36553 2.88006 6.58496 2.50002C6.80439 2.11998 7.11998 1.80439 7.50003 1.58498C7.88007 1.36557 8.31118 1.25006 8.75002 1.25006C9.18885 1.25006 9.61996 1.36558 10 1.585C10.38 1.36558 10.8111 1.25006 11.25 1.25006C11.6888 1.25006 12.1199 1.36557 12.5 1.58498C12.88 1.80439 13.1956 2.11998 13.415 2.50002C13.6345 2.88006 13.75 3.31116 13.75 3.75V6.25H14.375C14.8723 6.25 15.3492 6.44754 15.7008 6.79917C16.0525 7.1508 16.25 7.62772 16.25 8.125V16.25C16.25 16.913 15.9866 17.5489 15.5178 18.0178C15.0489 18.4866 14.413 18.75 13.75 18.75H6.25C5.58696 18.75 4.95107 18.4866 4.48223 18.0178C4.01339 17.5489 3.75 16.913 3.75 16.25V8.125C3.75 7.62772 3.94754 7.1508 4.29917 6.79917C4.65081 6.44754 5.12772 6.25 5.625 6.25H6.25ZM7.5 3.75V6.25H10V3.75C10 3.41848 9.8683 3.10053 9.63388 2.86611C9.39946 2.63169 9.08152 2.5 8.75 2.5C8.41848 2.5 8.10054 2.63169 7.86612 2.86611C7.6317 3.10053 7.5 3.41848 7.5 3.75ZM13.75 17.5C14.0815 17.5 14.3995 17.3683 14.6339 17.1339C14.8683 16.8995 15 16.5815 15 16.25V8.125C15 7.95924 14.9342 7.80027 14.8169 7.68306C14.6997 7.56585 14.5408 7.5 14.375 7.5H12.5V16.25C12.5 16.5815 12.6317 16.8995 12.8661 17.1339C13.1005 17.3683 13.4185 17.5 13.75 17.5ZM11.25 7.5H5.625C5.45924 7.5 5.30027 7.56585 5.18306 7.68306C5.06585 7.80027 5 7.95924 5 8.125V16.25C5 16.5815 5.1317 16.8995 5.36612 17.1339C5.60054 17.3683 5.91848 17.5 6.25 17.5H11.585C11.365 17.1202 11.2494 16.6889 11.25 16.25V7.5ZM11.25 3.75V6.25H12.5V3.75C12.5001 3.55915 12.4566 3.3708 12.3727 3.19939C12.2887 3.02798 12.1667 2.87806 12.0158 2.76113C11.865 2.6442 11.6894 2.56337 11.5025 2.52482C11.3156 2.48627 11.1223 2.49103 10.9375 2.53875C11.1375 2.8975 11.25 3.31125 11.25 3.75Z" fill="#B00E2F"></path></svg>
							</div>
							<div className="menu-card__quanity">0</div>
						</div>
						<div className='style-menu__back'></div>


					</div>
					<button style={{ '--buttonTextColor': 'var(--primary)', '--buttonSecondaryColor': 'var(--colBackground)' }} className='style-menu menu__flavours hhv'>
						<div className='style-menu__front'>
							<span className='style-menu__text'>Flavours</span>
						</div>
						<div className='style-menu__back'></div>
					</button>
					<button style={{ '--buttonTextColor': 'var(--primary)', '--buttonSecondaryColor': 'var(--colBackground)' }} onClick={menuToggle} type="button" className={`style-menu hhv burger-button${isOpen ? ' _active' : ''}`} aria-label="Menu" aria-expanded="false">
						<div className='style-menu__front'>
							<span className='style-menu__text'>Menu</span>
							<span className={`icon-burger${isOpen ? ' _active' : ''}`}><span></span></span>
						</div>
						<div className='style-menu__back'></div>
					</button>
				</nav>
				<div className={`burger-body-container${isOpen ? ' _active' : ''}`}>
					<div onClick={() => {
						setIsOpen(false)
					}} className="burger-body__layer">

					</div>
					<div ref={burgerBodyRef} className={`burger-body${isOpen ? ' _active' : ''}`}>
						<nav className="burger-body__menu menu">
							<ul className="menu__list">
								{
									menu.map((item, i) => {
										const oppositeNum = menu.length - 1 - i;
										return (
											<li
												key={i}
												style={{
													"--number": `${i}s`,
													"--oppositeNum": `${oppositeNum}s`
												}}
												className="menu__item"
											>
												<NavLink to={item.path} onClick={linkClick} className="menu__link">{item.name}</NavLink>
											</li>
										);
									})
								}

							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header >
	)
}
