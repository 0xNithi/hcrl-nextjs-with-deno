import React, { cloneElement } from 'react';
import { ThemeProvider } from './ThemeProvider';

function ProviderComposer({ contexts, children }) {
	return contexts.reduce(
		(kids, parent) =>
			cloneElement(parent, {
				children: kids,
			}),
		children
	);
}
export default function ContextProvider({ children }) {
	return (
		<ProviderComposer contexts={[<ThemeProvider />]}>
			{children}
		</ProviderComposer>
	);
}
