import React from 'react'
import StyledButton from '../buttons/StyledButton'

export default function FooterContent() {
	return (
		<div className='footer__content'>
			<h2 className="footer__title">HAVE A QUESTION? THEN THERE IS AN ANSWER!</h2>
			<div className="footer__container">
				<form action="#" className='footer__form'>
					<div className='footer__column'>
						<div className="input-item">
							<input
								type="text"
								id="input-footer-name"
								name="input-footer-name"
								placeholder=" "
							/>
							<label htmlFor="input-footer-name">Your name</label>
							<span></span>
						</div>


					</div>
					<div className='footer__column'>
						<div className="input-item">
							<input
								type="email"
								id="input-footer-email"
								name="input-footer-email"
								placeholder=" "
							/>
							<label htmlFor="input-footer-email">Email</label>
							<span></span>
						</div>
						<div className="input-item">
							<input
								type="tel"
								id="input-footer-phone"
								name="input-footer-phone"
								placeholder=" "
							/>
							<label htmlFor="input-footer-phone">Phone</label>
							<span></span>
						</div>
					</div>
					<div className="input-item">
						<input
							type="text"
							id="input-footer-message"
							name="input-footer-message"
							placeholder=" "
						/>
						<label htmlFor="input-footer-message">Message</label>
						<span></span>
					</div>
					<StyledButton nameClass=' footer__submit' text='Send' />
				</form>
				<div className="footer__bottom">
					<p>All rights reserved</p>
					<div className="footer__media">
						<a href="https://www.instagram.com/" target="_blank">
							Instagram
						</a>
						<a href="https://www.facebook.com/" target="_blank">
							Facebook
						</a>
						<a href="telegram.me/" target="_blank">
							Telegram
						</a>
					</div>
					<a href="https://dvt-ten.vercel.app/" target="_blank">Made by @dvt</a>
				</div>
			</div>
		</div>
	)
}
