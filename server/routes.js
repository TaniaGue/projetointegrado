const express = require('express')

const routes = express.Router();

const PropertiesController = require('./controllers/propertiesController')

// padão rest
routes.get('/properties', PropertiesController.read)
routes.post('/properties', PropertiesController.create)
routes.delete('/properties/:id', PropertiesController.delete)
routes.put('/properties/:id', PropertiesController.update)

routes.get('/', (request, response) => {
    return response.json({
        nome: "Marcelo",
        sobrenome: "Cavalcante"
    })
}) 

module.exports = routes