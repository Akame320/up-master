export default defineEventHandler((event) => {
  if (getRequestURL(event).pathname.startsWith('/profile')) {
    const hasToken = getCookie(event, 'auth-token')

    console.log(
      'РАааааааааааааааааааБООООООООООООТААААААААААААААЕЕЕЕЕЕЕЕЕЕЕЕТТТТТТТТТТТ'
    )

    if (!hasToken) {
      throw createError({
        status: 500,
        statusMessage: 'Вы не авторизованы',
      })
    }
  }
})
