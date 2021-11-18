const { request, response } = require('express');
const connection = require('../database/connection');
const { index } = require('./OngController');

module.exports = {
    async index(req,res) {
        const { page=1  } = req.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs','ong_id','=','incidents.ong_id') //Show data from ongs that have the same id as in the table of incidents
        .limit(5) //Take 5 incidents per page
        .offset((page-1)*5) //Take the next 5 incidents
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
            ]);

        res.header('X-Total-Count',count['count(*)']);

        return res.json(incidents);
    },

    async create(req,res) {
        const { title,description,value } = req.body;
        const ong_id = req.headers.authorization; //Data from user authentication for example
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return res.json({ id });
    },

    async delete(req,res) {
       const { id } = req.params; 
       const ong_id = req.headers.authorization;

       const incident = await connection('incidents')
       .where('id',id) //Procura o id do caso
       .select('ong_id') //Seleciona o id da ong do caso
       .first();

       if(incident.ong_id != ong_id) {
           return res.status(401).json({ error: 'Operation not permitted.'});
       }

       await connection('incidents').where('id',id).delete();

       return res.status(204).send(); //204 is answer without body
    }
}