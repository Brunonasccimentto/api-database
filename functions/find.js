const connection = require("../connection/mysql")

function findId(req, res){

    connection.query("SELECT * FROM pessoa", (err, rows)=>{
        if (err) throw err; 
        
        let pathId = parseInt(req.params["id"])
        
        let result = rows.find((data)=>{
            if(data.idpessoa != pathId){
                return res.status(404).send("nenhum dado foi encontrado")
            }

            return data.idpessoa === pathId
        })
        res.status(200).send(result)
        
    }) 
} 

module.exports = findId