import DataBase from '~/server/db'

export default defineNitroPlugin((nitroApp) => {
  const { dbname, dbUser, dbPassword } = useRuntimeConfig()
  DataBase.mount(dbname, dbUser, dbPassword)
})
