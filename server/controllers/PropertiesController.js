const Properties = require('../models/PropertiesData')

module.exports = {

    async create(request, response){
        const { type, title, description } = request.body

        if(!type || !title){
            return response.status(400).json({
                error: "Dados incompletos."
            })
        }

        const propertiesCreated = await Properties.create({
            type,
            title,
            description
        })

        return response.json(propertiesCreated)
        
    },

    async read(request, response){
        const propertiesList = await Properties.find()
        return response.json(propertiesList)
    },

    async update(request, response){

        const { id } = request.params
        const { description, title } = request.body

        const propertie = await Properties.findOne({ _id : id})

        if( description || title ){
            propertie.title = title ? title : propertie.title
            propertie.description = description ? description : propertie.description
            await propertie.save()
        }

        return response.json(propertie)

    },

    async delete(request, response){

        const { id } = request.params
        const propertie = await Properties.findByIdAndDelete( { _id : id})

        if(!propertie) {
            return response.status(401).json({
                error: "Imóvel não encontrado"
            })
        } else {
            response.json(propertie)
        }

    }

}