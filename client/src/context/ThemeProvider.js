import React, { createContext, useState, useReducer, useEffect } from 'react';

export const ThemeContext = createContext({});

const initialState = {
	darkMode: false,
};

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_DARK_MODE':
			localStorage.setItem('darkMode', !state.darkMode);
			return {
				darkMode: !state.darkMode,
			};
		case 'SET_DARK_MODE':
			return {
				darkMode: action.payload,
			};
		default: {
			return state;
		}
	}
};

export const ThemeProvider = ({ children }) => {
	const [themeState, themeDispatch] = useReducer(themeReducer, initialState);
	const [mountedComponent, setMountedComponent] = useState(false);

	useEffect(() => {
		themeDispatch({
			type: 'SET_DARK_MODE',
			payload: localStorage.getItem('darkMode')
				? JSON.parse(localStorage.getItem('darkMode'))
				: false,
		});
		setMountedComponent(true);
	}, []);

	const { darkMode } = themeState;

	const toggleDarkMode = () => themeDispatch({ type: 'TOGGLE_DARK_MODE' });

	return (
		<ThemeContext.Provider
			value={{ darkMode, toggleDarkMode, mountedComponent }}
		>
			{children}
		</ThemeContext.Provider>
	);
};
