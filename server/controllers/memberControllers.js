// const { default: mongoose } = require('mongoose') dont' need this
const memberModel = require('../models/memberModel')
// const mongoose = require('mongoose') don't need this

const getMembers = (req, res) => {
  console.log('getting members')
  res.send(()=> console.log('got members'))
}

const addMember = (req, res) => {
  console.log('adding member')
  // console.log(req.body.name)
  const memberItem = new memberModel({
    name: req.body.name,
    goldStatus: req.body.goldStatus,
    club: req.body.club
  })
  memberItem.save((err, memberItem) => {
    if(err) {
      res.send(err)
      console.log(err)
    }
    res.json(memberItem)
  })
}

module.exports = { getMembers, addMember }