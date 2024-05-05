export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname.startsWith('/profile')) {
    const hasToken = getCookie(event, 'auth-token')

    if (!hasToken) {
      throw new Error('Not logged in')
    }
  }
})
