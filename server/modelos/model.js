const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  user: { type: String, required: true },
  pass: { type: String, required: true }
})

let UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel
