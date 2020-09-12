import Head from 'next/head';

import ContextProvider from '../context/ProviderComposer';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>HCRL - Youtube</title>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='HCRL Next.js with Deno project'
				/>
				<meta name='keywords' content='HCRL, Next.js, Deno' />
				<meta name='author' content='Nithi Nomprawat' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}

export default MyApp;
