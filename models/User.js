const {Schema, model} = require('mongoose')

const schema = new Schema({
  userPhone: {type: String, required: true},
  userName: {type: String, required: true},
  status: {type: String, required: true},
  created: Date
})

module.exports = model('User', schema)