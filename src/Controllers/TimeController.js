const Time = require('../Models/Times')

module.exports = {
    async store(req, res){
        const data = req.body

        try{
            const addTime = await Time.create(data)
            return res.json({ "response": "success" })
        }catch(error){
            console.log(error)
        }
    },

    async index(req, res){
        const { query } = req.body

        try{
            let test = await Time.find({ nomeTime: query }) 
            if(test.length >= 1){
                const result = await Time.find({ nomeTime: query })
                res.status(200).json(result)
            }else{
                test = await Time.find({ "elenco.nome": query })
            }
            if(test.length >= 1){
                const result = await Time.find({ "elenco.nome": query })
                const jogador = result[0].elenco.filter(data => {
                    if(data.nome === query) return data
                })
                const objetofinal = {
                    time: result[0].nomeTime,
                    jogador
                }
                res.status(200).json(objetofinal)
            }else if(query === 'all'){
                const result = await Time.find()
                res.status(200).json(result)
            }else{
                res.status(404).json({ error: 'not found'})
            }
        }catch(error){
            console.log(error)
        }
    }
}