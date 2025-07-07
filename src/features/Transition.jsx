import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom';

const Transition = (OgComponent) => {
	return function WrappedComponent(props) {
		const location = useLocation()
		const [slideState, setSlideState] = useState(false)
		setTimeout(() => {
			setSlideState(true)
		}, 1000);
		return (
			<>
				<OgComponent {...props} />
				<motion.div
					style={{ display: location === '/' ? 'none' : 'block' }}
					className={`slide-transition${slideState ? "sld-on" : "sld-off"} slide-in`}
					initial={{ clipPath: 'circle(0% at 50% 50%)' }}
					animate={{ clipPath: 'circle(0% at 50% 50%)' }}
					exit={{ clipPath: 'circle(100% at 50% 50%)' }}
					transition={{ duration: 0.5 }}
				/>
				<motion.div
					style={{ display: location === '/' ? 'none' : 'block' }}
					className={`slide-transition${slideState ? "sld-on" : "sld-off"} slide-out`}
					initial={{ clipPath: 'circle(100% at 50% 50%)' }}
					animate={{ clipPath: 'circle(0% at 50% 50%)' }}
					exit={{ clipPath: 'circle(0% at 50% 50%)' }}
					transition={{ duration: 0.7 }}
				/>
			</>
		);
	};
};

export default Transition;
