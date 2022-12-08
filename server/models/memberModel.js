const mongoose = require('mongoose')
const Schema = mongoose.Schema
// one more

const MemberSchema = new Schema({
  name: String,
  goldStatus: Boolean,
  club: String,
})

module.exports = mongoose.model('Members', MemberSchema)
