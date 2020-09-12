import { Application, send, Context } from 'https://deno.land/x/oak/mod.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';
import router from './routes.ts';

const { args } = Deno;
const argPort = parse(args).port;
const port = argPort ? Number(argPort) : 8000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context: Context) => {
	await send(context, context.request.url.pathname, {
		root: `${Deno.cwd()}/client/out`,
		index: 'index.html',
	});
});

console.log(`Server running on port ${port}...`);

await app.listen({ port });
