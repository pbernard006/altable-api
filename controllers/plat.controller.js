import platService from '../services/plat.service.js';

async function get(req, res) {
var response = await platService.getAllPlats();
    try {
         res.status(200).json(response);
    } catch (error) {
     res.status(500).send(error);
    }
}

async function add(req, res){
    var response = await platService.savePlat(req.body.name, req.body.description, req.body.type, req.body.prix, req.body.quantite)
    if(response.errorMessage != null){
        res.status(412).json({message: response.errorMessage})
    }
    else{
        res.status(201).json({platId: response.platId})
    }
}

async function edit(req, res){
    var response = await platService.editPlat(req.body.name, req.body.quantite);
    if(response.errorMessage != null){
        res.status(412).json({message: response.errorMessage})
    }
    else{
        res.status(200).json({platName: response.platName,
        platQuantite: response.platQuantite
    })
    }
}

async function getPlatsDispo(req, res){
    var response = await platService.getPlatsDispo();
    if(response.errorMessage != null){
        res.status(412).json({message: response.errorMessage})
    }else{
        res.status(200).json(response)
    }

}

const platController = {
    get,
    add,
    edit,
    getPlatsDispo
};

export default platController ;