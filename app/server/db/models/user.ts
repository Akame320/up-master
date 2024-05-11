import { DataTypes } from 'sequelize'

export default (sequelize: any) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cloudToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rootToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })
}
