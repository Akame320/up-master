import db from '~/server/db'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  const { User } = db.get()

  if (!email || !password) {
    throw createError({
      status: 500,
      message: 'There is not enough data to process the request',
    })
  }

  const user = await User.findOne({ where: { email } })
  if (!user) {
    throw createError({
      status: 500,
      message: 'Email is not exists or invalid',
    })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    throw createError({
      status: 500,
      message: 'Password is not valid',
    })
  }

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: user.email,
    },
    'secret'
  )

  setCookie(event, 'auth-token', token, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  })
  return 'Yes'
})
