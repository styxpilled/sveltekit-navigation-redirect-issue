/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { content: Math.random() }
}