import DataBase from '~/server/db'

export default defineNitroPlugin((nitroApp) => {
  DataBase.mount()
})
