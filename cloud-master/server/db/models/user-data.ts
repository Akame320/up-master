import { DataTypes } from 'sequelize'

export default (sequelize: any) => {
  return sequelize.define('Data', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
}
