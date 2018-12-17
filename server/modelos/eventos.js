const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EventsSchema = new Schema({
  id: { type: String, required: false },
  title: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: false },
  allday: { type: Boolean, required: true },
  user: { type: String, required: true }
})

let EventsModel = mongoose.model('eventos', EventsSchema)
module.exports = EventsModel
