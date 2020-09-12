import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

import style from '../../styles/navbar.module.css';

const Navbar = ({ inputText, inputHandler, buttonHandler }) => {
	const { darkMode, toggleDarkMode, mountedComponent } = useContext(
		ThemeContext
	);

	if (mountedComponent) document.body.className = darkMode ? 'dark' : '';

	const onChangeHandler = (e) => {
		inputHandler(e.target.value);
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			buttonHandler();
		}
	};

	return (
		<div
			className={`flex justify-center fixed top-0 w-screen z-20 ${
				darkMode ? 'bg-gray-800' : 'bg-white'
			}`}
		>
			<div
				className={`flex flex-col sm:flex-row justify-between items-center p-4 md:w-4/6 lg:w-5/6 xl:w-3/6 w-full space-y-4 sm:space-y-0 ${
					darkMode ? 'text-white' : ''
				}`}
			>
				<div className='lg:w-4/12'>
					<span className='bg-red-600 py-1 px-2 rounded-lg text-white'>
						HCRL
					</span>
					<span
						className={`${darkMode ? 'text-white' : 'text-black'}`}
					>
						Tube
					</span>
					<sup className='ml-1 text-gray-600'>kmitl</sup>
				</div>
				<div className='flex items-center lg:w-8/12 space-x-4'>
					<div className='flex w-full'>
						<label
							htmlFor='search'
							style={{
								position: 'absolute',
								left: '-1000px',
							}}
						>
							ค้นหา
						</label>
						<input
							id='search'
							className='border border-gray-300 bg-transparent py-1 px-4 w-full'
							type='search'
							placeholder='ค้นหา'
							value={inputText}
							onChange={onChangeHandler}
							onKeyDown={onKeyDownHandler}
						/>
						<button
							className='py-2 px-4 w-12 border bg-gray-200'
							type='button'
							aria-label='Right Align'
							onClick={buttonHandler}
						>
							<svg
								viewBox='0 0 24 24'
								focusable='false'
								className='w-4'
							>
								<g className='style-scope yt-icon'>
									<path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
								</g>
							</svg>
						</button>
					</div>
					<label
						htmlFor='toggleTheme'
						className='flex items-center cursor-pointer'
					>
						<div className='relative'>
							<input
								id='toggleTheme'
								type='checkbox'
								className={`${style.toggleTheme} hidden`}
								defaultChecked={darkMode ? true : false}
								onClick={() => toggleDarkMode()}
							/>
							<div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
							<div
								className={`${style.toggleDot} absolute w-6 h-6 bg-white rounded-full border border-gray-400 inset-y-0 left-0`}
							></div>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
