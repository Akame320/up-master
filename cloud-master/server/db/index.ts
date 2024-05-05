import { Sequelize } from 'sequelize'
import user from '~/server/db/models/user'

const modelsCombiner = (sequelize: any) => {
  return {
    User: user(sequelize),
  }
}

class DataBase {
  instance: null | any = null
  models: null | any = null

  async mount() {
    this.instance = new Sequelize('cloud-master', 'postgres', 'root', {
      host: 'db',
      dialect: 'postgres',
    })

    this.models = modelsCombiner(this.instance)

    try {
      await this.instance.authenticate()
      await this.instance.sync({ force: true })

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
