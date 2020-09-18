const router = require('express').Router()
const { Media } = require('../models')

router.get('/media', (req, res) => {
  Media.find()
    .then(media => res.json(media))
    .catch(err => console.log(err))
})


router.post('/media', (req, res) => {
    media.create(req.body)
      .then(media => res.json(media))
      .catch(err => console.log(err))
  })


  router.put('/media/:id', (req, res) => {
    Media.findByIdAndUpdate(req.params.id, req.body)
      .then(media => res.json(media))
      .catch(err => console.log(err))
  })


  router.delete('/media/:id', (req, res) => {
    Media.findById(req.params.id)
      .then(media => media.reove())
      .then(media => res.json(media))
      .catch(err => console.log(err))
  })
  
module.exports = router