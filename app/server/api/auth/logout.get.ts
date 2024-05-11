export default defineEventHandler(async (event) => {
  deleteCookie(event, 'auth-token')
})
