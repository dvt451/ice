// MyContextProvider.js
import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Export the context
export { MyContext };

// Export the provider component as default
export default function MyContextProvider({ children }) {
	// Define the state or values you want to share
	const [Dark, setDark] = useState(false);
	const [loadingState, setLoadingState] = useState(true);
	const _ = {
		Dark,
		setDark,
		loadingState,
		setLoadingState
	}

	// Return the provider with the value
	return <MyContext.Provider value={_}>{children}</MyContext.Provider>;
}
