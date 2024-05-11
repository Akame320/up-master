import db from '~/server/db'

const { Data, User, Sensors } = db.get()

export default defineEventHandler(async (event) => {
  const url = new URL(getRequestURL(event))
  const email = url.searchParams.get('email')
  url.searchParams.delete('email')
  if (!email) {
    throw createError({
      status: 500,
      message: 'Нет Email',
    })
  }

  const user = await User.findOne({ where: { email } })
  if (!user.id) return user

  const sensors = await Sensors.findAll({ where: { userId: user.id } })

  for (const [name, value] of url.searchParams) {
    let sensor = sensors.find((item: any) => item.alias === name)

    if (!sensor) {
      sensor = await Sensors.create({
        userId: user.id,
        alias: name,
        name: name,
      })
    }

    Data.create({ value: value, sensorId: sensor.id })
  }

  return 'Saved!'
})
