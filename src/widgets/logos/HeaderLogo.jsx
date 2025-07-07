import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../shared/hooks/MyContextProvider'

export default function HeaderLogo() {
	const _ = useContext(MyContext)

	return (
		<Link className={`logo${_.Dark ? ' _active' : ''}`} to={'/'}>
			<div className="logo__context">
				<div className="logo__col">
					MR.
				</div>
				<div className="logo__col">
					ICE
				</div>
			</div>
		</Link>
	)
}
