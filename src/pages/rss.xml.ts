import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, sitePath, visiblePosts } from '../consts';

export const GET: APIRoute = async ({ site }) => {
	if (!site) {
		throw new Error('Astro `site` must be configured to generate the RSS feed.');
	}

	const posts = visiblePosts(await getCollection('blog'));
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site,
		items: posts.map((post) => ({
			...post.data,
			link: sitePath(`/blog/${post.id}/`),
		})),
	});
};
