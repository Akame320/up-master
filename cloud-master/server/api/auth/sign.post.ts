import db from '~/server/db'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const { email, firstName, lastName, password, confirmPassword } =
    await readBody(event)
  const { User } = db.get()

  if (!email || !firstName || !lastName || !password) {
    setResponseStatus(event, 503, 'Not data')
    return
  }

  const user = await User.findOne({ where: { email } })
  if (user) {
    setResponseStatus(event, 503, 'User is not exist')
    return
  }

  if (password !== confirmPassword) {
    setResponseStatus(event, 503, 'Password mismatch')
    return
  }

  const hasPassword = await bcrypt.hash(password, 6)
  return await User.create({
    email,
    firstName,
    lastName,
    password: hasPassword,
  })
})
