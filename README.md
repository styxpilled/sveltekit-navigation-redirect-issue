# sveltekit-navigation-redirect-issue

When using SvelteKit's clientside link navigation, redirects are not being respected unless the link has the `data-sveltekit-reload` attribute. If a page returns a redirect, Kit just throws a 500 Internal Error for the user (no message on the server). You can verify that the responses are getting sent correctly and have 3xx status codes by checking devtools.

When using the `data-sveltekit-reload` or manually refreshing the page, the redirect works fine.

It doesn't seem to matter how the redirect is sent: Kit's `redirect()` error, `Response(null, { status: 302, headers: { Location: '/login' } })`, and `Response.redirect(event.url.origin + '/login', 302);` all give the same result.

I couldn't find any docs on this, so I assume this is either uninteded behavior or I'm doing something wrong.

Routes:
- `/hooks-redirect-error`: Redirecting using `hooks.server.js`
- `/hooks-redirect-prefetch-error`: Same but with `prefetch`
- `/manual-redirect-error`: Redirecting in `+page.server.js`
- `/should-redirect`: Redirecting using `hooks.server.js`, link has `data-sveltekit-reload`.
- `/redirect-target`: Route we're redirecting to.