import { Sequelize } from 'sequelize'
import user from '~/server/db/models/user'
import userData from '~/server/db/models/user-data'
import sensors from '~/server/db/models/sensors'

const modelsCombiner = (sequelize: any) => {
  const User = user(sequelize)
  const Sensors = sensors(sequelize)
  const Data = userData(sequelize)

  User.hasMany(Sensors, {
    foreignKey: 'userId',
  })

  Sensors.hasMany(Data, {
    foreignKey: 'sensorId',
  })

  return {
    User,
    Sensors,
    Data,
  }
}

class DataBase {
  instance: null | any = null
  models: null | any = null

  async mount(dbname: string, dbUser: string, dbPassword: string) {
    this.instance = new Sequelize(dbname, dbUser, dbPassword, {
      host: 'db',
      dialect: 'postgres',
    })

    this.models = modelsCombiner(this.instance)

    try {
      await this.instance.authenticate()

      console.log('Data Base -:- start work')
    } catch (error) {
      console.log('Data Base -:- not work')
    }
  }

  get() {
    return { db: this.instance, ...this.models }
  }
}

const db = new DataBase()

export default db
