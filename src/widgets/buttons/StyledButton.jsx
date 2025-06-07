import React from 'react'

export default function StyledButton({ text, nameClass }) {
	return (
		<button style={{ '--buttonTextColor': '#fff', '--buttonSecondaryColor': 'var(--primary)' }} className={`style-menu hhv${nameClass}`}>
			<div className='style-menu__front'>
				<span className='style-menu__text'>{text}</span>
			</div>
			<div className='style-menu__back'></div>
		</button>
	)
}
