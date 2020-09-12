import { Router } from 'https://deno.land/x/oak/mod.ts';

import { Search } from './types.ts';

const router = new Router();

const key = 'AIzaSyCW0_bkCRfuPqNAD-DpUlt4W64CQED17UA';

const search = async ({
	request,
	response,
}: {
	request: any;
	response: any;
}) => {
	const body = await request.body();
	const search: Search = await body.value;

	const youtube = await fetch(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search.q}&type=video&key=${key}`
	);

	response.status = 200;
	response.body = await youtube.json();
};

router.post('/api/youtube/search', search);

export default router;
