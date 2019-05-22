const { Location, User, Item } = require('../models')

module.exports = app => {
  // GET all
  app.get('/items', (req, res) => {
    Item.findAll({ include: [User] })
      .then(items => res.json(items))
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/items/:id', (req, res) => {
    Item.findOne({ where: { id: req.params.id } })
      .then(item => res.json(item))
      .catch(e => console.log(e))
  })

  // POST one
  app.post('/items', (req, res) => {
    Item.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // PUT one
  app.put('/items/:id', (req, res) => {
    Item.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // DELETE one
  app.delete('/items/:id', (req, res) => {
    Item.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}