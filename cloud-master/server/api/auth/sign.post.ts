import db from '~/server/db'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const { email, firstName, lastName, password, confirmPassword } =
    await readBody(event)
  const { User } = db.get()

  if (!email || !firstName || !lastName || !password) {
    throw createError({
      status: 500,
      message: 'Данные не заполнены',
    })
  }

  const user = await User.findOne({ where: { email } })
  if (user) {
    throw createError({
      status: 500,
      message: 'Email уже зарегистрирован',
    })
  }

  if (password !== confirmPassword) {
    throw createError({
      status: 500,
      message: 'Пароли не совпадают',
    })
  }

  const hasPassword = await bcrypt.hash(password, 6)
  return await User.create({
    email,
    firstName,
    lastName,
    password: hasPassword,
  })
})
