import { sitePath } from '../consts';

export function GET({ site }: { site: URL }) {
	const sitemap = new URL(sitePath('/sitemap-index.xml'), site);
	return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
