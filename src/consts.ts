export const SITE_TITLE = 'Sihle’s Studio';
export const AUTHOR_BIO_SHORT =
	'我是 Sihle，一位自學者，正朝全端開發持續前進。平時也關注投資理財，喜歡閱讀，並在 Sihle’s Studio 記錄學習與生活中的思考。';
export const SITE_DESCRIPTION = AUTHOR_BIO_SHORT;

export const SITE_EMAIL = 'yb0x5rjoz@mozmail.com';
export const THREADS_URL = 'https://www.threads.com/@sihl.e8220';

export const CATEGORY_LABELS = {
	'website-development': '網站開發',
	finance: '投資理財',
	'daily-life': '生活日常',
} as const;

export type BlogCategory = keyof typeof CATEGORY_LABELS;

export function sitePath(path = ''): string {
	const base = import.meta.env.BASE_URL;
	return `${base}${path.replace(/^\/+/, '')}`;
}

export function visiblePosts<T extends { data: { draft?: boolean } }>(posts: T[]): T[] {
	return import.meta.env.PROD ? posts.filter((post) => !post.data.draft) : posts;
}
