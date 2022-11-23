import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const allowedPaths = [
    '/',
    '/redirect-target',
    '/manual'
  ]
  if (allowedPaths.indexOf(event.url.pathname) !== -1) {
    return resolve(event);
  }
  throw redirect(302, `${event.url.origin}/redirect-target`);
  //* the same thing happens if we use build our own redirect
  // return new Response(null, { status: 302, headers: { Location: '/login' } });
  //* and if we use the static method
  // return Response.redirect(`${event.url.origin}/login`, 302);
};