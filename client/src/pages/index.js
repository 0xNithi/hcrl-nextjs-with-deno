import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Navbar, PageFrame, Card } from '../components';

import { data } from '../data';

export default function Home() {
	const [inputText, setInputText] = useState('');
	const [searchResult, setSearchResult] = useState(data);
	const [loading, setLoading] = useState(false);

	const inputHandler = (value) => {
		setInputText(value);
	};

	const buttonHandler = async () => {
		setLoading(true);

		const data = { q: inputText };
		const res = await fetch(
			'https://www.celab.network/api/youtube/search',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		);
		const json = await res.json();
		setSearchResult(json);
	};

	useEffect(() => {
		setLoading(false);
	}, [searchResult]);

	return (
		<>
			<Navbar
				inputText={inputText}
				inputHandler={inputHandler}
				buttonHandler={buttonHandler}
			/>
			<PageFrame>
				<div className='flex flex-col space-y-4'>
					{!loading &&
						searchResult != null &&
						searchResult.items.map((item, key) => (
							<Card key={key} item={item} />
						))}
				</div>
			</PageFrame>
		</>
	);
}
