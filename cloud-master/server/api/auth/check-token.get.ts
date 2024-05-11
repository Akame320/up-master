export default defineEventHandler(async (event) => {
  const hasToken = getCookie(event, 'auth-token')

  if (!hasToken) {
    throw createError({
      status: 500,
      message: 'Токена нет',
    })
  }

  return ''
})
