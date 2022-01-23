import platRepository from '../repositories/plat.repository.js';
import Plat from './plat.model.js';

function getAllPlats(){
    return platRepository.getAllPlats();
}

async function savePlat(name, description, type, prix, quantite){
    var platWithSameNameExist = await platRepository.existByName(name);
    if(platWithSameNameExist){
        return {errorMessage : "Un plat du même nom existe déjà"};
    }
    else{
        var id = platRepository.savePlat(name, description, type, prix, quantite)
        return {
            platId: id
        }
    }
}

const platService = {
    getAllPlats,
    savePlat
};

export default platService ;