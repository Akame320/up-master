export default defineEventHandler(async (event) => {
  const hasToken = getCookie(event, 'auth-token')
  console.log('Работает! ')
  if (!hasToken) {
    return await sendRedirect(event, '/auth/login')
  } else {
    return await sendRedirect(event, '/profile/dashboard')
  }
})
