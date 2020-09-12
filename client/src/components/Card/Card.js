import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

import style from '../../styles/card.module.css';

const Card = ({ item }) => {
	const { darkMode } = useContext(ThemeContext);

	const mouseMoveHandler = (e) => {
		const x = e.pageX - e.currentTarget.offsetLeft;
		const y = e.pageY - e.currentTarget.offsetTop;

		e.currentTarget.style.setProperty('--x', `${x}px`);
		e.currentTarget.style.setProperty('--y', `${y}px`);
	};

	return (
		<a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
			<div
				id={item.id.videoId}
				className={`flex border rounded-lg ${
					darkMode
						? 'bg-gray-700 border-gray-900 text-gray-300'
						: 'bg-white border-gray-200'
				} ${style.card}`}
				onMouseMove={mouseMoveHandler}
			>
				<img
					className='w-2/4 md:w-1/4'
					src={item.snippet.thumbnails.high.url}
					alt={item.snippet.title}
				/>
				<div className='w-2/4 md:w-3/4 pl-4'>
					<p className='font-bold text-md md:text-lg break-words'>
						{item.snippet.title}
					</p>
					<p className='hidden text-sm md:text-md md:block break-words'>
						{item.snippet.description}
					</p>
					<p className='text-sm md:text-md text-gray-500 break-words'>
						{item.snippet.channelTitle}
					</p>
				</div>
			</div>
		</a>
	);
};

export default Card;
