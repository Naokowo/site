/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { pathNikita } from './path';
import { HEADERS, htmlToText, getBody } from './utils';

export interface Env {
	DB: D1Database;
}

export default {
	/**
	 * Returns the index.html content.
	 * @returns {Response} - The response with the index.html content.
	 */
	async fetch(request: Request, env: Env): Promise<Response> {
		const { pathname } = new URL(request.url);
		pathname.toLowerCase();
		const body = await getBody(request);
		if (body === 'Invalid JSON') {
			return Response.json({ error: 'Invalid JSON' });
		}

		// PATHS:

		/**
		 * Returns the index.html content.
		 * @returns {Response} - The response with the index.html content.
		 */
		if (pathname === '/') {
			return new Response(htmlToText('index.html'), HEADERS.HTML);
		}

		/**
		 * Handles the "/nikita" path.
		 * @returns {Promise<Response>} - The response from the pathNikita function.
		 */
		if (pathname.startsWith('/nikita')) {
			return pathNikita(pathname, env.DB, body);
		}

		// If the pathname is not found return 404
		return new Response(`Not found: ${request.url}`, { status: 404 });
	},
};
